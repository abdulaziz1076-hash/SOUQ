// api/contacts.js
export default async function handler(req, res) {
    // السماح من نطاق موقعك
    const allowedOrigin = 'https://souqalmasharie.onrender.com';
    res.setHeader('Access-Control-Allow-Origin', allowedOrigin);
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-api-key');
    
    // معالجة preflight request
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    
    // التحقق من المفتاح
    const apiKey = req.headers['x-api-key'];
    const SECRET_KEY = 'MySuperSecretKey2026';
    
    if (apiKey !== SECRET_KEY) {
        return res.status(401).json({ 
            error: 'غير مصرح بالوصول',
            message: 'مفتاح API غير صحيح'
        });
    }
    
    try {
        const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbzIxohF1YAtTDcYgDcPi-u5J808PAVCYS-f3BL6ZH6UVQvxlaoBb4EKEAIPulvozkfE/exec';
        
        const response = await fetch(GOOGLE_SHEETS_URL);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const contacts = await response.json();
        res.status(200).json(contacts);
        
    } catch (error) {
        console.error('Error fetching contacts:', error);
        res.status(500).json({ 
            error: 'خطأ في الخادم',
            message: 'تعذر جلب بيانات التواصل'
        });
    }
}
