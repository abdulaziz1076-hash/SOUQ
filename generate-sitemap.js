// generate-sitemap.js (معدل)
// ينشئ sitemap.xml تلقائياً من بيانات Supabase

import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import { APP_CONFIG } from './config.js';

const supabase = createClient(APP_CONFIG.supabaseUrl, APP_CONFIG.supabaseAnonKey);
const BASE_URL = 'https://souqalmasharie.onrender.com';

async function generateSitemap() {
    console.log('🔄 جاري جلب البيانات من Supabase...');

    // جلب المشاريع النشطة (نستخدم created_at بدلاً من updated_at)
    const { data: projects, error: projErr } = await supabase
        .from('projects')
        .select('id, name_ar, created_at')
        .eq('status', 'active')
        .eq('is_email_verified', true);

    if (projErr) {
        console.error('❌ خطأ في جلب المشاريع:', projErr);
        throw projErr;
    }

    // جلب جميع المنتجات (نستخدم created_at بدلاً من updated_at)
    const { data: products, error: prodErr } = await supabase
        .from('products')
        .select('id, project_id, created_at');

    if (prodErr) {
        console.error('❌ خطأ في جلب المنتجات:', prodErr);
        throw prodErr;
    }

    console.log(`✅ تم جلب ${projects.length} مشروع و ${products.length} منتج`);

    // الحصول على تاريخ اليوم للتحديث
    const today = new Date().toISOString().split('T')[0];

    // بناء روابط Sitemap
    const urls = [];

    // الصفحة الرئيسية
    urls.push(`
    <url>
        <loc>${BASE_URL}/</loc>
        <lastmod>${today}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>`);

    // المشاريع (نستخدم created_at أو اليوم كبديل)
    projects.forEach(p => {
        const lastmod = p.created_at ? p.created_at.split('T')[0] : today;
        urls.push(`
    <url>
        <loc>${BASE_URL}/#/family/${p.id}</loc>
        <lastmod>${lastmod}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
    </url>`);
    });

    // المنتجات (نستخدم created_at أو اليوم كبديل)
    products.forEach(p => {
        const lastmod = p.created_at ? p.created_at.split('T')[0] : today;
        urls.push(`
    <url>
        <loc>${BASE_URL}/#/product/${p.project_id}/${p.id}</loc>
        <lastmod>${lastmod}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
    </url>`);
    });

    // إنشاء ملف XML
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('')}
</urlset>`;

    fs.writeFileSync('sitemap.xml', xml);
    console.log(`✅ تم إنشاء sitemap.xml بنجاح! (${urls.length} رابط)`);
}

generateSitemap().catch(console.error);
