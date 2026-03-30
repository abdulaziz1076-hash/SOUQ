
        const appState = {
            currentPage: 'home',
            currentEmirate: 'all',
            currentCategory: 'all',
            currentFamilyId: null,
            currentProductId: null,
            searchQuery: '',
            currentLanguage: 'ar',
            currentShareProduct: null,
            currentShareProfile: null,
            favorites: (() => {
                try {
                    return JSON.parse(localStorage.getItem('projectSouqFavorites')) || [];
                } catch (e) {
                    return [];
                }
            })(),
            currentZoomImages: [],
            currentZoomIndex: 0
        };

        // ==================== دوال مؤشر التحميل ====================
        function showLoader() {
            document.getElementById('loader').classList.add('show');
        }
        function hideLoader() {
            document.getElementById('loader').classList.remove('show');
        }

        // ==================== الترجمة ====================
        const translations = {
            ar: {
                siteTitle: "سوق المشاريع",
                privacy: "سياسة الخصوصية",
                terms: "شروط الاستخدام",
                dealsTitle: "العروض والباقات:",
                viewingDeal: "جاري عرض تفاصيل العرض...",
                expiryUntil: "ينتهي",
                siteSubtitle: "المشاريع في الامارات",
                navHome: "الرئيسية",
                navMarket: "السوق",
                navRegister: "تسجيل مشروع",
                navFavorites: "المفضلة",
                footerLogo: "سوق المشاريع",
                footerText: "منصة المشاريع الإماراتية",
                copyright: "© 2026 سوق المشاريع - جميع الحقوق محفوظة",
                langBtn: "En",
                heroTitle: "سوق المشاريع",
                heroSubtitle: "منصة متخصصة لدعم المشاريع في الامارات",
                discoverBtn: "ادخل السوق",
                joinBtn: "انضم كمشروع",
                aboutTitle: "من نحن",
                aboutText1: "<strong>سوق المشاريع</strong> ... فكرة بسيطة وهدف كبير: نصنع منصة تجمع المشاريع في الإمارات كلها بمكان واحد. عشان كل مشروع يستحق يلقى الدعم والوصول للناس الصح.",
                aboutText2: "<strong>إذا كنت تبحث عن شيء مختلف:</strong> هنا بتلقى منتجات بإيدين إماراتية ومقيمة، شغلها حب وإتقان. أكل بيتي، حلويات، مشغولات يدوية، عطور، هدايا ... أشياء ما بتلقى مثلها في الأسواق العادية.",
                aboutText3: "<strong>وإذا عندك مشروع:</strong> هذا المكان لك. نقدم لك منصة تسويق مجانية عشان توصل لمن يهتم بمنتجاتك، بدون لا تدفع فلس. بس سجل مشروعك وخلي الناس تشوف إبداعك.",
                stat1: "مشاريع",
                stat2: "منتجات متنوعة",
                stat3: "طلبات تواصل",
                stat4: "شركاء داعمين",
                badge1: "قريباً",
                badge2: "قريباً",
                badge3: "قريباً",
                badge4: "قريباً",
                homeSearchPlaceholder: "ابحث عن منتج أو مشروع...",
                familiesPageTitle: "المشاريع",
                familiesPageSubtitle: "استعرض المشاريع في الامارات",
                familiesSearchPlaceholder: "ابحث عن مشروع أو منتج...",
                productsTitle: "المنتجات",
                favoritesPageTitle: "المفضلة",
                favoritesPageSubtitle: "المنتجات التي أضفتها",
                emptyFavoritesProducts: "لا توجد منتجات في المفضلة بعد",
                sellerInfo: "معلومات البائع",
                similarProducts: "منتجات مشابهة",
                contactSeller: "تواصل مع البائع",
                shareProduct: "مشاركة المنتج",
                shareProfile: "مشاركة المشروع",
                specifications: "المواصفات والتفاصيل",
                popupTitle: "كيف تطلب؟",
                step1: "تصفح المنتجات",
                step2: "واختر ما يعجبك",
                step3: "تواصل مع البائع",
                gotItBtn: "إغلاق",
                shareTitle: "مشاركة المنتج",
                copyLinkText: "نسخ الرابط",
                closeShareBtn: "إغلاق",
                modalTitle: "تسجيل مشروع جديد",
                modalSubtitle: "انضم إلى منصة سوق المشاريع",
                projectNameLabel: "اسم المشروع",
                projectNamePlaceholder: "مثال: مشروع البيت",
                emirateLabel: "الإمارة",
                selectEmirate: "اختر الإمارة",
                descriptionLabel: "نبذة عن المشروع",
                descriptionPlaceholder: "اكتب نبذة مختصرة عن مشروعك...",
                licenseLabel: "الترخيص",
                yesLabel: "نعم",
                noLabel: "لا",
                coverageLabel: "التغطية",
                selectCoverage: "اختر نطاق التغطية",
                phoneLabel: "الهاتف",
                phonePlaceholder: "05x xxx xxxx",
                whatsappLabel: "واتساب",
                whatsappPlaceholder: "05x xxx xxxx",
                emailLabel: "البريد الإلكتروني",
                emailPlaceholder: "info@example.com",
                instagramLabel: "إنستغرام",
                telegramLabel: "تليجرام",
                snapchatLabel: "سناب شات",
                tiktokLabel: "تيك توك",
                facebookLabel: "فيسبوك",
                websiteLabel: "موقع ويب",
                categoriesLabel: "التصنيفات",
                catFood: "أطعمة ومشروبات",
                catIT: "الرقميات",
                catPerfumes: "روائح وعطور",
                catCare: "عناية",
                catSweets: "حلويات",
                catBeauty: "تجميل",
                catClothes: "ملابس",
                catHandmade: "يدويات",
                catGifts: "هدايا",
                catApothecary: "عطارة",
                catArts: "فنون",
                catPlants: "نباتات",
                catEntertainment: "ترفيه",
                submitBtn: "إرسال طلب التسجيل",
                offersBtnText: "العروض",
                offersPageTitle: "العروض الخاصة",
                offersPageSubtitle: "أحدث العروض والباقات",
                submitHint: "سيتم التواصل معكم خلال 24 ساعة",
                emirates: {
                    all: "كل الإمارات",
                    أبوظبي: "أبوظبي",
                    دبي: "دبي",
                    الشارقة: "الشارقة",
                    عجمان: "عجمان",
                    "رأس الخيمة": "رأس الخيمة",
                    الفجيرة: "الفجيرة",
                    "أم القيوين": "أم القيوين"
                },
                categories: {
                    all: "الكل",
                    "أطعمة ومشروبات": "أطعمة ومشروبات",
                    "الرقميات": "الرقميات",
                    "روائح وعطور": "روائح وعطور",
                    عناية: "عناية",
                    حلويات: "حلويات",
                    تجميل: "تجميل",
                    ملابس: "ملابس",
                    يدويات: "يدويات",
                    هدايا: "هدايا",
                    عطارة: "عطارة",
                    فنون: "فنون",
                    نباتات: "نباتات",
                    ترفيه: "ترفيه"
                },
                coverageOptions: {
                    "الإمارة فقط": "الإمارة فقط",
                    "جميع إمارات الدولة": "جميع إمارات الدولة",
                    "دول الخليج": "دول الخليج",
                    "العالم": "العالم"
                },
                viewProducts: "المنتجات",
                noProjects: "لا مشاريع متاحة، أخبر أي مشروع تعرفه بالتسجيل معنا",
                noContact: "لا توجد معلومات تواصل",
                licensed: "مرخص",
                coverage: "التغطية",
                call: "اتصال",
                email: "البريد الإلكتروني",
                addToFavorites: "تمت الإضافة للمفضلة",
                removeFromFavorites: "تمت الإزالة من المفضلة",
                linkCopied: "تم نسخ الرابط!"
            },
            en: {
                siteTitle: "Projects Souq",
                dealsTitle: "Offers & Packages",
                viewingDeal: "Viewing deal details...",
                expiryUntil: "Expires",
                siteSubtitle: "Projects in UAE",
                navHome: "Home",
                navMarket: "Market",
                navRegister: "Register Project",
                navFavorites: "Favorites",
                footerLogo: "Projects Souq",
                footerText: "UAE Projects Platform",
                copyright: "© 2026 Projects Souq - All Rights Reserved",
                langBtn: "عربي",
                heroTitle: "Projects Souq",
                heroSubtitle: "A specialized platform supporting projects in the UAE",
                discoverBtn: "Enter the market",
                joinBtn: "Join as Project",
                aboutTitle: "About Us",
                aboutText1: "<strong>Projects Souq</strong> ... A simple idea with a big goal: creating a platform that brings together all projects in the UAE. Because every project deserves support and the right audience.",
                aboutText2: "<strong>Looking for something unique?</strong> Here you'll find products made with love and skill by Emirati and resident families. Homemade food, sweets, handicrafts, perfumes, gifts... things you won't find in regular markets.",
                aboutText3: "<strong>Have a project?</strong> This is your place. We offer you a free marketing platform to reach people interested in your products, without paying a single fils. Just register your project and let people see your creativity.",
                stat1: "Projects",
                stat2: "Diverse Products",
                stat3: "Contact Requests",
                stat4: "Supporting Partners",
                badge1: "Coming Soon",
                badge2: "Coming Soon",
                badge3: "Coming Soon",
                badge4: "Coming Soon",
                homeSearchPlaceholder: "Search for product or project...",
                familiesPageTitle: "Projects",
                familiesPageSubtitle: "Review the projects in the UAE",
                familiesSearchPlaceholder: "Search for project or product...",
                productsTitle: "Products",
                favoritesPageTitle: "Favorites",
                favoritesPageSubtitle: "Your favorite products",
                emptyFavoritesProducts: "No favorite products yet",
                sellerInfo: "Seller Info",
                similarProducts: "Similar Products",
                offersBtnText: "Offers",
                offersPageTitle: "Special Offers",
                privacy: "Privacy Policy",
                terms: "Terms of Use",
                offersPageSubtitle: "Latest offers and packages",
                contactSeller: "Contact Seller",
                shareProduct: "Share Product",
                shareProfile: "Share Project",
                specifications: "Specifications & Details",
                popupTitle: "How to Order?",
                step1: "Browse Products",
                step2: "Choose what you like",
                step3: "Contact the Seller",
                gotItBtn: "Got it",
                shareTitle: "Share Product",
                copyLinkText: "Copy Link",
                closeShareBtn: "Close",
                modalTitle: "Register New Project",
                modalSubtitle: "Join Projects Souq Platform",
                projectNameLabel: "Project Name",
                projectNamePlaceholder: "Example: Home Project",
                emirateLabel: "Emirate",
                selectEmirate: "Select Emirate",
                descriptionLabel: "About the Project",
                descriptionPlaceholder: "Write a brief description of your project...",
                licenseLabel: "License",
                yesLabel: "Yes",
                noLabel: "No",
                coverageLabel: "Coverage",
                selectCoverage: "Select Coverage",
                phoneLabel: "Phone",
                phonePlaceholder: "05x xxx xxxx",
                whatsappLabel: "WhatsApp",
                whatsappPlaceholder: "05x xxx xxxx",
                emailLabel: "Email",
                emailPlaceholder: "info@example.com",
                instagramLabel: "Instagram",
                telegramLabel: "Telegram",
                snapchatLabel: "Snapchat",
                tiktokLabel: "TikTok",
                facebookLabel: "Facebook",
                websiteLabel: "Website",
                categoriesLabel: "Categories",
                catFood: "Food & Beverages",
                catIT: "IT",
                catPerfumes: "Scents & Perfumes",
                catCare: "Care",
                catSweets: "Sweets",
                catBeauty: "Beauty",
                catClothes: "Clothes",
                catHandmade: "Handmade",
                catGifts: "Gifts",
                catApothecary: "Apothecary",
                catArts: "Arts",
                catPlants: "Plants",
                catEntertainment: "Entertainment",
                submitBtn: "Submit Registration",
                submitHint: "We will contact you within 24 hours",
                emirates: {
                    all: "All Emirates",
                    أبوظبي: "Abu Dhabi",
                    دبي: "Dubai",
                    الشارقة: "Sharjah",
                    عجمان: "Ajman",
                    "رأس الخيمة": "Ras Al Khaimah",
                    الفجيرة: "Fujairah",
                    "أم القيوين": "Umm Al Quwain"
                },
                categories: {
                    all: "All",
                    "أطعمة ومشروبات": "Food & Beverages",
                    "الرقميات": "IT",
                    "روائح وعطور": "Scents & Perfumes",
                    عناية: "Care",
                    حلويات: "Sweets",
                    تجميل: "Beauty",
                    ملابس: "Clothes",
                    يدويات: "Handmade",
                    هدايا: "Gifts",
                    عطارة: "Apothecary",
                    فنون: "Arts",
                    نباتات: "Plants",
                    ترفيه: "Entertainment"
                },
                coverageOptions: {
                    "الإمارة فقط": "Emirate only",
                    "جميع إمارات الدولة": "All emirates",
                    "دول الخليج": "GCC",
                    "العالم": "Worldwide"
                },
                viewProducts: "Products",
                noProjects: "No projects available. Tell any project you know to register.",
                noContact: "No contact information",
                licensed: "Licensed",
                coverage: "Coverage",
                call: "Call",
                email: "Email",
                addToFavorites: "Added to favorites",
                removeFromFavorites: "Removed from favorites",
                linkCopied: "Link copied!"
            }
        };
        // تحسين أداء الـ JavaScript
        function debounce(func, wait) {
    let timeout;
        return function executedFunction(...args) {
    const later = () => {
        clearTimeout(timeout);
        func(...args);
    };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        };
}

        function debounce(func, wait) {
            let timeout;
                return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                };
        }
        // ==================== دالة تحليل نقاط البيع المتعددة ====================
        function parseSellPoints(sellPoints) {
            if (!sellPoints || !Array.isArray(sellPoints)) return [];
            return sellPoints.map(sp => {
                let type = sp.type;
                let value = sp.value;
                let cleanValue = value.replace(/^@/, '');
                let url = '';
                let icon = '';
                let bg = '';
                switch (type) {
                    case 'instagram':
                        url = `https://instagram.com/${cleanValue}`;
                        icon = 'fa-instagram';
                        bg = 'instagram-bg';
                        break;
                    case 'twitter':
                        url = `https://x.com/${cleanValue}`;
                        icon = 'fa-x';
                        bg = 'twitter-bg';
                        break;
                    case 'telegram':
                        url = `https://t.me/${cleanValue}`;
                        icon = 'fa-telegram';
                        bg = 'telegram-bg';
                        break;
                    case 'snapchat':
                        url = `https://snapchat.com/add/${cleanValue}`;
                        icon = 'fa-snapchat';
                        bg = 'snapchat-bg';
                        break;
                    case 'tiktok':
                        url = `https://tiktok.com/@${cleanValue}`;
                        icon = 'fa-tiktok';
                        bg = 'tiktok-bg';
                        break;
                    case 'facebook':
                        url = `https://facebook.com/${cleanValue}`;
                        icon = 'fa-facebook';
                        bg = 'facebook-bg';
                        break;
                    case 'website':
                        url = value.startsWith('http') ? value : `https://${value}`;
                        icon = 'fa-w';
                        bg = 'website-bg';
                        break;
                    default:
                        url = value;
                        icon = 'fa-globe';
                        bg = 'website-bg';
                }
                return {url, icon, bg};
            });
        }

        // ==================== دوال المفضلة ====================
        function isFavorite(id, type) {
            return appState.favorites.includes(`${type}_${id}`);
        }

        function toggleFavorite(id, type) {
            const key = `${type}_${id}`;
            const index = appState.favorites.indexOf(key);
            if (index === -1) {
                appState.favorites.push(key);
                showToast(translations[appState.currentLanguage].addToFavorites);
            } else {
                appState.favorites.splice(index, 1);
                showToast(translations[appState.currentLanguage].removeFromFavorites);
            }
            localStorage.setItem('projectSouqFavorites', JSON.stringify(appState.favorites));
            updateFavoriteUI(id, type);
            if (appState.currentPage === 'favorites') renderFavorites();
        }

        function updateFavoriteUI(id, type) {
            document.querySelectorAll(`.favorite-btn[data-id="${id}"][data-type="${type}"]`).forEach(btn => {
                if (isFavorite(id, type)) btn.classList.add('active');
                else btn.classList.remove('active');
            });
            if (type === 'product') {
                document.querySelectorAll(`.product-card[data-product-id="${id}"]`).forEach(card => {
                    if (isFavorite(id, 'product')) card.classList.add('favorite-active');
                    else card.classList.remove('favorite-active');
                });
            }
        }

        function showFavorites() {
            navigateTo('/favorites');
        }

        function renderFavorites() {
            const container = document.getElementById('favoritesContent');
            const t = translations[appState.currentLanguage];
            const favoriteProducts = [];
            familiesData.forEach(family => {
                family.products.forEach(product => {
                    if (isFavorite(product.id, 'product')) {
                        favoriteProducts.push({ family, product });
                    }
                });
            });
            if (favoriteProducts.length === 0) {
                container.innerHTML = `<div class="empty-favorites"><i class="fas fa-heart"></i><p>${t.emptyFavoritesProducts}</p></div>`;
                return;
            }
            let html = '<div class="favorites-list">';
            favoriteProducts.forEach(({ family, product }) => {
                const productName = appState.currentLanguage === 'ar' ? product.name : product.nameEn;
                const familyName = appState.currentLanguage === 'ar' ? family.name : family.nameEn;
                html += `
                <div class="favorite-list-item" onclick="navigateTo('/product/${family.id}/${product.id}')">
                    <div class="favorite-item-image"><img src="${product.mainImage || product.image}" alt="${productName}" loading="lazy"></div>
                    <div class="favorite-item-info">
                        <div class="favorite-item-title">${productName}</div>
                        <div class="favorite-item-meta"><i class="fas fa-store"></i> <span>${familyName}</span></div>
                    </div>
                </div>
                `;
            });
            html += '</div>';
            container.innerHTML = html;
        }

        // ==================== دوال معرض الصور ====================
        function openZoom(images, startIndex = 0) {
            appState.currentZoomImages = images;
            appState.currentZoomIndex = startIndex;
            const container = document.getElementById('zoomImageContainer');
            const dotsContainer = document.getElementById('zoomDots');
            let slidesHtml = '', dotsHtml = '';
            images.forEach((img, index) => {
                slidesHtml += `<div class="zoom-slide"><img src="${img}" loading="lazy"></div>`;
                dotsHtml += `<div class="zoom-dot ${index === startIndex ? 'active' : ''}" onclick="scrollToZoomImage(${index})"></div>`;
            });
            container.innerHTML = slidesHtml;
            dotsContainer.innerHTML = dotsHtml;
            document.getElementById('zoomModal').classList.add('active');
            document.body.style.overflow = 'hidden';
            setTimeout(() => {
                const imageWidth = container.clientWidth;
                container.scrollTo({ left: startIndex * imageWidth, behavior: 'auto' });
            }, 50);
            container.addEventListener('scroll', updateZoomDots);

        }

        function updateZoomDots() {
            const container = document.getElementById('zoomImageContainer');
            const scrollPosition = container.scrollLeft;
            const imageWidth = container.clientWidth;
            const currentIndex = Math.round(scrollPosition / imageWidth);
            document.querySelectorAll('.zoom-dot').forEach((dot, index) => {
                if (index === currentIndex) dot.classList.add('active');
                else dot.classList.remove('active');
            });
        }

        function scrollToZoomImage(index) {
            const container = document.getElementById('zoomImageContainer');
            const imageWidth = container.clientWidth;
            container.scrollTo({ left: index * imageWidth, behavior: 'smooth' });
        }

        function closeZoomModal() {
            document.getElementById('zoomModal').classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        // ==================== التنقل ====================
        function navigateTo(path) {
            showLoader();
            window.location.hash = path;
        }

        function goBack() {
            window.history.back();
        }

        function scrollToTop() {
    // نخفي القائمة الجانبية إذا كانت مفتوحة
    const menu = document.getElementById('navMenu');
    if (menu) menu.classList.remove('active');
    
    // نروح لفوق الصفحة الحالية بس
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // عشان يكون التمرير سلس
    });
        hideLoader();
        }

        function toggleMenu() {
            document.getElementById('navMenu').classList.toggle('active');
        }

        function showPage(pageId) {
            document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
            document.getElementById(pageId + '-page').style.display = 'block';
            appState.currentPage = pageId;
            window.scrollTo(0, 0);

            // إذا كانت الصفحة المعروضة هي صفحة المشاريع، حدث نص زر العروض
            if (pageId === 'families') {
                const offersBtn = document.getElementById('offersBtnText');
                if (offersBtn) {
                    offersBtn.textContent = translations[appState.currentLanguage].offersBtnText;
                }
            }
        }

        // ==================== فلاتر الإمارات والتصنيفات ====================
        function initEmiratesChips() {
            const container = document.getElementById('emiratesScroll');
            if (!container) return;
            const t = translations[appState.currentLanguage];
            const emirates = [
                { id: 'all', name: t.emirates.all, icon: 'fas fa-flag' },
                { id: 'أبوظبي', name: t.emirates.أبوظبي, icon: 'fas fa-city' },
                { id: 'دبي', name: t.emirates.دبي, icon: 'fas fa-city' },
                { id: 'الشارقة', name: t.emirates.الشارقة, icon: 'fas fa-city' },
                { id: 'عجمان', name: t.emirates.عجمان, icon: 'fas fa-city' },
                { id: 'رأس الخيمة', name: t.emirates["رأس الخيمة"], icon: 'fas fa-city' },
                { id: 'الفجيرة', name: t.emirates.الفجيرة, icon: 'fas fa-city' },
                { id: 'أم القيوين', name: t.emirates["أم القيوين"], icon: 'fas fa-city' }
            ];
            container.innerHTML = emirates.map(e => `
                <div class="emirate-chip ${e.id === appState.currentEmirate ? 'active' : ''}" onclick="filterByEmirate('${e.id}')">
                    <i class="${e.icon}"></i><span>${e.name}</span>
                </div>
            `).join('');
        }

        function filterByEmirate(emirateId) {
            showLoader();
            appState.currentEmirate = emirateId;
            appState.currentCategory = 'all';
            appState.searchQuery = '';
            updateActiveEmirateChip(emirateId);
            updateActiveCategoryChip('all');
            document.getElementById('familiesSearch').value = '';
            navigateTo(`/projects/emirate/${encodeURIComponent(emirateId)}`);
            hideLoader();
        }

        function updateActiveEmirateChip(emirateId) {
            document.querySelectorAll('.emirate-chip').forEach(chip => chip.classList.remove('active'));
            document.querySelectorAll('.emirate-chip').forEach(chip => {
                const span = chip.querySelector('span');
                if (span) {
                    const t = translations[appState.currentLanguage];
                    if (emirateId === 'all' && span.innerText === t.emirates.all) chip.classList.add('active');
                    else if (span.innerText === t.emirates[emirateId]) chip.classList.add('active');
                }
            });
        }

        function initCategoriesChips() {
            const container = document.getElementById('categoriesScroll');
            if (!container) return;
            const t = translations[appState.currentLanguage];
            const categories = [
                { id: 'all', name: t.categories.all, icon: 'fas fa-th-large' },
                { id: 'أطعمة ومشروبات', name: t.categories["أطعمة ومشروبات"], icon: 'fas fa-utensils' },
                { id: 'الرقميات', name: t.categories["الرقميات"], icon: 'fas fa-laptop-code' },
                { id: 'روائح وعطور', name: t.categories["روائح وعطور"], icon: 'fas fa-wind' },
                { id: 'عناية', name: t.categories.عناية, icon: 'fas fa-spa' },
                { id: 'حلويات', name: t.categories.حلويات, icon: 'fas fa-cookie-bite' },
                { id: 'تجميل', name: t.categories.تجميل, icon: 'fas fa-magic' },
                { id: 'ملابس', name: t.categories.ملابس, icon: 'fas fa-tshirt' },
                { id: 'يدويات', name: t.categories.يدويات, icon: 'fas fa-cut' },
                { id: 'هدايا', name: t.categories.هدايا, icon: 'fas fa-gift' },
                { id: 'عطارة', name: t.categories.عطارة, icon: 'fa-solid fa-mortar-pestle' },
                { id: 'فنون', name: t.categories.فنون, icon: 'fas fa-paint-brush' },
                { id: 'نباتات', name: t.categories.نباتات, icon: 'fas fa-seedling' },
                { id: 'ترفيه', name: t.categories.ترفيه, icon: 'fas fa-gamepad' }
            ];
            container.innerHTML = categories.map(c => `
                <div class="category-chip ${c.id === appState.currentCategory ? 'active' : ''}" onclick="filterByCategory('${c.id}')">
                    <i class="${c.icon}"></i><span>${c.name}</span>
                </div>
            `).join('');
        }

        function filterByCategory(id) {
            showLoader();
            appState.currentCategory = id;
            document.querySelectorAll('.category-chip').forEach(chip => chip.classList.remove('active'));
            document.querySelectorAll('.category-chip').forEach(chip => {
                const span = chip.querySelector('span');
                if (span) {
                    const t = translations[appState.currentLanguage];
                    if (id === 'all' && span.innerText === t.categories.all) chip.classList.add('active');
                    else if (span.innerText === t.categories[id]) chip.classList.add('active');
                }
            });
            renderFamilies();
            hideLoader();
        }

        function updateActiveCategoryChip(categoryId) {
            document.querySelectorAll('.category-chip').forEach(chip => {
                chip.classList.remove('active');
                const span = chip.querySelector('span');
                if (span) {
                    const t = translations[appState.currentLanguage];
                    if (categoryId === 'all' && span.innerText === t.categories.all) chip.classList.add('active');
                    else if (span.innerText === t.categories[categoryId]) chip.classList.add('active');
                }
            });
        }
        

        // ==================== البحث ====================
        const debouncedSearch = debounce(() => {
             performFamiliesSearch();
        }, 300);
        function performHomeSearch() {
            showLoader();
            const query = document.getElementById('homeSearch').value.trim();
            appState.searchQuery = query;
            navigateTo('/projects/emirate/all');
            setTimeout(() => {
                const searchInput = document.getElementById('familiesSearch');
                if (searchInput) searchInput.value = query;
                renderFamilies();
                hideLoader();
            }, 50);
        }

        function performFamiliesSearch() {
            showLoader();
            const input = document.getElementById('familiesSearch');
            if (!input) return;
            appState.searchQuery = input.value.trim();
            renderFamilies();
            hideLoader();
        }
        

        // ==================== عرض المشاريع ====================
        function renderFamilies() {
    let filtered = [...familiesData];
    const t = translations[appState.currentLanguage];

    // فلتر الإمارة
    if (appState.currentEmirate !== 'all') {
        filtered = filtered.filter(f => f.emirate === appState.currentEmirate);
    }

    // فلتر التصنيف
    if (appState.currentCategory !== 'all') {
        filtered = filtered.filter(f => f.category === appState.currentCategory);
    }

    // البحث النصي (محسّن)
    if (appState.searchQuery) {
        const query = appState.searchQuery.trim().toLowerCase();
        if (query !== '') {
            filtered = filtered.filter(family => {
                // البحث في بيانات المشروع (عربي + إنجليزي)
                const nameAr = (family.name || '').toLowerCase();
                const nameEn = (family.nameEn || '').toLowerCase();
                const descAr = (family.description || '').toLowerCase();
                const descEn = (family.descriptionEn || '').toLowerCase();
                const longDescAr = (family.longDescription || '').toLowerCase();
                const longDescEn = (family.longDescriptionEn || '').toLowerCase();

                // البحث في المنتجات
                const productMatch = family.products.some(p => {
                    const pNameAr = (p.name || '').toLowerCase();
                    const pNameEn = (p.nameEn || '').toLowerCase();
                    const pDescAr = (p.description || '').toLowerCase();
                    const pDescEn = (p.descriptionEn || '').toLowerCase();
                    const pLongDescAr = (p.longDescription || '').toLowerCase();
                    const pLongDescEn = (p.longDescriptionEn || '').toLowerCase();
                    const pDetails = (p.details || []).join(' ').toLowerCase();
                    const pDetailsEn = (p.detailsEn || []).join(' ').toLowerCase();

                    return pNameAr.includes(query) ||
                           pNameEn.includes(query) ||
                           pDescAr.includes(query) ||
                           pDescEn.includes(query) ||
                           pLongDescAr.includes(query) ||
                           pLongDescEn.includes(query) ||
                           pDetails.includes(query) ||
                           pDetailsEn.includes(query);
                });

                // البحث في المشروع نفسه
                return nameAr.includes(query) ||
                       nameEn.includes(query) ||
                       descAr.includes(query) ||
                       descEn.includes(query) ||
                       longDescAr.includes(query) ||
                       longDescEn.includes(query) ||
                       productMatch;
            });
        }
    }

    const grid = document.getElementById('familiesGrid');
    if (filtered.length === 0) {
        grid.innerHTML = `<div style="grid-column: span 2; text-align: center; padding: 30px;">${t.noProjects}</div>`;
        return;
    }

    grid.innerHTML = filtered.map(family => {
        const familyName = appState.currentLanguage === 'ar' ? family.name : family.nameEn;
        const familyDesc = appState.currentLanguage === 'ar' ? family.description : family.descriptionEn;
        return `
        <div class="family-card" onclick="navigateTo('/family/${family.id}')">
            ${family.adra_license === 'نعم' ? '<div class="license-badge-card"><i class="fas fa-check-circle"></i>' + t.licensed + '</div>' : ''}
            <div class="family-image"><img src="${family.image}" alt="${familyName}" loading="lazy"></div>
            <div class="family-content">
                <h3 class="family-name">${familyName}</h3>
                <div class="family-location"><i class="fas fa-map-marker-alt"></i> ${t.emirates[family.emirate] || family.emirate}</div>
                <div class="family-description">${familyDesc}</div>
            </div>
        </div>
    `}).join('');

    requestAnimationFrame(() => {
        document.querySelectorAll('.family-image img').forEach(img => {
            if (img.complete) img.style.opacity = '1';
        });
    });
}
        // دالة عرض صفحة العروض
