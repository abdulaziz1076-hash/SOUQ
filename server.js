const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// 🔐 المفتاح السري - يتم تخزينه في Environment Variables في Render
const SECRET_KEY = process.env.API_SECRET_KEY || 'x7K9mP2qR5tY8uV3wZ1aB4cD6fG9hJ2kL5nP7qR9sT2uV5wX8z';

// منع الوصول من نطاقات غير مصرح بها (اختياري)
const ALLOWED_ORIGINS = [
  'https://souqalmasharie.onrender.com',
  'http://localhost:3000'
];

// ✅ خدمة الملفات الثابتة (HTML, CSS, JS, images)
app.use(express.static(path.join(__dirname)));

// ✅ Proxy آمن لـ Google Sheets
app.get('/api/contacts', async (req, res) => {
  // التحقق من أصل الطلب (Referer) - طبقة أمان إضافية
  const referer = req.headers.referer || '';
  const isAllowedOrigin = ALLOWED_ORIGINS.some(origin => referer.startsWith(origin));
  
  // إذا كان الطلب من متصفح خارجي، نمنعه (اختياري)
  // if (!isAllowedOrigin && process.env.NODE_ENV === 'production') {
  //   return res.status(403).json({ error: 'غير مصرح بالوصول' });
  // }
  
  try {
    // رابط Google Sheets مع المفتاح السري
    const GOOGLE_SHEETS_URL = `https://script.google.com/macros/s/AKfycbyMBfGz_xiaK2iqOA8_46g37xz7Cj9M7vUDmQO4A3Cvr4iLFy6buNSkUIOjMH3r0dox/exec?key=${SECRET_KEY}`;
    
    console.log('🔄 جاري جلب بيانات التواصل من Google Sheets...');
    
    const response = await fetch(GOOGLE_SHEETS_URL);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const contacts = await response.json();
    
    // التحقق من وجود خطأ من Google Sheets
    if (contacts.error) {
      console.error('❌ خطأ من Google Sheets:', contacts.error);
      return res.status(500).json({ error: contacts.error });
    }
    
    console.log(`✅ تم جلب ${contacts.length} جهة اتصال بنجاح`);
    res.json(contacts);
    
  } catch (error) {
    console.error('❌ خطأ في جلب البيانات:', error.message);
    res.status(500).json({ 
      error: 'فشل جلب بيانات التواصل',
      details: error.message 
    });
  }
});

// ✅ معالجة جميع الصفحات (لـ SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// ✅ تشغيل الخادم
app.listen(PORT, () => {
  console.log(`🚀 الخادم يعمل على المنفذ ${PORT}`);
  console.log(`🔗 الرابط: http://localhost:${PORT}`);
});