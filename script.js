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
                paidBadge: "مميز",
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
                joinBtn: "سجل مشروعك",
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
                linkCopied: "تم نسخ الرابط!",
                registerTitle: "سجل مشروعك الآن",
                registerViaTwitter: "راسلنا على منصة X",
                registerViaInstagram: "راسلنا على انستغرام",
                registerViaTikTok: "راسلنا على تيك توك",
                },
            en: {
                siteTitle: "Projects Souq",
                registerTitle: "Register Your Project Now",
                registerViaX: "Message us on X",
                registerViaInstagram: "Message us on Instagram",
                registerViaTikTok: "Message us on TikTok",
                paidBadge: "Featured",
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
                joinBtn: "Register Project",
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
                        icon = 'fa-x-twitter';
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
                        icon = 'fa-globe';
                        bg = 'website-bg';
                        break;
                    default:
                        url = value;
                        icon = 'fa-globe';
                        bg = 'website-bg';
                }
                return {url, icon, bg, type};
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

    // البحث النصي
    if (appState.searchQuery) {
        const query = appState.searchQuery.trim().toLowerCase();
        if (query !== '') {
            filtered = filtered.filter(family => {
                const nameAr = (family.name || '').toLowerCase();
                const nameEn = (family.nameEn || '').toLowerCase();
                const descAr = (family.description || '').toLowerCase();
                const descEn = (family.descriptionEn || '').toLowerCase();
                const longDescAr = (family.longDescription || '').toLowerCase();
                const longDescEn = (family.longDescriptionEn || '').toLowerCase();

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

    // ترتيب المشاريع: المدفوعة في الأعلى
    const sortedProjects = [...filtered].sort((a, b) => {
        if (a.is_paid && !b.is_paid) return -1;
        if (!a.is_paid && b.is_paid) return 1;
        return 0;
    });

    const grid = document.getElementById('familiesGrid');
    
    if (sortedProjects.length === 0) {
        grid.innerHTML = `<div style="grid-column: span 2; text-align: center; padding: 30px;">${t.noProjects}</div>`;
        return;
    }

grid.innerHTML = sortedProjects.map(family => {
    const familyName = appState.currentLanguage === 'ar' ? family.name : family.nameEn;
    const familyDesc = appState.currentLanguage === 'ar' ? family.description : family.descriptionEn;
    
    const licenseBadge = family.adra_license === 'نعم' ? 
        `<div class="license-badge-card"><i class="fas fa-check-circle"></i>${t.licensed}</div>` : '';
    
    const paidBadge = family.is_paid ? `
        <div class="paid-badge-red">
            <i class="fas fa-fire"></i>
            <span>${t.paidBadge || 'مميز'}</span>
        </div>
    ` : '';
    
    return `
    <div class="family-card ${family.is_paid ? 'paid-card-red' : ''}" onclick="navigateTo('/family/${family.id}')">
        ${paidBadge}
        ${licenseBadge}
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

        // ==================== عرض منتجات المشروع (محدث مع العروض وجميع أزرار التواصل) ====================
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
            
            // واتساب
            if (family.whatsapp) {
                const whatsappUrl = `https://wa.me/${family.whatsapp.replace(/[^0-9]/g,'')}`;
                contactHtml += `<a href="#" onclick="handleContact('${whatsappUrl}', 'whatsapp'); return false;" class="contact-item"><div class="contact-icon whatsapp-bg"><i class="fab fa-whatsapp"></i></div></a>`;
            }
            
            // هاتف
            if (family.phone) {
                const phoneUrl = `tel:${family.phone}`;
                contactHtml += `<a href="#" onclick="handleContact('${phoneUrl}', 'phone'); return false;" class="contact-item"><div class="contact-icon phone-bg"><i class="fas fa-phone"></i></div></a>`;
            }
            
            // إيميل
            if (family.email) {
                const emailUrl = `mailto:${family.email}`;
                contactHtml += `<a href="#" onclick="handleContact('${emailUrl}', 'email'); return false;" class="contact-item"><div class="contact-icon email-bg"><i class="fas fa-envelope"></i></div></a>`;
            }
            
            // وسائل التواصل الاجتماعي (sell_points)
            if (family.sell_points && Array.isArray(family.sell_points)) {
                const parsed = parseSellPoints(family.sell_points);
                parsed.forEach(p => {
                    contactHtml += `<a href="#" onclick="handleContact('${p.url}', '${p.type}'); return false;" class="contact-item"><div class="contact-icon ${p.bg}"><i class="fab ${p.icon}"></i></div></a>`;
                });
            } else if (family.sell_point) {
                const url = family.sell_point.startsWith('http') ? family.sell_point : `https://${family.sell_point}`;
                contactHtml += `<a href="#" onclick="handleContact('${url}', 'website'); return false;" class="contact-item"><div class="contact-icon website-bg"><i class="fas fa-globe"></i></div></a>`;
            }
            
            document.getElementById('contactSectionBottom').innerHTML = `<h3 class="contact-title"><i class="fas fa-phone-alt"></i> ${t.contactSeller}</h3><div class="contact-grid">${contactHtml || `<p>${t.noContact}</p>`}</div>`;
            
            showPage('products');
            showInstructionPopupOnce();
        }

        // ==================== عرض تفاصيل المنتج (محدث مع نافذة التأكيد لجميع الأزرار) ====================
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
            
            // واتساب
            if (family.whatsapp) {
                const whatsappUrl = `https://wa.me/${family.whatsapp.replace(/[^0-9]/g,'')}`;
                sellerContactHtml += `<a href="#" onclick="handleContact('${whatsappUrl}', 'whatsapp'); return false;" class="seller-contact-item"><div class="seller-contact-icon whatsapp-bg"><i class="fab fa-whatsapp"></i></div></a>`;
            }
            
            // هاتف
            if (family.phone) {
                const phoneUrl = `tel:${family.phone}`;
                sellerContactHtml += `<a href="#" onclick="handleContact('${phoneUrl}', 'phone'); return false;" class="seller-contact-item"><div class="seller-contact-icon phone-bg"><i class="fas fa-phone"></i></div></a>`;
            }
            
            // إيميل
            if (family.email) {
                const emailUrl = `mailto:${family.email}`;
                sellerContactHtml += `<a href="#" onclick="handleContact('${emailUrl}', 'email'); return false;" class="seller-contact-item"><div class="seller-contact-icon email-bg"><i class="fas fa-envelope"></i></div></a>`;
            }
            
            // وسائل التواصل الاجتماعي
            if (family.sell_points && Array.isArray(family.sell_points)) {
                const parsed = parseSellPoints(family.sell_points);
                parsed.forEach(p => {
                    sellerContactHtml += `<a href="#" onclick="handleContact('${p.url}', '${p.type}'); return false;" class="seller-contact-item"><div class="seller-contact-icon ${p.bg}"><i class="fab ${p.icon}"></i></div></a>`;
                });
            } else if (family.sell_point) {
                const url = family.sell_point.startsWith('http') ? family.sell_point : `https://${family.sell_point}`;
                sellerContactHtml += `<a href="#" onclick="handleContact('${url}', 'website'); return false;" class="seller-contact-item"><div class="seller-contact-icon website-bg"><i class="fas fa-globe"></i></div></a>`;
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
    
    const t = translations[newLang];
    
    // تحديث العناصر الموجودة فقط (مع التحقق من وجودها)
    const elementsToUpdate = [
        { id: 'siteTitle', property: 'textContent' },
        { id: 'siteSubtitle', property: 'textContent' },
        { id: 'navHome', property: 'textContent' },
        { id: 'navMarket', property: 'textContent' },
        { id: 'navFavorites', property: 'textContent' },
        { id: 'footerLogo', property: 'textContent' },
        { id: 'footerText', property: 'textContent' },
        { id: 'copyright', property: 'textContent' },
        { id: 'langBtn', property: 'textContent' },
        { id: 'heroTitle', property: 'textContent' },
        { id: 'heroSubtitle', property: 'textContent' },
        { id: 'discoverBtn', property: 'textContent' },
        { id: 'joinBtn', property: 'textContent' },
        { id: 'aboutTitle', property: 'textContent' },
        { id: 'stat1', property: 'textContent' },
        { id: 'stat2', property: 'textContent' },
        { id: 'stat3', property: 'textContent' },
        { id: 'stat4', property: 'textContent' },
        { id: 'badge1', property: 'textContent' },
        { id: 'badge2', property: 'textContent' },
        { id: 'badge3', property: 'textContent' },
        { id: 'badge4', property: 'textContent' },
        { id: 'familiesPageTitle', property: 'textContent' },
        { id: 'familiesPageSubtitle', property: 'textContent' },
        { id: 'productsTitle', property: 'textContent' },
        { id: 'favoritesPageTitle', property: 'textContent' },
        { id: 'favoritesPageSubtitle', property: 'textContent' },
        { id: 'popupTitle', property: 'textContent' },
        { id: 'step1', property: 'textContent' },
        { id: 'step2', property: 'textContent' },
        { id: 'step3', property: 'textContent' },
        { id: 'gotItBtn', property: 'textContent' },
        { id: 'shareTitle', property: 'textContent' },
        { id: 'copyLinkText', property: 'textContent' },
        { id: 'closeShareBtn', property: 'textContent' },
        { id: 'offersBtnText', property: 'textContent' },
        { id: 'offersPageTitle', property: 'textContent' },
        { id: 'offersPageSubtitle', property: 'textContent' },
        { id: 'dealsTitle', property: 'textContent' }
    ];
    
    // تحديث النصوص مع التحقق من وجود العنصر
    elementsToUpdate.forEach(item => {
        const element = document.getElementById(item.id);
        if (element && t[item.id]) {
            element[item.property] = t[item.id];
        }
    });
    
    // تحديث النصوص الداخلية (innerHTML)
    const innerElementsToUpdate = [
        { id: 'aboutText1', property: 'innerHTML' },
        { id: 'aboutText2', property: 'innerHTML' },
        { id: 'aboutText3', property: 'innerHTML' }
    ];
    
    innerElementsToUpdate.forEach(item => {
        const element = document.getElementById(item.id);
        if (element && t[item.id]) {
            element[item.property] = t[item.id];
        }
    });
    
    // تحديث placeholders
    const homeSearch = document.getElementById('homeSearch');
    if (homeSearch) homeSearch.placeholder = t.homeSearchPlaceholder || '';
    
    const familiesSearch = document.getElementById('familiesSearch');
    if (familiesSearch) familiesSearch.placeholder = t.familiesSearchPlaceholder || '';
    
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
// ==================== نافذة تأكيد التواصل ====================
let contactPendingUrl = null;
let contactPendingType = null;

function showContactConfirm(url, type) {
    // حفظ الرابط والنوع مؤقتاً
    contactPendingUrl = url;
    contactPendingType = type;
    
    // إنشاء النافذة إذا لم تكن موجودة
    let modal = document.getElementById('contactConfirmModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'contactConfirmModal';
        modal.className = 'contact-confirm-modal';
        modal.innerHTML = `
            <div class="contact-confirm-content">
                <div class="contact-confirm-header">
                    <i class="fas fa-shield-alt"></i>
                    <h3 id="confirmTitle">تنبيه قبل التواصل</h3>
                </div>
                <div class="contact-confirm-body">
                    <p id="confirmText">منصة سوق المشاريع هي منصة وسيطة فقط. نحن لسنا طرفاً في أي عملية بيع أو شراء، ولا نتحمل مسؤولية أي نزاع أو مشكلة تحدث بينك وبين البائع.</p>
                    <p id="confirmSubtext">بالضغط على "متابعة"، أنت توافق على أنك تتواصل مع البائع مباشرة وعلى مسؤوليتك الشخصية.</p>
                </div>
                <div class="contact-confirm-buttons">
                    <button class="confirm-cancel" id="confirmCancelBtn">إلغاء</button>
                    <button class="confirm-proceed" id="confirmProceedBtn">متابعة</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        
        // إضافة الأنماط
        const style = document.createElement('style');
        style.textContent = `
            .contact-confirm-modal {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.7);
                z-index: 10000;
                align-items: center;
                justify-content: center;
                backdrop-filter: blur(5px);
            }
            .contact-confirm-modal.show {
                display: flex;
            }
            .contact-confirm-content {
                background: white;
                border-radius: 28px;
                max-width: 350px;
                width: 90%;
                padding: 25px 20px;
                text-align: center;
                box-shadow: 0 20px 40px rgba(0,0,0,0.3);
                animation: fadeInScale 0.3s ease;
                border-right: 5px solid var(--secondary);
            }
            @keyframes fadeInScale {
                from { opacity: 0; transform: scale(0.9); }
                to { opacity: 1; transform: scale(1); }
            }
            .contact-confirm-header {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 10px;
                margin-bottom: 20px;
            }
            .contact-confirm-header i {
                font-size: 48px;
                color: var(--secondary);
            }
            .contact-confirm-header h3 {
                font-family: 'El Messiri', serif;
                color: var(--primary-dark);
                font-size: 22px;
                margin: 0;
            }
            .contact-confirm-body p {
                font-size: 14px;
                line-height: 1.6;
                color: var(--dark);
                margin-bottom: 12px;
                text-align: center;
            }
            .contact-confirm-body p:last-child {
                font-size: 12px;
                color: var(--gray);
                background: var(--light);
                padding: 10px;
                border-radius: 16px;
            }
            .contact-confirm-buttons {
                display: flex;
                gap: 12px;
                margin-top: 20px;
            }
            .confirm-cancel, .confirm-proceed {
                flex: 1;
                padding: 12px;
                border-radius: 40px;
                font-weight: 700;
                cursor: pointer;
                border: none;
                font-size: 14px;
                transition: all 0.2s;
            }
            .confirm-cancel {
                background: var(--light);
                color: var(--dark);
                border: 1px solid var(--light-gray);
            }
            .confirm-cancel:hover {
                background: var(--light-gray);
            }
            .confirm-proceed {
                background: var(--primary-gradient);
                color: white;
                border: 1px solid var(--secondary);
            }
            .confirm-proceed:hover {
                transform: scale(1.02);
                box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
            }
            [dir="ltr"] .contact-confirm-content {
                border-left: 5px solid var(--secondary);
                border-right: none;
            }
        `;
        document.head.appendChild(style);
        
        // ربط الأزرار
        document.getElementById('confirmCancelBtn').onclick = closeContactConfirm;
        document.getElementById('confirmProceedBtn').onclick = proceedToContact;
    }
    
    // عرض النافذة
    modal.classList.add('show');
}

function closeContactConfirm() {
    const modal = document.getElementById('contactConfirmModal');
    if (modal) modal.classList.remove('show');
    contactPendingUrl = null;
    contactPendingType = null;
}

function proceedToContact() {
    if (contactPendingUrl) {
        window.open(contactPendingUrl, '_blank');
    }
    closeContactConfirm();
}

// دالة بديلة لأزرار التواصل - استخدمها بدلاً من الرابط المباشر
function handleContact(url, type) {
    showContactConfirm(url, type);
}

        
function showSocialContact() {
    const t = translations[appState.currentLanguage];
    const currentLang = appState.currentLanguage;
    
    let popup = document.getElementById('socialContactPopup');
    if (!popup) {
        popup = document.createElement('div');
        popup.id = 'socialContactPopup';
        popup.className = 'instruction-popup';
        document.body.appendChild(popup);
    }
    
    // تحديد رابط التسجيل حسب اللغة الحالية
    const registerUrl = currentLang === 'ar' ? 'register.html' : 'registerEn.html';
    
    const socialLinks = `
        <div class="popup-header">
            <i class="fas fa-hands-helping" style="font-size: 42px; color: var(--secondary);"></i>
            <h3>${t.registerTitle || (currentLang === 'ar' ? 'سجل مشروعك - لفترة محدودة' : 'Register Your Project - Limited Time')}</h3>
        </div>
        <div class="steps" style="margin-bottom: 15px;">
            <div class="step">
                <div class="step-icon"><i class="fab fa-x-twitter"></i></div>
                <span>${t.registerViaX || (currentLang === 'ar' ? 'راسلنا على منصة X' : 'Message us on X')}</span>
            </div>
            <div class="step">
                <div class="step-icon"><i class="fab fa-instagram"></i></div>
                <span>${t.registerViaInstagram || (currentLang === 'ar' ? 'راسلنا على انستغرام' : 'Message us on Instagram')}</span>
            </div>
            <div class="step">
                <div class="step-icon"><i class="fab fa-tiktok"></i></div>
                <span>${t.registerViaTikTok || (currentLang === 'ar' ? 'راسلنا على تيك توك' : 'Message us on TikTok')}</span>
            </div>
        </div>
        <div class="contact-buttons" style="display: flex; gap: 20px; justify-content: center; margin: 20px 0;">
            <a href="https://x.com/souqalmasharie" target="_blank" class="social-contact-btn" style="background: #000000; color: white; width: 55px; height: 55px; border-radius: 50%; display: flex; align-items: center; justify-content: center; text-decoration: none; transition: all 0.3s ease; font-size: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
                <i class="fab fa-x-twitter"></i>
            </a>
            <a href="https://instagram.com/souqalmasharie" target="_blank" class="social-contact-btn" style="background: linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D); color: white; width: 55px; height: 55px; border-radius: 50%; display: flex; align-items: center; justify-content: center; text-decoration: none; transition: all 0.3s ease; font-size: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
                <i class="fab fa-instagram"></i>
            </a>
            <a href="https://tiktok.com/@souqalmsharie" target="_blank" class="social-contact-btn" style="background: #000000; color: white; width: 55px; height: 55px; border-radius: 50%; display: flex; align-items: center; justify-content: center; text-decoration: none; transition: all 0.3s ease; font-size: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
                <i class="fab fa-tiktok"></i>
            </a>
        </div>
        
        <!-- زر التسجيل المباشر - يودي على نفس اللغة -->
        <button onclick="closeSocialContactPopup(); window.location.href='${registerUrl}';" style="background: linear-gradient(135deg, #0F3D2E, #1A5F44); color: white; border: 1px solid var(--secondary); padding: 12px 25px; border-radius: 40px; font-size: 16px; font-weight: 700; cursor: pointer; width: 100%; display: flex; align-items: center; justify-content: center; gap: 10px; margin-bottom: 12px;">
            <i class="fas fa-file-alt"></i>
            <span>${currentLang === 'ar' ? 'سجل مشروعك الآن' : 'Register Your Project Now'}</span>
        </button>
        
        <button class="close-btn" onclick="closeSocialContactPopup()">
            <i class="fas fa-check-circle"></i> 
            <span>${t.gotItBtn || (currentLang === 'ar' ? 'حسناً' : 'Got it')}</span>
        </button>
    `;
    
    popup.innerHTML = socialLinks;
    popup.classList.add('show');
}

function closeSocialContactPopup() {
    const popup = document.getElementById('socialContactPopup');
    if (popup) {
        popup.classList.remove('show');
    }
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
        window.handleContact = handleContact;