function showOffersPage() {
    navigateTo('/offers');
}

// دالة عرض العروض في الصفحة - نسخة محدثة
function renderOffers() {
    const container = document.getElementById('offersContent');
    const t = translations[appState.currentLanguage];
    
    // نجمع كل العروض من كل المشاريع
    let allOffers = [];
    familiesData.forEach(family => {
        if (family.deals && family.deals.length > 0) {
            family.deals.forEach(deal => {
                allOffers.push({
                    ...deal,
                    familyId: family.id,
                    familyName: appState.currentLanguage === 'ar' ? family.name : family.nameEn,
                    familyImage: family.image
                });
            });
        }
    });
    
    if (allOffers.length === 0) {
        container.innerHTML = `<div class="empty-favorites"><i class="fas fa-tags"></i><p>${appState.currentLanguage === 'ar' ? 'لا توجد عروض حالياً' : 'No offers available'}</p></div>`;
        return;
    }
    
    // نعرض العروض في قائمة (نفس تصميم المفضلة)
    let html = '<div class="favorites-list">';
    allOffers.forEach(offer => {
        const offerTitle = appState.currentLanguage === 'ar' ? offer.title : (offer.titleEn || offer.title);
        const offerDesc = appState.currentLanguage === 'ar' ? offer.description : (offer.descriptionEn || offer.description);
        const offerBadge = appState.currentLanguage === 'ar' ? (offer.badge || 'عرض') : (offer.badgeEn || offer.badge || 'Offer');
        
        html += `
        <div class="favorite-list-item" onclick="navigateTo('/family/${offer.familyId}')">
            <div class="favorite-item-image"><img src="${offer.image}" alt="${offerTitle}" loading="lazy"></div>
            <div class="favorite-item-info">
                <div class="favorite-item-title">${offerTitle}</div>
                <div class="favorite-item-meta">
                    <i class="fas fa-store"></i> <span>${offer.familyName}</span>
                    <span class="project-badge" style="background: #C41E3A; color: white; border: none;">${offerBadge}</span>
                </div>
                <div style="font-size: 11px; color: var(--gray); margin-top: 5px;">${offerDesc}</div>
            </div>
        </div>
        `;
    });
    html += '</div>';
    
    container.innerHTML = html;
}

        // ==================== دوال العروض الخاصة ====================
        function renderFamilyDeals(family) {
            const dealsSection = document.getElementById('dealsSection');
            const dealsGrid = document.getElementById('dealsGrid');
            
            if (!family.deals || family.deals.length === 0) {
                dealsSection.style.display = 'none';
                return;
            }
            
            dealsSection.style.display = 'block';
            
            const t = translations[appState.currentLanguage];
            dealsGrid.innerHTML = family.deals.map(deal => {
                const dealTitle = appState.currentLanguage === 'ar' ? deal.title : (deal.titleEn || deal.title);
                const dealDesc = appState.currentLanguage === 'ar' ? deal.description : (deal.descriptionEn || deal.description);
                const dealBadge = appState.currentLanguage === 'ar' ? (deal.badge || 'ال') : (deal.badgeEn || deal.badge || '');
                const dealExpiry = deal.expiry ? formatExpiryDate(deal.expiry) : '';
                
                return `
                <div class="deal-card" onclick="showDealDetails(${family.id}, '${deal.id}')">
                    <div class="deal-badge">${dealBadge}</div>
                    <div class="deal-image">
                        <img src="${deal.image}" alt="${dealTitle}" loading="lazy">
                    </div>
                    <div class="deal-content">
                        <h4 class="deal-title">${dealTitle}</h4>
                        <p class="deal-description">${dealDesc}</p>
                        ${dealExpiry ? `<div class="deal-expiry"><i class="far fa-clock"></i> ${t.expiryUntil || 'ينتهي'}: ${dealExpiry}</div>` : ''}
                    </div>
                </div>
            `}).join('');
        }

        function formatExpiryDate(dateString) {
            if (!dateString) return '';
            const date = new Date(dateString);
            if (appState.currentLanguage === 'ar') {
                return date.toLocaleDateString('ar-AE', { year: 'numeric', month: 'short', day: 'numeric' });
            } else {
                return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
            }
        }

        function showDealDetails(familyId, dealId) {
            const family = familiesData.find(f => f.id == familyId);
            if (!family) return;
            
            const deal = family.deals?.find(d => d.id === dealId);
            if (!deal) return;
            
            const images = deal.images && deal.images.length > 0 ? deal.images : [deal.image];
            openZoom(images, 0);
            
            const t = translations[appState.currentLanguage];
            showToast(t.viewingDeal || 'جاري عرض تفاصيل العرض...');
        }

        // ==================== عرض منتجات المشروع (محدث مع العروض) ====================
        function showFamilyProducts(id, updateHash = true) {
            const family = familiesData.find(f => f.id == id);
            if (!family) return;
            appState.currentFamilyId = id;
            if (updateHash) {
                navigateTo(`/family/${id}`);
                return;
            }
            
            const t = translations[appState.currentLanguage];
            const familyName = appState.currentLanguage === 'ar' ? family.name : family.nameEn;
            const familyDescription = appState.currentLanguage === 'ar' ? (family.longDescription || family.description) : (family.longDescriptionEn || family.descriptionEn);
            const licenseBadgeHtml = family.adra_license === 'نعم' ? `<div class="license-badge-large"><i class="fas fa-check-circle"></i> ${t.licensed}</div>` : '';
            const shareButtonHtml = `<div class="action-btn share-btn" onclick="event.stopPropagation(); showProfileSharePopup(${family.id})" title="${t.shareProfile}"><i class="fas fa-share-alt"></i></div>`;
            
            document.getElementById('familyProfileContainer').innerHTML = `
                <div class="family-profile">
                    <div class="profile-header">
                        ${shareButtonHtml}
                        <div class="profile-avatar" style="background-image: url('${family.image}');"></div>
                        <div>
                            <h2 class="profile-name">${familyName}</h2>
                            ${licenseBadgeHtml}
                            <div class="profile-location"><i class="fas fa-map-marker-alt"></i> ${t.emirates[family.emirate] || family.emirate}</div>
                        </div>
                    </div>
                    <div class="profile-body">
                        <div class="profile-info-grid">
                            <div class="profile-info-row"><i class="fas fa-align-right"></i><strong>${t.descriptionLabel}:</strong><span>${familyDescription}</span></div>
                        </div>
                        <div class="coverage-section">
                            <div class="coverage-title"><i class="fas fa-globe-asia"></i> ${t.coverage}:</div>
                            <div class="coverage-tags"><div class="coverage-tag"><i class="fas fa-map-marker-alt"></i> ${t.coverageOptions[family.coverage] || family.coverage}</div></div>
                        </div>
                    </div>
                </div>
            `;
            
            // إضافة العروض الخاصة
            renderFamilyDeals(family);
            
            document.getElementById('productsCount').textContent = `${family.products.length} ${t.productsTitle}`;
            document.getElementById('productsGrid').innerHTML = family.products.map(p => {
                const productName = appState.currentLanguage === 'ar' ? p.name : p.nameEn;
                const productDesc = appState.currentLanguage === 'ar' ? p.description : p.descriptionEn;
                const productCategory = appState.currentLanguage === 'ar' ? p.category : p.categoryEn;
                const tCat = translations[appState.currentLanguage].categories;
                const categoryDisplay = tCat[p.category] || productCategory;
                const isFav = isFavorite(p.id, 'product');
                return `
                <div class="product-card ${isFav ? 'favorite-active' : ''}" data-product-id="${p.id}" onclick="navigateTo('/product/${family.id}/${p.id}')">
                    <div class="product-image"><img src="${p.mainImage || p.image}" alt="${productName}" loading="lazy"></div>
                    <div class="product-content">
                        <h3 class="product-name">${productName}</h3>
                        <div class="product-description">${productDesc}</div>
                        <div class="product-category">${categoryDisplay}</div>
                    </div>
                </div>
            `}).join('');
            
            let contactHtml = '';
            if (family.phone) contactHtml += `<a href="tel:${family.phone}" class="contact-item"><div class="contact-icon phone-bg"><i class="fas fa-phone"></i></div></a>`;
            if (family.whatsapp) contactHtml += `<a href="https://wa.me/${family.whatsapp.replace(/[^0-9]/g,'')}" target="_blank" class="contact-item"><div class="contact-icon whatsapp-bg"><i class="fab fa-whatsapp"></i></div></a>`;
            if (family.email) contactHtml += `<a href="mailto:${family.email}" class="contact-item"><div class="contact-icon email-bg"><i class="fas fa-envelope"></i></div></a>`;
            
            if (family.sell_points && Array.isArray(family.sell_points)) {
                const parsed = parseSellPoints(family.sell_points);
                parsed.forEach(p => {
                    contactHtml += `<a href="${p.url}" target="_blank" class="contact-item"><div class="contact-icon ${p.bg}"><i class="fab ${p.icon}"></i></div></a>`;
                });
            } else if (family.sell_point) {
                contactHtml += `<a href="${family.sell_point}" target="_blank" class="contact-item"><div class="contact-icon website-bg"><i class="fas fa-globe"></i></div></a>`;
            }
            
            document.getElementById('contactSectionBottom').innerHTML = `<h3 class="contact-title"><i class="fas fa-phone-alt"></i> ${t.contactSeller}</h3><div class="contact-grid">${contactHtml || `<p>${t.noContact}</p>`}</div>`;
            
            showPage('products');
            showInstructionPopupOnce();
        }

        // ==================== عرض تفاصيل المنتج ====================
        function showProductDetail(familyId, productId, updateHash = true) {
            const family = familiesData.find(f => f.id == familyId);
            if (!family) return;
            const product = family.products.find(p => p.id == productId);
            if (!product) return;
            appState.currentFamilyId = familyId;
            appState.currentProductId = productId;
            if (updateHash) {
                navigateTo(`/product/${familyId}/${productId}`);
                return;
            }
            const t = translations[appState.currentLanguage];
            const familyName = appState.currentLanguage === 'ar' ? family.name : family.nameEn;
            const productName = appState.currentLanguage === 'ar' ? product.name : product.nameEn;
            const productDesc = appState.currentLanguage === 'ar' ? (product.longDescription || product.description) : (product.longDescriptionEn || product.descriptionEn);
            const productCategory = appState.currentLanguage === 'ar' ? product.category : product.categoryEn;
            const tCat = translations[appState.currentLanguage].categories;
            const categoryDisplay = tCat[product.category] || productCategory;
            const images = product.images || [product.mainImage || product.image];
            const thumbnailsHtml = images.map((img, index) => `
                <div class="product-thumbnail ${index === 0 ? 'active' : ''}" onclick="changeMainImage('${img}', this, ${index})">
                    <img src="${img}" loading="lazy">
                </div>
            `).join('');
            const details = appState.currentLanguage === 'ar' ? product.details : product.detailsEn;
            const detailsHtml = details && details.length ? details.map(d => `<li><i class="fas fa-check-circle"></i> ${d}</li>`).join('') : '';
            const specsHtml = detailsHtml ? `<h3 class="product-details-title"><i class="fas fa-list-ul"></i> ${t.specifications}</h3><ul class="product-details-list">${detailsHtml}</ul>` : '';
            const similarProducts = family.products.filter(p => p.id !== productId).slice(0, 4);
            const similarHtml = similarProducts.map(p => {
                const similarName = appState.currentLanguage === 'ar' ? p.name : p.nameEn;
                return `<div class="similar-product-card" onclick="showProductDetail(${familyId}, '${p.id}')"><div class="similar-product-image"><img src="${p.mainImage || p.image}" loading="lazy"></div><div class="similar-product-info"><h4>${similarName}</h4></div></div>`;
            }).join('');
            const licenseBadgeHtml = family.adra_license === 'نعم' ? `<div class="license-badge-large" style="margin-right: 0; margin-bottom: 5px;"><i class="fas fa-check-circle"></i> ${t.licensed}</div>` : '';
            
            let sellerContactHtml = '';
            if (family.phone) sellerContactHtml += `<a href="tel:${family.phone}" class="seller-contact-item"><div class="seller-contact-icon phone-bg"><i class="fas fa-phone"></i></div></a>`;
            if (family.whatsapp) sellerContactHtml += `<a href="https://wa.me/${family.whatsapp.replace(/[^0-9]/g,'')}" target="_blank" class="seller-contact-item"><div class="seller-contact-icon whatsapp-bg"><i class="fab fa-whatsapp"></i></div></a>`;
            if (family.email) sellerContactHtml += `<a href="mailto:${family.email}" class="seller-contact-item"><div class="seller-contact-icon email-bg"><i class="fas fa-envelope"></i></div></a>`;
            if (family.sell_points && Array.isArray(family.sell_points)) {
                const parsed = parseSellPoints(family.sell_points);
                parsed.forEach(p => {
                    sellerContactHtml += `<a href="${p.url}" target="_blank" class="seller-contact-item"><div class="seller-contact-icon ${p.bg}"><i class="fab ${p.icon}"></i></div></a>`;
                });
            } else if (family.sell_point) {
                sellerContactHtml += `<a href="${family.sell_point}" target="_blank" class="seller-contact-item"><div class="seller-contact-icon website-bg"><i class="fas fa-globe"></i></div></a>`;
            }
            
            const isFav = isFavorite(product.id, 'product');
            const html = `
                <div class="product-gallery">
                    <div class="product-main-image-container">
                        <div class="main-image" onclick="openZoom(${JSON.stringify(images).replace(/"/g, '&quot;')}, 0)">
                            <img src="${images[0]}" alt="${productName}" id="currentMainImage" loading="lazy">
                        </div>
                        <div class="action-btn favorite-btn ${isFav ? 'active' : ''}" data-id="${product.id}" data-type="product" onclick="event.stopPropagation(); toggleFavorite('${product.id}', 'product')"><i class="fas fa-heart"></i></div>
                        <div class="action-btn share-btn" onclick="event.stopPropagation(); showSharePopup('${familyId}', '${productId}')"><i class="fas fa-share-alt"></i></div>
                    </div>
                    <div class="product-thumbnails">${thumbnailsHtml}</div>
                </div>
                <div class="product-detail-info">
                    <span class="product-detail-category"><i class="fas fa-tag"></i> ${categoryDisplay}</span>
                    <h1 class="product-detail-name">${productName}</h1>
                    <p class="product-detail-description">${productDesc}</p>
                    ${specsHtml}
                </div>
                <div class="seller-info-card">
                    <div class="seller-avatar-large"><img src="${family.image}" alt="${familyName}" loading="lazy"></div>
                    <div class="seller-info">
                        <h3>${familyName}</h3>
                        ${licenseBadgeHtml}
                        <div class="seller-meta"><i class="fas fa-map-marker-alt"></i> ${t.emirates[family.emirate] || family.emirate}</div>
                        ${sellerContactHtml ? `<div class="seller-contact-grid">${sellerContactHtml}</div>` : ''}
                    </div>
                </div>
                ${similarHtml ? `<div class="similar-products-section"><h3 class="similar-products-title"><i class="fas fa-boxes"></i> ${t.similarProducts}</h3><div class="similar-products-grid">${similarHtml}</div></div>` : ''}
            `;
            document.getElementById('productDetailContainer').innerHTML = html;
            showPage('product-detail');
        }

        function changeMainImage(imgSrc, element, index) {
            document.getElementById('currentMainImage').src = imgSrc;
            document.querySelectorAll('.product-thumbnail').forEach(thumb => thumb.classList.remove('active'));
            element.classList.add('active');
            appState.currentZoomIndex = index;
        }

