const express = require('express');
const path = require('path');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3000;

// ==================== الإعدادات ====================

const SECRET_KEY = process.env.API_SECRET_KEY;
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbyMBfGz_xiaK2iqOA8_46g37xz7Cj9M7vUDmQO4A3Cvr4iLFy6buNSkUIOjMH3r0dox/exec';

console.log('🔧 إعدادات الخادم:');
console.log(`   SECRET_KEY: ${SECRET_KEY ? '✅ موجود' : '❌ غير موجود'}`);
console.log(`   GOOGLE_SHEETS_URL: ${GOOGLE_SHEETS_URL}`);

// ==================== Middleware ====================

app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com", "https://cdnjs.cloudflare.com"],
            fontSrc: ["'self'", "https://fonts.gstatic.com", "https://cdnjs.cloudflare.com"],
            scriptSrc: ["'self'", "'unsafe-inline'", "https://cdnjs.cloudflare.com", "https://www.googletagmanager.com"],
            scriptSrcAttr: ["'unsafe-inline'"],
            imgSrc: ["'self'", "data:", "https:"],
            connectSrc: ["'self'", "https://script.google.com", "https://script.googleusercontent.com", "https://www.google-analytics.com", "https://api.ipify.org"],
        },
    },
}));

app.use(compression());
app.use(express.json());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: { error: 'تم تجاوز حد الطلبات' }
});
app.use('/api/', limiter);

// ==================== التخزين المؤقت ====================

let cachedData = null;
let lastFetchTime = 0;
let fetchInProgress = false;
const CACHE_DURATION = 5 * 60 * 1000; // 5 دقائق

async function fetchDataFromSheets() {
    if (fetchInProgress) {
        console.log('⏳ جلب البيانات قيد التنفيذ...');
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
        console.log(`🔄 [${new Date().toISOString()}] جلب البيانات من Google Sheets...`);
        
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 15000);
        
        const response = await fetch(GOOGLE_SHEETS_URL, {
            method: 'GET',
            headers: { 'Accept': 'application/json' },
            signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        
        const data = await response.json();
        
        if (!Array.isArray(data)) {
            throw new Error('البيانات ليست مصفوفة');
        }
        
        console.log(`✅ تم جلب ${data.length} سجل من Google Sheets`);
        cachedData = data;
        lastFetchTime = Date.now();
        
        return data;
        
    } catch (error) {
        console.error(`❌ خطأ: ${error.message}`);
        
        if (cachedData) {
            console.log(`⚠️ استخدام بيانات مخزنة من ${new Date(lastFetchTime).toLocaleTimeString()}`);
            return cachedData;
        }
        
        return [];
        
    } finally {
        fetchInProgress = false;
    }
}

// ==================== API Endpoints ====================

app.get('/api/contacts', async (req, res) => {
    const startTime = Date.now();
    
    try {
        const data = await fetchDataFromSheets();
        
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
            project_name: contact.name || contact.project_name,
            emirate: contact.emirate,
            category: contact.category,
            is_paid: contact.is_paid || false,
            has_license: contact.adra_license === 'نعم'
        }));
        
        const responseTime = Date.now() - startTime;
        
        res.setHeader('Cache-Control', 'public, max-age=300');
        res.setHeader('X-Response-Time', `${responseTime}ms`);
        
        console.log(`✅ تم إرسال ${contacts.length} جهة اتصال (${responseTime}ms)`);
        
        res.json({
            success: true,
            count: contacts.length,
            data: contacts,
            cached: (Date.now() - lastFetchTime) < CACHE_DURATION,
            lastUpdate: lastFetchTime
        });
        
    } catch (error) {
        console.error(`❌ خطأ: ${error.message}`);
        res.status(500).json({
            success: false,
            error: 'خطأ في الخادم',
            data: []
        });
    }
});

app.get('/api/health', (req, res) => {
    res.json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        cached: cachedData !== null,
        records: cachedData ? cachedData.length : 0
    });
});

// ==================== الملفات الثابتة ====================

app.use(express.static(path.join(__dirname), {
    maxAge: '1d',
    etag: true
}));

app.use('/images', express.static(path.join(__dirname, 'images'), {
    maxAge: '7d'
}));

// ==================== التحديث الدوري ====================

setInterval(async () => {
    console.log('🔄 تحديث دوري للبيانات...');
    await fetchDataFromSheets();
}, CACHE_DURATION);

// تشغيل أولي
(async () => {
    console.log('🚀 بدء تشغيل الخادم...');
    await fetchDataFromSheets();
})();

// ==================== SPA Routing ====================

app.get('*', (req, res) => {
    if (req.path.startsWith('/api/')) {
        return res.status(404).json({ error: 'Not found' });
    }
    res.sendFile(path.join(__dirname, 'index.html'));
});

// ==================== تشغيل الخادم ====================

const server = app.listen(PORT, () => {
    console.log('═'.repeat(50));
    console.log(`🚀 خادم سوق المشاريع يعمل على المنفذ ${PORT}`);
    console.log(`🔗 http://localhost:${PORT}`);
    console.log('═'.repeat(50));
});

process.on('SIGTERM', () => {
    console.log('🛑 إيقاف الخادم...');
    server.close(() => process.exit(0));
});
