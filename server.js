const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(compression());
app.use(express.json());

// نقطة نهاية بسيطة للتواصل (اختيارية)
app.get('/api/contacts', (req, res) => {
    res.json({ success: true, data: [] });
});

// نقطة صحة الخادم
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// خدمة الملفات الثابتة
app.use(express.static(path.join(__dirname), {
    maxAge: '1d',
    etag: true
}));

// معالجة جميع الصفحات (SPA)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// تشغيل الخادم
app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});
