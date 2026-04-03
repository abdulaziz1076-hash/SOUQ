const express = require('express');
const path = require('path');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3000;

// ==================== الإعدادات الأمنية ====================

// 🔐 المفتاح السري - يتم تخزينه في Environment Variables في Render
const SECRET_KEY = process.env.API_SECRET_KEY || 'dev-key-123';

// قائمة النطاقات المسموح بها (لمنع الوصول غير المصرح به)
const ALLOWED_ORIGINS = [
    'https://souqalmasharie.onrender.com',
    'https://www.souqalmasharie.onrender.com',
    'http://localhost:3000',
    'http://127.0.0.1:3000'
];

// ==================== Middleware ====================

// 🔒 حماية الرأسيات (Helmet) - بدون X-Frame-Options المكرر
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com", "https://cdnjs.cloudflare.com"],
            fontSrc: ["'self'", "https://fonts.gstatic.com", "https://cdnjs.cloudflare.com"],
            scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", "https://cdnjs.cloudflare.com", "https://www.googletagmanager.com"],
            scriptSrcAttr: ["'unsafe-inline'"],  // <-- أضف هذا السطر
            imgSrc: ["'self'", "data:", "https:"],
            connectSrc: ["'self'", "https://script.google.com", "https://www.google-analytics.com", "https://api.ipify.org"],
        },
    },
}));

// 📦 ضغط الردود لتحسين الأداء
app.use(compression());

// 📝 تحليل JSON
app.use(express.json());

// 🚦 تحديد معدل الطلبات (منع الهجمات)
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 دقيقة
    max: 100, // الحد الأقصى 100 طلب لكل IP
    message: { error: 'تم تجاوز حد الطلبات، يرجى المحاولة لاحقاً' },
    standardHeaders: true,
    legacyHeaders: false,
});
app.use('/api/', limiter);

// ==================== التخزين المؤقت للبيانات ====================

let cachedData = null;
let lastFetchTime = 0;
let fetchInProgress = false;
const CACHE_DURATION = 10 * 60 * 1000; // 10 دقائق

// 🗄️ دالة جلب البيانات من Google Sheets
async function fetchDataFromSheets() {
    // منع الطلبات المتزامنة المتعددة
    if (fetchInProgress) {
        console.log('⏳ جلب البيانات قيد التنفيذ بالفعل، انتظار...');
        return new Promise((resolve) => {
            const interval = setInterval(() => {
                if (!fetchInProgress && cachedData) {
                    clearInterval(interval);
                    resolve(cachedData);
                }
            }, 100);
        });
    }

    fetchInProgress = true;
    
    try {
        // في بيئة التطوير، نستخدم بيانات تجريبية
        if (process.env.NODE_ENV !== 'production' || !SECRET_KEY || SECRET_KEY === 'dev-key-123') {
            console.log('📝 وضع التطوير: استخدام بيانات تجريبية');
            // بيانات تجريبية للاختبار
            const mockData = [
                { id: 1, whatsapp: '971501234567', phone: '971501234567', email: 'test@example.com', instagram: 'test_account' },
                { id: 2, whatsapp: '971502345678', phone: '971502345678', email: 'test2@example.com' }
            ];
            cachedData = mockData;
            lastFetchTime = Date.now();
            return mockData;
        }

        const GOOGLE_SHEETS_URL = `https://script.google.com/macros/s/AKfycbyMBfGz_xiaK2iqOA8_46g37xz7Cj9M7vUDmQO4A3Cvr4iLFy6buNSkUIOjMH3r0dox/exec?key=${SECRET_KEY}`;
        
        console.log(`🔄 [${new Date().toISOString()}] جاري جلب البيانات من Google Sheets...`);
        
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 ثانية مهلة
        
        const response = await fetch(GOOGLE_SHEETS_URL, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'User-Agent': 'SouqAlMasharie/2.0 (https://souqalmasharie.onrender.com)'
            },
            signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();
        
        // التحقق من وجود خطأ من Google Sheets
        if (data && data.error) {
            throw new Error(`خطأ من Google Sheets: ${data.error}`);
        }
        
        // التحقق من صحة البيانات
        if (!Array.isArray(data)) {
            throw new Error('البيانات المستلمة ليست مصفوفة');
        }
        
        console.log(`✅ [${new Date().toISOString()}] تم جلب ${data.length} جهة اتصال بنجاح`);
        
        cachedData = data;
        lastFetchTime = Date.now();
        
        return data;
        
    } catch (error) {
        if (error.name === 'AbortError') {
            console.error('❌ انتهت مهلة الاتصال بـ Google Sheets (30 ثانية)');
        } else {
            console.error(`❌ خطأ في جلب البيانات: ${error.message}`);
        }
        
        // إذا كان لدينا بيانات مخزنة مسبقاً، نستخدمها
        if (cachedData) {
            console.log(`⚠️ استخدام البيانات المخزنة مؤقتاً من ${new Date(lastFetchTime).toISOString()}`);
            return cachedData;
        }
        
        // في حالة عدم وجود بيانات مخزنة، نعيد مصفوفة فارغة
        console.log('⚠️ لا توجد بيانات مخزنة، إرجاع مصفوفة فارغة');
        return [];
        
    } finally {
        fetchInProgress = false;
    }
}

