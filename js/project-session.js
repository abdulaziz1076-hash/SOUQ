// js/project-session.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';
import { APP_CONFIG } from './config.js';

const supabase = createClient(APP_CONFIG.supabaseUrl, APP_CONFIG.supabaseAnonKey);

let currentUser = null;
let currentProject = null;

// ==================== التحقق من الجلسة ====================
export async function checkProjectSession() {
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
        currentUser = session.user;
        const { data: project } = await supabase
            .from('projects')
            .select('id, name_ar, name_en, status, license_status')
            .eq('owner_user_id', currentUser.id)
            .maybeSingle();
        currentProject = project;
        return { user: currentUser, project };
    }
    return null;
}

// ==================== تسجيل الخروج ====================
export async function logoutProject() {
    await supabase.auth.signOut();
    localStorage.removeItem('projectOwnerSession');
    window.location.reload();
}

// ==================== إنشاء HTML لأيقونة المستخدم ====================
function createUserMenuHTML(projectName) {
    const name = projectName || (currentUser?.email?.split('@')[0]) || 'صاحب المشروع';
    return `
        <div class="user-menu-wrapper" id="userMenuWrapper">
            <div class="user-icon" id="userIconBtn">
                <i class="fas fa-user-circle"></i>
                <span class="user-name-mobile">${escapeHtml(name.substring(0, 15))}</span>
            </div>
            <div class="user-dropdown" id="userDropdown">
                <a href="project-dashboard.html"><i class="fas fa-tachometer-alt"></i> لوحة التحكم</a>
                <a href="project-dashboard.html?tab=profile"><i class="fas fa-user-edit"></i> ملفي الشخصي</a>
                <hr>
                <a href="#" id="logoutBtnHeader"><i class="fas fa-sign-out-alt"></i> تسجيل الخروج</a>
            </div>
        </div>
    `;
}

// هروب من الأحرف الخاصة
function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, m => {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

// ==================== إضافة أيقونة المستخدم إلى الهيدر ====================
export async function injectUserIcon() {
    const headerActions = document.querySelector('.header-actions');
    if (!headerActions) return;
    if (document.getElementById('userMenuWrapper')) return;

    const sessionData = await checkProjectSession();
    if (sessionData && sessionData.project) {
        const projectName = sessionData.project.name_ar || sessionData.project.name_en || 'مشروعي';
        const menuHTML = createUserMenuHTML(projectName);
        const menuToggle = headerActions.querySelector('.menu-toggle');
        if (menuToggle) {
            menuToggle.insertAdjacentHTML('beforebegin', menuHTML);
        } else {
            headerActions.insertAdjacentHTML('beforeend', menuHTML);
        }

        // ربط الأحداث
        const userIconBtn = document.getElementById('userIconBtn');
        const userDropdown = document.getElementById('userDropdown');
        const logoutBtn = document.getElementById('logoutBtnHeader');

        if (userIconBtn) {
            userIconBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                userDropdown.classList.toggle('show');
            });
        }
        if (logoutBtn) {
            logoutBtn.addEventListener('click', (e) => {
                e.preventDefault();
                logoutProject();
            });
        }
        // إغلاق القائمة عند النقر خارجها
        document.addEventListener('click', (e) => {
            if (userDropdown && !userIconBtn?.contains(e.target)) {
                userDropdown.classList.remove('show');
            }
        });
    }
}

// ==================== تحديث عداد السلة ====================
export function updateCartCount() {
    try {
        const cart = JSON.parse(localStorage.getItem('projectCart') || '[]');
        const total = cart.reduce((sum, item) => sum + (Number(item.quantity) || 0), 0);
        const badge = document.getElementById('cartCount');
        if (badge) badge.innerText = total;
    } catch(e) { console.warn(e); }
}

// ==================== التحقق من حجم الملف قبل الرفع ====================
export function validateFileSize(file, maxMB = 2) {
    const maxBytes = maxMB * 1024 * 1024;
    if (file.size > maxBytes) {
        alert(`⚠️ حجم الملف يتجاوز ${maxMB} ميجابايت. الرجاء ضغطه أو اختيار ملف أصغر.`);
        return false;
    }
    return true;
}

// ==================== رفع ملف إلى Supabase Storage ====================
export async function uploadFile(bucket, path, file, maxMB = 2) {
    if (!validateFileSize(file, maxMB)) return null;
    const { error } = await supabase.storage.from(bucket).upload(path, file, { upsert: true });
    if (error) {
        console.error(error);
        alert("فشل رفع الملف: " + error.message);
        return null;
    }
    const { data: urlData } = supabase.storage.from(bucket).getPublicUrl(path);
    return urlData.publicUrl;
}

// ==================== تهيئة الجلسة عند تحميل الصفحة ====================
export async function initProjectSession() {
    await injectUserIcon();
    updateCartCount();
    window.addEventListener('storage', () => updateCartCount());
    setInterval(updateCartCount, 2000);
}

// تشغيل تلقائي
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProjectSession);
} else {
    initProjectSession();
}
