const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 3000;

// مفتاح Google Sheets من متغيرات البيئة
const SECRET_KEY = process.env.API_SECRET_KEY || 'x7K9mP2qR5tY8uV3wZ1aB4cD6fG9hJ2kL5nP7qR9sT2uV5wX8z';
const GOOGLE_SHEETS_URL = process.env.GOOGLE_SHEETS_URL;

// تخزين مؤقت للبيانات
let cachedData = null;
let lastFetchTime = 0;
const CACHE_DURATION = 10 * 60 * 1000; // 10 دقائق

// وسطاء (Middleware)
app.use(compression());
app.use(express.json());

// السماح بـ CORS للتطوير المحلي
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// خدمة الملفات الثابتة
app.use(express.static(path.join(__dirname)));
app.use('/images', express.static(path.join(__dirname, 'images')));

// ==================== API لجلب البيانات من Google Sheets ====================

async function fetchDataFromSheets() {
    if (!GOOGLE_SHEETS_URL) {
        console.log('⚠️ GOOGLE_SHEETS_URL غير محدد');
        return [];
    }
    
    const urlWithKey = `${GOOGLE_SHEETS_URL}?key=${SECRET_KEY}`;
    console.log('🔄 جلب البيانات من Google Sheets...');
    
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);
        
        const response = await fetch(urlWithKey, {
            signal: controller.signal,
            headers: { 'Accept': 'application/json' }
        });
        
        clearTimeout(timeoutId);
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        
        const data = await response.json();
        
        let contacts = [];
        if (data && data.success === true && Array.isArray(data.data)) {
            contacts = data.data;
        } else if (data && Array.isArray(data)) {
            contacts = data;
        } else if (data && data.data && Array.isArray(data.data)) {
            contacts = data.data;
        }
        
        console.log(`✅ تم جلب ${contacts.length} جهة اتصال`);
        
        cachedData = contacts;
        lastFetchTime = Date.now();
        
        return contacts;
        
    } catch (error) {
        console.error(`❌ خطأ: ${error.message}`);
        
        if (cachedData) {
            console.log(`⚠️ استخدام بيانات مخزنة`);
            return cachedData;
        }
        
        return [];
    }
}

// ==================== مسارات API ====================

// جلب جميع جهات الاتصال
app.get('/api/contacts', async (req, res) => {
    try {
        const data = await fetchDataFromSheets();
        
        const contacts = (data || []).map(contact => ({
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
            website: contact.website || null
        }));
        
        res.json({
            success: true,
            count: contacts.length,
            data: contacts
        });
        
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'حدث خطأ داخلي',
            data: []
        });
    }
});

// جلب جهة اتصال محددة
app.get('/api/contacts/:id', async (req, res) => {
    try {
        const data = await fetchDataFromSheets();
        const contact = (data || []).find(c => 
            c.id == req.params.id || c.project_id == req.params.id
        );
        
        if (!contact) {
            return res.status(404).json({ success: false, error: 'غير موجود' });
        }
        
        res.json({
            success: true,
            data: {
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
                website: contact.website || null
            }
        });
        
    } catch (error) {
        res.status(500).json({ success: false, error: 'حدث خطأ' });
    }
});

// التحقق من صحة الخادم
app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        cached: cachedData !== null,
        cacheCount: cachedData ? cachedData.length : 0
    });
});

// جميع المسارات الأخرى - إرجاع index.html
app.get('*', (req, res) => {
    if (req.path.startsWith('/api/')) {
        return res.status(404).json({ error: 'غير موجود' });
    }
    res.sendFile(path.join(__dirname, 'index.html'));
});

// ==================== تشغيل الخادم ====================

// تحديث دوري للبيانات
setInterval(async () => {
    await fetchDataFromSheets();
}, CACHE_DURATION);

// جلب أولي للبيانات
fetchDataFromSheets();

app.listen(PORT, () => {
    console.log(`🚀 الخادم يعمل على http://localhost:${PORT}`);
    console.log(`📊 Google Sheets: ${GOOGLE_SHEETS_URL ? '✅ موجود' : '❌ مفقود'}`);
});