// 🔄 تحديث التخزين المؤقت (يتم استدعاؤها بشكل دوري)
async function refreshCache(force = false) {
    const now = Date.now();
    const isExpired = (now - lastFetchTime) > CACHE_DURATION;
    
    if (force || isExpired || !cachedData) {
        console.log(force ? '🔄 تحديث إجباري للبيانات...' : '🔄 انتهت صلاحية البيانات، جاري التحديث...');
        return await fetchDataFromSheets();
    }
    
    return cachedData;
}

// ==================== نقاط النهاية (API Endpoints) ====================

// ✅ نقطة نهاية لجلب جميع بيانات التواصل
app.get('/api/contacts', async (req, res) => {
    const startTime = Date.now();
    
    try {
        // في بيئة التطوير، نسمح لجميع الطلبات
        const isDevMode = process.env.NODE_ENV !== 'production' || !SECRET_KEY || SECRET_KEY === 'dev-key-123';
        
        if (!isDevMode) {
            // في بيئة الإنتاج، نتحقق من المفتاح
            const apiKey = req.headers['x-api-key'] || req.query.key;
            if (apiKey !== SECRET_KEY) {
                console.warn(`⚠️ محاولة وصول غير مصرح بها من ${req.ip}`);
                return res.status(401).json({ 
                    error: 'غير مصرح بالوصول',
                    success: false 
                });
            }
        }
        
        // جلب البيانات
        const data = await refreshCache();
        
        const responseTime = Date.now() - startTime;
        
        if (!data || data.length === 0) {
            console.warn(`⚠️ لا توجد بيانات متاحة (استغرق ${responseTime}ms)`);
            // نعيد مصفوفة فارغة بدلاً من خطأ
            return res.json({
                success: true,
                count: 0,
                data: [],
                cached: false,
                lastUpdate: lastFetchTime
            });
        }
        
        // تحويل البيانات إلى الصيغة المطلوبة
        const contacts = data.map(contact => ({
            id: contact.id || contact.project_id,
            whatsapp: contact.whatsapp || null,
            phone: contact.phone || null,
            email: contact.email || null,
            instagram: contact.instagram || null,
            telegram: contact.telegram || null,
            snapchat: contact.snapchat || null,
            tiktok: contact.tiktok || null,
            facebook: contact.facebook || null,
            twitter: contact.twitter || null,
            website: contact.website || null,
            // معلومات إضافية للمشاريع
            project_name: contact.name || contact.project_name,
            emirate: contact.emirate,
            category: contact.category,
            is_paid: contact.is_paid || false,
            has_license: contact.adra_license === 'نعم'
        }));
        
        // إضافة رؤوس التخزين المؤقت للمتصفح
        res.setHeader('Cache-Control', 'public, max-age=300'); // 5 دقائق
        res.setHeader('X-Response-Time', `${responseTime}ms`);
        
        console.log(`✅ تم إرسال ${contacts.length} جهة اتصال (استغرق ${responseTime}ms)`);
        
        res.json({
            success: true,
            count: contacts.length,
            data: contacts,
            cached: (Date.now() - lastFetchTime) < CACHE_DURATION,
            lastUpdate: lastFetchTime
        });
        
    } catch (error) {
        console.error(`❌ خطأ في /api/contacts: ${error.message}`);
        res.status(500).json({
            error: 'حدث خطأ داخلي في الخادم',
            success: false,
            data: [],
            message: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
});

// ✅ نقطة نهاية للتحقق من صحة الخادم (Health Check)
app.get('/api/health', (req, res) => {
    res.json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        memory: process.memoryUsage(),
        cached: cachedData !== null,
        cacheAge: cachedData ? Math.floor((Date.now() - lastFetchTime) / 1000) : null,
        nodeEnv: process.env.NODE_ENV || 'development'
    });
});

// ✅ نقطة نهاية لتحديث البيانات يدوياً (للاستخدام الداخلي فقط)
app.post('/api/refresh', async (req, res) => {
    const apiKey = req.headers['x-api-key'] || req.query.key;
    
    // هذه النقطة تحتاج مفتاحاً صحيحاً
    if (apiKey !== SECRET_KEY) {
        return res.status(401).json({ error: 'غير مصرح بالوصول' });
    }
    
    console.log('🔄 تحديث يدوي للبيانات...');
    const data = await refreshCache(true);
    
    if (data) {
        res.json({ success: true, message: 'تم تحديث البيانات', count: data.length });
    } else {
        res.status(503).json({ success: false, message: 'فشل تحديث البيانات' });
    }
});

// ==================== الملفات الثابتة ====================

// خدمة الملفات الثابتة مع إضافة رؤوس التخزين المؤقت
app.use(express.static(path.join(__dirname), {
    maxAge: '1d',
    etag: true,
    lastModified: true,
    setHeaders: (res, filePath) => {
        // منع تخزين HTML مؤقتاً
        if (filePath.endsWith('.html')) {
            res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
        }
    }
}));

// تأكد من خدمة مجلد الصور
app.use('/images', express.static(path.join(__dirname, 'images'), {
    maxAge: '7d',
    etag: true
}));

// ==================== التحديث الدوري ====================

// تحديث البيانات كل 10 دقائق
setInterval(async () => {
    console.log('🔄 تحديث دوري للبيانات...');
    await refreshCache();
}, CACHE_DURATION);

// تحديث فوري عند بدء التشغيل
(async () => {
    console.log('🚀 جلب البيانات الأولية...');
    await refreshCache();
})();

// ==================== معالجة الصفحات ====================

// معالجة جميع الصفحات (لـ SPA) - مع دعم الروابط المباشرة
app.get('*', (req, res) => {
    // منع محاولة الوصول إلى ملفات API غير موجودة
    if (req.path.startsWith('/api/')) {
        return res.status(404).json({ error: 'API endpoint not found' });
    }
    
    // إرسال ملف index.html لجميع المسارات الأخرى
    res.sendFile(path.join(__dirname, 'index.html'));
});

// ==================== تشغيل الخادم ====================

const server = app.listen(PORT, () => {
    console.log('═'.repeat(50));
    console.log(`🚀 خادم سوق المشاريع يعمل على المنفذ ${PORT}`);
    console.log(`🔗 الرابط: http://localhost:${PORT}`);
    console.log(`🌐 البيئة: ${process.env.NODE_ENV || 'development'}`);
    console.log(`🔐 المفتاح السري: ${SECRET_KEY && SECRET_KEY !== 'dev-key-123' ? '✅ موجود' : '⚠️ وضع التطوير'}`);
    console.log(`💾 التخزين المؤقت: ${CACHE_DURATION / 1000 / 60} دقائق`);
    console.log('═'.repeat(50));
});

// معالجة إيقاف الخادم بشكل نظيف
process.on('SIGTERM', () => {
    console.log('🛑 استلام إشارة SIGTERM، جاري إيقاف الخادم...');
    server.close(() => {
        console.log('✅ تم إيقاف الخادم');
        process.exit(0);
    });
});

process.on('SIGINT', () => {
    console.log('🛑 استلام إشارة SIGINT، جاري إيقاف الخادم...');
    server.close(() => {
        console.log('✅ تم إيقاف الخادم');
        process.exit(0);
    });
});

// تصحيح الأخطاء غير المعالجة
process.on('uncaughtException', (error) => {
    console.error('❌ خطأ غير متوقع:', error);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('❌ رفض غير معالج:', reason);
});

module.exports = app;