function handleHashChange() {
    const hash = window.location.hash.slice(1) || '/';
    const parts = hash.split('/').filter(p => p !== '');
    showLoader();
    setTimeout(() => {
        if (parts.length === 0 || parts[0] === '') showPage('home');
        else if (parts[0] === 'projects' && parts[1] === 'emirate' && parts[2]) {
            appState.currentEmirate = decodeURIComponent(parts[2]);
            appState.currentCategory = 'all';
            updateActiveEmirateChip(appState.currentEmirate);
            updateActiveCategoryChip('all');
            showPage('families');
            renderFamilies();
            // تعيين قيمة مربع البحث إذا كان هناك استعلام بحث
            const searchInput = document.getElementById('familiesSearch');
            if (searchInput && appState.searchQuery) {
                searchInput.value = appState.searchQuery;
            }
        }
        else if (parts[0] === 'family' && parts[1]) showFamilyProducts(parseInt(parts[1]), false);
        else if (parts[0] === 'product' && parts[1] && parts[2]) showProductDetail(parseInt(parts[1]), parts[2], false);
        else if (parts[0] === 'favorites') { showPage('favorites'); renderFavorites(); }
        else if (parts[0] === 'offers') { showPage('offers'); renderOffers(); }
        else showPage('home');
        hideLoader();
    }, 50);
}

        // ==================== دوال المشاركة ====================
        function showSharePopup(familyId, productId) {
            event.stopPropagation();
            const family = familiesData.find(f => f.id == familyId);
            if (!family) return;
            const product = family.products.find(p => p.id === productId);
            if (!product) return;
            appState.currentShareProduct = { familyId, productId };
            document.getElementById('sharePopup').classList.add('show');
        }

        function showProfileSharePopup(familyId) {
            event.stopPropagation();
            appState.currentShareProfile = familyId;
            document.getElementById('shareProfilePopup').classList.add('show');
        }

        function closeSharePopup() { document.getElementById('sharePopup').classList.remove('show'); }
        function closeShareProfilePopup() { document.getElementById('shareProfilePopup').classList.remove('show'); }

        function shareVia(platform) {
            if (!appState.currentShareProduct) return;
            const family = familiesData.find(f => f.id == appState.currentShareProduct.familyId);
            const product = family.products.find(p => p.id === appState.currentShareProduct.productId);
            const productName = appState.currentLanguage === 'ar' ? product.name : product.nameEn;
            const url = window.location.href;
            const text = appState.currentLanguage === 'ar' ? `شاهد هذا المنتج: ${productName} - من ${family.name} على سوق المشاريع` : `Check out this product: ${productName} - from ${family.nameEn} on Projects Souq`;
            let shareUrl = '';
            switch(platform) {
                case 'whatsapp': shareUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`; break;
                case 'facebook': shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`; break;
                case 'twitter': shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`; break;
                case 'telegram': shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`; break;
            }
            if (shareUrl) window.open(shareUrl, '_blank', 'width=600,height=400');
            closeSharePopup();
        }

        function shareProfileVia(platform) {
            if (!appState.currentShareProfile) return;
            const family = familiesData.find(f => f.id == appState.currentShareProfile);
            const url = window.location.href;
            const familyName = appState.currentLanguage === 'ar' ? family.name : family.nameEn;
            const text = appState.currentLanguage === 'ar' ? `اكتشف مشروع ${familyName} على سوق المشاريع - ${family.description}` : `Discover ${familyName} on Projects Souq - ${family.descriptionEn}`;
            let shareUrl = '';
            switch(platform) {
                case 'whatsapp': shareUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`; break;
                case 'facebook': shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`; break;
                case 'twitter': shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`; break;
                case 'telegram': shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`; break;
            }
            if (shareUrl) window.open(shareUrl, '_blank', 'width=600,height=400');
            closeShareProfilePopup();
        }

        function copyLink() {
            navigator.clipboard.writeText(window.location.href).then(() => {
                showToast(translations[appState.currentLanguage].linkCopied);
                closeSharePopup();
            });
        }

        function copyProfileLink() {
            navigator.clipboard.writeText(window.location.href).then(() => {
                showToast(translations[appState.currentLanguage].linkCopied);
                closeShareProfilePopup();
            });
        }

        // ==================== دوال اللغة ====================
        function toggleLanguage() {
            showLoader();
            const newLang = appState.currentLanguage === 'ar' ? 'en' : 'ar';
            appState.currentLanguage = newLang;
            localStorage.setItem('projectSouqLang', newLang);
            const htmlTag = document.getElementById('htmlTag');
            if (newLang === 'ar') {
                htmlTag.setAttribute('dir', 'rtl');
                htmlTag.setAttribute('lang', 'ar');
                document.body.classList.remove('en-mode');
            } else {
                htmlTag.setAttribute('dir', 'ltr');
                htmlTag.setAttribute('lang', 'en');
                document.body.classList.add('en-mode');
            }
            // تحديث النصوص في الصفحة
            const t = translations[newLang];
            document.getElementById('siteTitle').textContent = t.siteTitle;
            document.getElementById('privacyLink').textContent = t.privacy;
            document.getElementById('offersPageTitle').textContent = t.offersPageTitle;
            document.getElementById('offersPageSubtitle').textContent = t.offersPageSubtitle;
            document.getElementById('termsLink').textContent = t.terms;
            document.getElementById('offersBtnText').textContent = t.offersBtnText;
            document.getElementById('siteSubtitle').textContent = t.siteSubtitle;
            document.getElementById('navHome').textContent = t.navHome;
            document.getElementById('navMarket').textContent = t.navMarket;
            document.getElementById('navRegister').textContent = t.navRegister;
            document.getElementById('navFavorites').textContent = t.navFavorites;
            document.getElementById('footerLogo').textContent = t.footerLogo;
            document.getElementById('footerText').textContent = t.footerText;
            document.getElementById('copyright').textContent = t.copyright;
            document.getElementById('langBtn').textContent = t.langBtn;
            document.getElementById('heroTitle').textContent = t.heroTitle;
            document.getElementById('heroSubtitle').textContent = t.heroSubtitle;
            document.getElementById('discoverBtn').textContent = t.discoverBtn;
            document.getElementById('joinBtn').textContent = t.joinBtn;
            document.getElementById('aboutTitle').textContent = t.aboutTitle;
            document.getElementById('aboutText1').innerHTML = t.aboutText1;
            document.getElementById('aboutText2').innerHTML = t.aboutText2;
            document.getElementById('aboutText3').innerHTML = t.aboutText3;
            document.getElementById('stat1').textContent = t.stat1;
            document.getElementById('stat2').textContent = t.stat2;
            document.getElementById('stat3').textContent = t.stat3;
            document.getElementById('stat4').textContent = t.stat4;
            document.getElementById('badge1').textContent = t.badge1;
            document.getElementById('badge2').textContent = t.badge2;
            document.getElementById('badge3').textContent = t.badge3;
            document.getElementById('badge4').textContent = t.badge4;
            document.getElementById('familiesPageTitle').textContent = t.familiesPageTitle;
            document.getElementById('familiesPageSubtitle').textContent = t.familiesPageSubtitle;
            document.getElementById('productsTitle').textContent = t.productsTitle;
            document.getElementById('favoritesPageTitle').textContent = t.favoritesPageTitle;
            document.getElementById('favoritesPageSubtitle').textContent = t.favoritesPageSubtitle;
            document.getElementById('popupTitle').textContent = t.popupTitle;
            document.getElementById('step1').textContent = t.step1;
            document.getElementById('step2').textContent = t.step2;
            document.getElementById('step3').textContent = t.step3;
            document.getElementById('gotItBtn').textContent = t.gotItBtn;
            document.getElementById('shareTitle').textContent = t.shareTitle;
            document.getElementById('shareProfileTitle').textContent = t.shareProfile;
            document.getElementById('copyLinkText').textContent = t.copyLinkText;
            document.getElementById('copyProfileLinkText').textContent = t.copyLinkText;
            document.getElementById('closeShareBtn').textContent = t.closeShareBtn;
            document.getElementById('closeProfileShareBtn').textContent = t.closeShareBtn;
            document.getElementById('modalTitle').textContent = t.modalTitle;
            document.getElementById('modalSubtitle').textContent = t.modalSubtitle;
            document.getElementById('projectNameLabel').textContent = t.projectNameLabel;
            document.getElementById('emirateLabel').textContent = t.emirateLabel;
            document.getElementById('descriptionLabel').textContent = t.descriptionLabel;
            document.getElementById('licenseLabel').textContent = t.licenseLabel;
            document.getElementById('yesLabel').textContent = t.yesLabel;
            document.getElementById('noLabel').textContent = t.noLabel;
            document.getElementById('coverageLabel').textContent = t.coverageLabel;
            document.getElementById('phoneLabel').textContent = t.phoneLabel;
            document.getElementById('whatsappLabel').textContent = t.whatsappLabel;
            document.getElementById('emailLabel').textContent = t.emailLabel;
            document.getElementById('instagramLabel').textContent = t.instagramLabel;
            document.getElementById('telegramLabel').textContent = t.telegramLabel;
            document.getElementById('snapchatLabel').textContent = t.snapchatLabel;
            document.getElementById('tiktokLabel').textContent = t.tiktokLabel;
            document.getElementById('facebookLabel').textContent = t.facebookLabel;
            document.getElementById('websiteLabel').textContent = t.websiteLabel;
            document.getElementById('categoriesLabel').textContent = t.categoriesLabel;
            document.getElementById('catFood').textContent = t.catFood;
            document.getElementById('catIT').textContent = t.catIT;
            document.getElementById('catPerfumes').textContent = t.catPerfumes;
            document.getElementById('catCare').textContent = t.catCare;
            document.getElementById('catSweets').textContent = t.catSweets;
            document.getElementById('catBeauty').textContent = t.catBeauty;
            document.getElementById('catClothes').textContent = t.catClothes;
            document.getElementById('catHandmade').textContent = t.catHandmade;
            document.getElementById('catGifts').textContent = t.catGifts;
            document.getElementById('catApothecary').textContent = t.catApothecary;
            document.getElementById('catArts').textContent = t.catArts;
            document.getElementById('catPlants').textContent = t.catPlants;
            document.getElementById('catEntertainment').textContent = t.catEntertainment;
            document.getElementById('submitBtn').textContent = t.submitBtn;
            document.getElementById('submitHint').textContent = t.submitHint;
            document.getElementById('homeSearch').placeholder = t.homeSearchPlaceholder;
            document.getElementById('familiesSearch').placeholder = t.familiesSearchPlaceholder;
            document.getElementById('dealsTitle').textContent = t.dealsTitle || 'العروض الخاصة';

            // إعادة تهيئة الشرائح
            initEmiratesChips();
            initCategoriesChips();
            // تحديث الصفحة الحالية
            const currentPage = appState.currentPage;
            if (currentPage === 'families') renderFamilies();
            else if (currentPage === 'products' && appState.currentFamilyId) showFamilyProducts(appState.currentFamilyId, false);
            else if (currentPage === 'product-detail' && appState.currentFamilyId && appState.currentProductId) showProductDetail(appState.currentFamilyId, appState.currentProductId, false);
            else if (currentPage === 'favorites') renderFavorites();
            hideLoader();
        }

        // ==================== دوال نموذج التسجيل ====================
        function showRegisterForm() {
            document.getElementById('registerModal').classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeRegisterForm() {
            document.getElementById('registerModal').classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        function validateFamilyForm(event) {
            event.preventDefault();
            try {
                const adraLicense = document.querySelector('input[name="adra_license"]:checked');
                if (!adraLicense) {
                    showToast(appState.currentLanguage === 'ar' ? "❌ يرجى اختيار حالة الترخيص" : "❌ Please select license status");
                    return false;
                }
                const categories = document.querySelectorAll('input[name="category[]"]:checked');
                if (categories.length === 0) {
                    showToast(appState.currentLanguage === 'ar' ? "❌ يرجى اختيار تصنيف واحد على الأقل" : "❌ Please select at least one category");
                    return false;
                }
                const instagram = document.querySelector('input[name="instagram"]').value.trim();
                const telegram = document.querySelector('input[name="telegram"]').value.trim();
                const snapchat = document.querySelector('input[name="snapchat"]').value.trim();
                const tiktok = document.querySelector('input[name="tiktok"]').value.trim();
                const facebook= document.querySelector('input[name="facebook"]').value.trim();
                const website = document.querySelector('input[name="website"]').value.trim();
                let sellPointsArray = [];
                if (instagram) sellPointsArray.push(`instagram:${instagram}`);
                if (telegram) sellPointsArray.push(`telegram:${telegram}`);
                if (snapchat) sellPointsArray.push(`snapchat:${snapchat}`);
                if (tiktok) sellPointsArray.push(`tiktok:${tiktok}`);
                if (facebook) sellPointsArray.push(`facebook:${facebook}`);
                if (website) sellPointsArray.push(`website:${website}`);
                let hiddenSellPoint = document.createElement('input');
                hiddenSellPoint.type = 'hidden';
                hiddenSellPoint.name = 'sell_point';
                hiddenSellPoint.value = sellPointsArray.join(', ');
                event.target.appendChild(hiddenSellPoint);
                event.target.submit();
            } catch (error) {
                console.error(error);
                showToast(appState.currentLanguage === 'ar' ? "❌ حدث خطأ، يرجى المحاولة مرة أخرى" : "❌ An error occurred, please try again");
                return false;
            }
            return false;
        }

        // ==================== دوال إضافية ====================
        function showToast(msg) {
            const toast = document.getElementById('toastMessage');
            toast.textContent = msg;
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 2000);
        }

        function closeInstructionPopup() {
            document.getElementById('instructionPopup').classList.remove('show');
        }

        function scrollToContact() {
            document.getElementById('contactSectionBottom').scrollIntoView({ behavior: 'smooth' });
        }

        function showInstructionPopupOnce() {
            if (!sessionStorage.getItem('instructionPopupShown')) {
                document.getElementById('instructionPopup').classList.add('show');
                sessionStorage.setItem('instructionPopupShown', 'true');
                setTimeout(() => {
                    closeInstructionPopup();
                }, 8000);
            }
        }

window.addEventListener('load', function() {
    // قراءة اللغة المحفوظة
    const savedLang = localStorage.getItem('projectSouqLang');
    
    // إذا كان هناك لغة محفوظة، استخدمها، وإلا استخدم العربية كلغة افتراضية
    if (savedLang === 'en') {
        appState.currentLanguage = 'en';
        document.getElementById('htmlTag').setAttribute('dir', 'ltr');
        document.getElementById('htmlTag').setAttribute('lang', 'en');
        document.body.classList.add('en-mode');
    } else {
        // القيمة الافتراضية (عربي)
        appState.currentLanguage = 'ar';
        document.getElementById('htmlTag').setAttribute('dir', 'rtl');
        document.getElementById('htmlTag').setAttribute('lang', 'ar');
        document.body.classList.remove('en-mode');
    }
    
    // تحديث جميع النصوص حسب اللغة الحالية
    toggleLanguage(); 
    
    // تهيئة الشرائح وعرض الصفحة المناسبة
    initEmiratesChips();
    initCategoriesChips();
    handleHashChange();
});

window.addEventListener('load', function() {
    toggleLanguage(); 
    initEmiratesChips();
    initCategoriesChips();
    handleHashChange();
});
        // ==================== دوال سياسة الخصوصية والشروط ====================
function showPrivacyModal() {
    const lang = appState.currentLanguage; // 'ar' or 'en'
    if (lang === 'ar') {
        window.open('privacy.html', '_blank');
    } else {
        window.open('privacyen.html', '_blank');
    }
}

function showTermsModal() {
    const lang = appState.currentLanguage;
    if (lang === 'ar') {
        window.open('terms.html', '_blank');
    } else {
        window.open('termsen.html', '_blank');
    }
}

        window.addEventListener('hashchange', handleHashChange);

        // ربط الدوال بالكائن العام
        window.toggleMenu = toggleMenu;
        window.showOffersPage = showOffersPage;
        window.renderOffers = renderOffers;
        window.navigateTo = navigateTo;
        window.goBack = goBack;
        window.scrollToTop = scrollToTop;
        window.showPrivacyModal = showPrivacyModal; 
        window.showTermsModal = showTermsModal; 
        window.filterByCategory = filterByCategory;
        window.filterByEmirate = filterByEmirate;
        window.showFamilyProducts = showFamilyProducts;
        window.showProductDetail = showProductDetail;
        window.performHomeSearch = performHomeSearch;
        window.performFamiliesSearch = performFamiliesSearch;
        window.showRegisterForm = showRegisterForm;
        window.closeRegisterForm = closeRegisterForm;
        window.validateFamilyForm = validateFamilyForm;
        window.closeInstructionPopup = closeInstructionPopup;
        window.scrollToContact = scrollToContact;
        window.openZoom = openZoom;
        window.closeZoomModal = closeZoomModal;
        window.scrollToZoomImage = scrollToZoomImage;
        window.changeMainImage = changeMainImage;
        window.toggleLanguage = toggleLanguage;
        window.showSharePopup = showSharePopup;
        window.showProfileSharePopup = showProfileSharePopup;
        window.closeSharePopup = closeSharePopup;
        window.closeShareProfilePopup = closeShareProfilePopup;
        window.shareVia = shareVia;
        window.shareProfileVia = shareProfileVia;
        window.copyLink = copyLink;
        window.copyProfileLink = copyProfileLink;
        window.toggleFavorite = toggleFavorite;
        window.showFavorites = showFavorites;
        window.renderFamilyDeals = renderFamilyDeals;
        window.showDealDetails = showDealDetails;
        window.formatExpiryDate = formatExpiryDate;