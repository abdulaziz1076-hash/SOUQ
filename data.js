const familiesData = [
  {
    id: 1,
    name: "موتشا - Motcha",
    nameEn: "Motcha",
    is_paid: true,
    emirate: "دبي",
    description: "نقدم نوع ممتاز جداً و نوفر كميات كبيرة للكوفيات.",
    descriptionEn: "We offer excellent quality matcha and provide bulk quantities for cafes.",
    longDescription: "اول براند ماتشا صينية في الامارات، نقدم نوع ممتاز جداً و نوفر كميات كبيرة للكوفيات.",
    longDescriptionEn: "The first Chinese matcha brand in the UAE, offering excellent quality matcha and bulk quantities for cafes.",
    image: "images/p2.jpg",
    phone: "",
    whatsapp: "+971555307912",
    email: "",
    sell_points: [{ type: "instagram", value: "motcha.ae" }],
    adra_license: "نعم",
    coverage: "جميع إمارات الدولة",
    badges: ["مميز"],
    badgesEn: ["Distinct"],
    category: "أطعمة ومشروبات",
    categoryEn: "Food & Beverages",
    products: [
      {
        id: "2_p1",
        name: "ماتشا",
        nameEn: "Matcha",
        description: "ماتشا احتفالية عضوية 50g",
        descriptionEn: "Ceremonial organic matcha 50g",
        longDescription: "تجربة النكهة والجودة الصينية الأصيلة مع ماتشا الدرجة الاحتفالية العضوية، يتم حصد أوراق الشاي بعناية من الظل للحفاظ على اللون الأخضر الزمردي والمذاق الغني والقوام الكريمي.",
        longDescriptionEn: "Experience authentic Chinese flavor and quality with organic ceremonial grade matcha, carefully shade-grown harvested to preserve the emerald green color, rich taste, and creamy texture.",
        category: "أطعمة ومشروبات",
        categoryEn: "Food & Beverages",
        mainImage: "images/p2-5.jpg",
        images: [
          "images/p2-5.jpg",
          "images/p2-5-1.jpg",
          "images/p2-5-2.jpg",
          "images/p2-5-3.jpg",
        ],
        details: [
          "الوزن: 50 جرام (تكفي لتحضير 25-30 كوب)",
          "الجودة: عضوية 100%، خالية من الإضافات والمواد الحافظة.",
          "النكهة: تمتاز بحلاوة طبيعية خفيفة وبدون مرارة تماماً.",
        ],
        detailsEn: [
          "Weight: 50g (makes 25-30 cups)",
          "Quality: 100% organic, free from additives and preservatives.",
          "Flavor: Naturally sweet with no bitterness.",
        ],
      },
      {
        id: "2_p2",
        name: "عدة ماتشا",
        nameEn: "Matcha Set",
        description: "عدة ماتشا متكاملة",
        descriptionEn: "Complete matcha set",
        longDescription:
          "عدة الماتشا المتكاملة تجربة النكهة والجودة الصينية الأصيلة، لتحضير كوب مثالي من الماتشا في منزلك، صممت مجموعتنا بعناية فائقة لتأخذك في رحلة تبدأ من لحظة فتح العلبة وحتى آخر رشفة.",
        longDescriptionEn:
          "Complete matcha set for an authentic Chinese flavor experience. Our carefully designed set takes you on a journey from the moment you open the box to the last sip.",
        category: "أطعمة ومشروبات",
        categoryEn: "Beverages",
        mainImage: "images/p2-3.jpg",
        images: ["images/p2-3.jpg"],
        details: [],
        detailsEn: [],
      },
      {
        id: "2_p3",
        name: "ملعقة ماتشا",
        nameEn: "Matcha Spoon",
        description: "ملعقة ماتشا حديد",
        descriptionEn: "Matcha spoon",
        longDescription: "ملعقة ماتشا حديد مقاوم للصدأ بلونين ذهبي و فضي",
        longDescriptionEn: "Stainless steel matcha spoon in gold and silver colors",
        category: "مشروبات",
        categoryEn: "Food & Beverages",
        mainImage: "images/p2-1.jpg",
        images: ["images/p2-1.jpg", "images/p2-1-1.jpg"],
        details: [],
        detailsEn: [],
      },
      {
        id: "2_p4",
        name: "كوب ماتشا",
        nameEn: "Matcha Cup",
        description: "كوب ماتشا مميز",
        descriptionEn: "Special matcha cup",
        longDescription: "كوب ماتشا مميز",
        longDescriptionEn: "Special matcha cup",
        category: "أطعمة ومشروبات",
        categoryEn: "Food & Beverages",
        mainImage: "images/p2-2.jpg",
        images: ["images/p2-2.jpg"],
        details: [],
        detailsEn: [],
      },
    ],
  },
  {
    id: 11,
    name: "رغبة السوشي",
    nameEn: "Sushi Crava",
    emirate: "أبوظبي",
    description: "أطعمة ومشروبات",
    descriptionEn: "Food & Beverages",
    longDescription:
      "أطباق يابانية مبتكرة بطابع عصري ونكهات غنية. نهتم بأدق التفاصيل في التحضير، ونستخدم مكونات مختارة بعناية لنقدم تجربة طعام مختلفة تجمع بين الجودة والطعم المميز.",
    longDescriptionEn:
      "modern Japanese-inspired dishes crafted with rich flavors and premium ingredients. We focus on quality, presentation, and taste to deliver a unique dining experience.",
    image: "images/p11.jpg",
    phone: "",
    whatsapp: "+971 50 765 7056",
    email: "",
    sell_points: [{ type: "instagram", value: "scrave.ae" }],
    adra_license: "نعم",
    coverage: "جميع إمارات الدولة",
    badges: ["جديد"],
    badgesEn: ["New"],
    category: "أطعمة ومشروبات",
    categoryEn: "Food & Beverages",
    products: [
      {
        id: "11_p1",
        name: "كريزي كراب باك",
        nameEn: "Crazy Crab bake",
        description:
          "باك الكابوريا الكريمي بصوص غني وطبقة مقرمشة.",
        descriptionEn:
          "Creamy crab bake with rich sauce and crispy topping.",
        longDescription:
          "باك شهي بحشوة كابوريا طازجة مع صوص كريمي وجبنة ذائبة، يقدم ساخناً مع طبقة مقرمشة. طبق غني ومثالي لمحبي الكابوريا.",
        longDescriptionEn:
          "A delicious bake with fresh crab filling, creamy sauce, and melted cheese, served hot with a crispy topping. A rich dish perfect for crab lovers.",
        category: "أطعمة ومشروبات",
        categoryEn: "Food & Beverages",
        mainImage: "images/p11-1-2.png",
        images: ["images/p11-1-2.png", "images/p11-1-1.png"],
        details: [
          "باك كابوريا",
          "صوص كريمي",
          "جبنة ذائبة",
          "طبقة مقرمشة",
        ],
        detailsEn: [
          "Crab bake",
          "Creamy sauce",
          "Melted cheese",
          "Crispy topping",
        ],
      },
      {
        id: "11_p2",
        name: "تيمبورا باك",
        nameEn: "Tempura bake",
        description:
          "باك التيمبورا المقرمش بالصوص الحار والجبن/ والعادي.",
        descriptionEn:
          "Crispy tempura pak with spicy sauce and cheese.",
        longDescription:
          "باك يجمع بين قطع التيمبورا المقرمشة والصوص الكريمي، مغطى بطبقة من الجبن المحمر. وجبة مشبعة بنكهة مدخنة.",
        longDescriptionEn:
          "A bake combining crispy tempura pieces with a creamy sauce, topped with browned cheese. A filling meal with a smoky and flavor.",
        category: "أطعمة ومشروبات",
        categoryEn: "Food & Beverages",
        mainImage: "images/p11-2-1.jpg",
        images: ["images/p11-2-1.jpg", "images/p11-2-2.png"],
        details: [
          "تيمبورا مقرمش",
          "صوص كريمي حار/عادي",
          "جبنة محمرة",
          "حجم كبير",
        ],
        detailsEn: [
          "Crispy tempura",
          "Spicy creamy sauce",
          "Browned cheese",
          "Large size",
        ],
      },
      {
        id: "11_p3",
        name: "تونة باك - Tuna bake",
        nameEn: "Tuna bake",
        description:
          "باك بالتونة الطازجة والمايونيز والجبن الذائب.",
        descriptionEn:
          "bake with fresh tuna, mayonnaise, and melted cheese.",
        longDescription:
          "باك لذيذ بحشوة التونة الطازجة الممزوجة بالمايونيز والخضروات، مغطاة بطبقة من الجبن الذائب ومخبوزة حتى تصبح ذهبية.",
        longDescriptionEn:
          "A delicious bake with fresh tuna filling mixed with mayonnaise and vegetables, topped with melted cheese and cocked  until golden.",
        category: "أطعمة ومشروبات",
        categoryEn: "Food & Beverages",
        mainImage: "images/p11-3-1.jpg",
        images: ["images/p11-3-1.jpg", "images/p11-3-2.png"],
        details: [
          "تونة طازجة",
          "مايونيز",
          "خضروات",
          "جبنة ذائبة",
        ],
        detailsEn: [
          "Fresh tuna",
          "Mayonnaise",
          "Vegetables",
          "Melted cheese",
        ],
      },
      {
        id: "11_p4",
        name: "هاف آند هاف باك",
        nameEn: "Half & Half Bak",
        description: "مزيج نصف تيمبور ونصف كابوريا بالجبن.",
        descriptionEn: "Half tempura & half crab with cheese.",
        longDescription:
          "أفضل خيار لمحبي التنوع! نصف باك بالتيمبورا الحار/العادي ونصف بكرياب الكابوريا الكريمي، مغطى بالجبن. يجمع بين النكهتين في طبق واحد.",
        longDescriptionEn:
          "The best choice for variety lovers! Half spicy/normal tempura bake and half creamy crab bake, topped with cheese. Combines two flavors in one dish.",
        category: "أطعمة ومشروبات",
        categoryEn: "Food & Beverages",
        mainImage: "images/p11-4-1.png",
        images: ["images/p11-4-1.png", "images/p11-4-2.jpg"],
        details: [
          "نصف تيمبورا حار/عادي",
          "نصف كابوريا",
          "صوص كريمي",
          "جبنة ذائبة",
        ],
        detailsEn: [
          "Half spicy tempura",
          "Half crab",
          "Creamy sauce",
          "Melted cheese",
        ],
      },
      {
        id: "11_p5",
        name: "فيج نودلز",
        nameEn: "Veg Noodles",
        description:
          "نودلز بالخضروات الطازجة والنكهة الآسيوية.",
        descriptionEn:
          "Noodles with fresh vegetables and Asian flavor.",
        longDescription:
          "نودلز مقلية مع تشكيلة من الخضروات الطازجة والصلصة الآسيوية المميزة. طبق نباتي شهي ومشبع.",
        longDescriptionEn:
          "Stir-fried noodles with a mix of fresh vegetables and a distinctive Asian sauce. A delicious and filling vegetarian dish.",
        category: "أطعمة ومشروبات",
        categoryEn: "Food & Beverages",
        mainImage: "images/p11-5-1.jpg",
        images: ["images/p11-5-1.jpg", "images/p11-5-2.PNG"],
        details: [
          "نودلز مقلية",
          "خضروات طازجة",
          "صلصة آسيوية",
          "طبق نباتي",
        ],
        detailsEn: [
          "Stir-fried noodles",
          "Fresh vegetables",
          "Asian sauce",
          "Vegetarian dish",
        ],
      },
      {
        id: "11_p6",
        name: "سوب رامن",
        nameEn: "Soup Ramen",
        description: "شوربة رامن تقليدية بنكهة غنية.",
        descriptionEn:
          "Traditional ramen soup with rich flavor.",
        longDescription:
          "شوربة رامن دافئة ولذيذة، تحتوي على نودلز طازجة في مرق غني ومتبل. وجبة خفيفة ومريحة في أي وقت.",
        longDescriptionEn:
          "A warm and delicious ramen soup, containing fresh noodles in a rich and seasoned broth. A light and comforting meal anytime.",
        category: "أطعمة ومشروبات",
        categoryEn: "Food & Beverages",
        mainImage: "images/p11-6-1.jpg",
        images: ["images/p11-6-1.jpg", "images/p11-6-2.jpg"],
        details: [
          "نودلز طازجة",
          "مرق غني",
          "طعم تقليدي",
        ],
        detailsEn: [
          "Fresh noodles",
          "Rich broth",
          "Light meal",
          "Traditional taste",
        ],
      },
      {
        id: "11_p9",
        name: "تشيزي رامن - Cheesy Ramen",
        nameEn: "Cheesy Ramen",
        description: "رامن كريمي بالجبن الذائب.",
        descriptionEn: "Creamy ramen with melted cheese.",
        longDescription:
          "تجربة فريدة لمحبي الجبن! رامن كريمي غني يقدم مع طبقة من الجبن الذائب، يخلق مزيجاً لا يقاوم بين النكهات الآسيوية والجبن.",
        longDescriptionEn:
          "A unique experience for cheese lovers! A rich creamy ramen served with a layer of melted cheese, creating an irresistible blend of Asian flavors and cheese.",
        category: "أطعمة ومشروبات",
        categoryEn: "Food & Beverages",
        mainImage: "images/p11-9-2.jpg",
        images: ["images/p11-9-2.jpg", "images/p11-9-1.png"],
        details: [
          "رامن كريمي",
          "جبن ذائب",
          "نكهة غنية",
          "لمحبي الجبن",
        ],
        detailsEn: [
          "Creamy ramen",
          "Melted cheese",
          "Rich flavor",
          "For cheese lovers",
        ],
      },
      {
        id: "11_p7",
        name: "إدامامي حار وعادي",
        nameEn: "Normal/Spicy Edamame",
        description:
          "إدامامي حار وعادي بلمسة من التوابل.",
        descriptionEn:
          "Spicy edamame with a touch of seasoning.",
        longDescription:
          "فول الصويا الأخضر (الإدامامي) مسلوق ومتبل بخلطة حارة مميزة. مقبلات صحية ولذيذة تفتح الشهية.",
        longDescriptionEn:
          "Green soybeans (edamame) boiled and seasoned with a special spicy/normal blend. A healthy and delicious appetizer.",
        category: "أطعمة ومشروبات",
        categoryEn: "Food & Beverages",
        mainImage: "images/p11-7-1.jpg",
        images: ["images/p11-7-1.jpg", "images/p11-7-2.jpg"],
        details: [
          "إدامامي",
          "بارد/حار",
          "مقبلات صحية",
          "يفتح الشهية",
        ],
        detailsEn: [
          "Edamame",
          "Spicy blend",
          "Healthy appetizer",
          "Great starter",
        ],
      },
      {
        id: "11_p8",
        name: "سلطة خيار",
        nameEn: "Cucumber Salad",
        description: "سلطة خيار منعشة.",
        descriptionEn: "Fresh cucumber salad.",
        longDescription:
          "سلطة خيار مقطعة مع صلصة منعشة وحامضة قليلاً. طبق جانبي خفيف يقدم مع الوجبات الرئيسية، حجم كبير وصغير.",
        longDescriptionEn:
          "Sliced cucumber salad with a refreshing, slightly tangy dressing. A light side dish served with main meals.",
        category: "أطعمة ومشروبات",
        categoryEn: "Food & Beverages",
        mainImage: "images/p11-8-1.jpg",
        images: ["images/p11-8-1.jpg", "images/p11-8-2.jpg"],
        details: [
          "خيار طازج",
          "صلصة منعشة",
          "حجم كبير/حجم صغير",
          "طبق جانبي",
        ],
        detailsEn: [
          "Fresh cucumber",
          "Refreshing dressing",
          "Small size",
          "Side dish",
        ],
      },
      {
        id: "11_p15",
        name: "تيمبورا بول - Tempura Bowl",
        nameEn: "Tempura Bowl",
        description:
          "وعاء تيزاوا الخاص بمكونات متنوعة.",
        descriptionEn:
          "Special Tezawa bowl with assorted ingredients.",
        longDescription:
          "وعاء مميز يجمع بين الأرز الياباني الطري وشرائح اللحم أو الدجاج مع الخضروات والصلصة الخاصة. وجبة متكاملة ومشبعة.",
        longDescriptionEn:
          "A distinctive bowl combining soft Japanese rice, sliced meat or chicken, vegetables, and a special sauce. A complete and satisfying meal.",
        category: "أطعمة ومشروبات",
        categoryEn: "Food & Beverages",
        mainImage: "images/p11-15-1.jpg",
        images: ["images/p11-15-1.jpg"],
        details: [
          "أرز ياباني",
          "شرائح لحم أو دجاج",
          "خضروات طازجة",
          "صلصة خاصة",
          "وجبة متكاملة",
        ],
        detailsEn: [
          "Japanese rice",
          "Sliced meat or chicken",
          "Fresh vegetables",
          "Special sauce",
          "Complete meal",
        ],
      },
      {
        id: "11_p14",
        name: "كيكة سوشي",
        nameEn: "Sushi Cake",
        description:
          "كيكة سوشي مبتكرة تجمع بين نكهات السوشي بشكل جديد.",
        descriptionEn:
          "An innovative sushi cake combining sushi flavors in a new way.",
        longDescription:
          "استمتع بتجربة فريدة مع كيكة السوشي، حيث يتم ترتيب طبقات من الأرز الياباني بالخل، وشرائح السمك الطازج، والأفوكادو، والخيار، مع صوص المايونيز الحار وصلصة الصويا. تقدم باردة ومقطعة مثل الكيكة.",
        longDescriptionEn:
          "Enjoy a unique experience with sushi cake, where layers of vinegared Japanese rice, fresh fish slices, avocado, cucumber, spicy mayo, and soy sauce are arranged. Served chilled and sliced like a cake.",
        category: "أطعمة ومشروبات",
        categoryEn: "Food & Beverages",
        mainImage: "images/p11-14-1.png",
        images: ["images/p11-14-1.png", "images/p11-14-2.png"],
        details: [
          "أرز سوشي",
          "سمك سلمون طازج",
          "أفوكادو",
          "خيار",
          "مايونيز حار",
          "صلصة صويا",
          "طحينة سمسم",
          "أعشاب بحرية",
        ],
        detailsEn: [
          "Sushi rice",
          "Fresh salmon",
          "Avocado",
          "Cucumber",
          "Spicy mayo",
          "Soy sauce",
          "Sesame paste",
          "Seaweed",
        ],
      },
      {
        id: "11_p16",
        name: "ماتشا",
        nameEn: "Matcha",
        description:
          "مشروب ماتشا ياباني أخضر بارد أو ساخن.",
        descriptionEn:
          "Cold or hot Japanese green matcha tea.",
        longDescription:
          "ماتشا هو شاي أخضر ياباني ناعم ومطحون، يُخفق مع الماء الساخن حتى يصبح رغويًا. يتميز بنكهته الغنية ومضادات الأكسدة العالية. يقدم باردًا أو ساخنًا حسب الرغبة.",
        longDescriptionEn:
          "Matcha is a finely ground Japanese green tea powder, whisked with hot water until frothy. It has a rich flavor and is high in antioxidants. Served cold or hot as desired.",
        category: "أطعمة ومشروبات",
        categoryEn: "Food & Beverages",
        mainImage: "images/p11-16-1.jpg",
        images: [
          "images/p11-16-1.jpg",
          "images/p11-16-2.jpg",
          "images/p11-16-2.jpg",
          "images/p11-16-2.jpg",
        ],
        details: [
          "شاي أخضر ياباني",
          "غني بمضادات الأكسدة",
          "يقدم بارد أو ساخن",
          "قليل السكر",
          "طعم غني وكريمي",
        ],
        detailsEn: [
          "Japanese green tea",
          "Rich in antioxidants",
          "Served cold or hot",
          "Low sugar",
          "Rich and creamy taste",
        ],
      },
      {
        id: "11_p10",
        name: "كوكاكولا - Coke",
        nameEn: "Coke",
        description: "مشروب غازي كوكاكولا بارد ومنعش.",
        descriptionEn: "Cold and refreshing Coca-Cola.",
        longDescription:
          "مشروب الكوكاكولا الكلاسيكي، بارد ومنعش، الرفيق المثالي لوجبتك.",
        longDescriptionEn:
          "Classic Coca-Cola, cold and refreshing, the perfect companion to your meal.",
        category: "أطعمة ومشروبات",
        categoryEn: "Food & Beverages",
        mainImage: "images/p11-10-1.jpg",
        images: ["images/p11-10-1.jpg"],
        details: [
          "كوكاكولا",
          "مشروب غازي",
          "بارد ومنعش",
        ],
        detailsEn: [
          "Coca-Cola",
          "Soft drink",
          "Cold and refreshing",
        ],
      },
      {
        id: "11_p11",
        name: "جينجر أيل - Ginger Ale",
        nameEn: "Ginger Ale",
        description: "مشروب زنجبيل غازي منعش.",
        descriptionEn: "Refreshing ginger ale soda.",
        longDescription:
          "مشروب جينجر أيل الخفيف بنكهة الزنجبيل المميزة، مثالي لإنعاش الحلق بعد الوجبة.",
        longDescriptionEn:
          "Light ginger ale drink with a distinctive ginger flavor, perfect for refreshing the palate.",
        category: "أطعمة ومشروبات",
        categoryEn: "Food & Beverages",
        mainImage: "images/p11-11.jpg",
        images: ["images/p11.11jpg"],
        details: [
          "جينجر أيل",
          "نكهة زنجبيل",
          "منعش",
        ],
        detailsEn: [
          "Ginger Ale",
          "Ginger flavor",
          "Refreshing",
        ],
      },
      {
        id: "11_p12",
        name: "سبرايت - Sprite",
        nameEn: "Sprite",
        description:
          "مشروب غازي بنكهة الليمون والنعناع.",
        descriptionEn:
          "Lemon and mint flavored soft drink.",
        longDescription:
          "سبرايت المنعش بطعم الليمون الحامض والبارد، الخيار الأمثل ليوم دافئ.",
        longDescriptionEn:
          "Refreshing Sprite with a tangy lemon taste, the perfect choice for a warm day.",
        category: "أطعمة ومشروبات",
        categoryEn: "Food & Beverages",
        mainImage: "images/p11-12.jpg",
        images: ["images/p11-12.jpg"],
        details: [
          "سبرايت",
          "نكهة ليمون",
          "منعش",
        ],
        detailsEn: [
          "Sprite",
          "Lemon flavor",
          "Refreshing",
        ],
      },
      {
        id: "11_p13",
        name: "فانتا فراولة - Strawberry Fanta",
        nameEn: "Strawberry Fanta",
        description:
          "مشروب غازي بنكهة الفراولة الحلوة.",
        descriptionEn:
          "Sweet strawberry flavored soft drink.",
        longDescription:
          "فانتا بنكهة الفراولة الحلوة والمنعشة، لمحبي المشروبات الغازية بالفواكه.",
        longDescriptionEn:
          "Fanta with a sweet and refreshing strawberry flavor, for fans of fruity sodas.",
        category: "أطعمة ومشروبات ",
        categoryEn: "Food & Beverages",
        mainImage: "images/p11-13.jpg",
        images: ["images/p11-13.jpg"],
        details: [
          "فانتا فراولة",
          "نكهة فراولة",
          "حلو ومنعش",
        ],
        detailsEn: [
          "Strawberry Fanta",
          "Strawberry flavor",
          "Sweet and refreshing",
        ],
      },
    ],
  },
  {
    id: 2,
    name: "ورقة قص",
    nameEn: "cards play QS",
    emirate: "أبوظبي",
    description: "ترفيه",
    descriptionEn: "Entertainment",
    longDescription: "اوراق لعب فاخرة - تجربة احترافية في كل لعبة.",
    longDescriptionEn: "Premium playing cards - professional experience in every game.",
    image: "images/P1.png",
    phone: "",
    whatsapp: "",
    email: "",
    sell_points:[
      {type: "instagram" , value: "cardsplayuae"},
    ],
    adra_license: "نعم",
    coverage: "الإمارة فقط",
    badges: [""],
    badgesEn: [""],
    category: "ترفيه",
    categoryEn: "Entertainment",
    products: [
      {
        id: "1_p1",
        name: "بطاقات- قص",
        nameEn: "Cut Cards",
        description: "بطاقات قوية وجودة عالية",
        descriptionEn: "Strong and high quality cards",
        longDescription: "بطاقات لعب احترافية فاخرة مصنوعة من أجود أنواع الورق المقوى، مقاومة للثني والتمزق. مناسبة للمحترفين والهواة على حد سواء. تصميم كلاسيكي أنيق مع لمسات عصرية. تأتي في علبة هدايا فاخرة.",
        longDescriptionEn: "Premium professional playing cards made from the finest cardboard, resistant to bending and tearing. Suitable for both professionals and amateurs. Classic elegant design with modern touches. Comes in a luxury gift box.",
        category: "ترفيه",
        categoryEn: "Entertainment",
        mainImage: "images/P1-1.png",
        images: [
            "images/P1-1.png",
            "images/P1-2.png",
            "images/P1-3.png",
          ],
        details: [
            "مكونة من 52 بطاقة + 2 بطاقة جوكر",
            "ورق فاخر مقاوم للماء",
            "تغليف جيد",
            "جودة عالية",
          ],
        detailsEn: [
            "52 cards + 2 joker cards",
            "Premium water-resistant paper",
            "Good packaging",
            "High quality",
          ],
      },
    ],
  },
  {
    id: 6,
    name: "dukhon.hajar",
    nameEn: "dukhon.hajar",
    emirate: "الشارقة",
    description: "روائح وعطور",
    descriptionEn: "Scents & Perfumes",
    longDescription:
      "دخون هاجر مشروع إماراتي متخصص في تقديم أجود أنواع البخور والعطور الشرقية الفاخرة. نوفر لعملائنا تشكيلة راقية من دهن العود، البخور المعمول، والعطور التقليدية التي تمزج بين الأصالة والجودة العالية",
    longDescriptionEn:
      "Dukhun Hajar is an Emirati project specializing in premium incense and oriental perfumes. We offer a luxurious selection of Oud oil, traditional Bakhoor, and classic fragrances that blend authenticity with high quality",
    image: "images/p6.jpg",
    phone: "",
    whatsapp: "+971569066061",
    email: "",
    sell_points: [{ type: "instagram", value: "dukhon.hajar" }],
    adra_license: "نعم",
    coverage: "جميع إمارات الدولة",
    badges: ["جديد"],
    badgesEn: ["New"],
    category: "روائح وعطور",
    categoryEn: "Scents & Perfumes",
    products: [
      {
        id: "6_p1",
        name: "دخون شوق",
        nameEn: "Shouq Incense",
        description: "دخون شوق - بخور عربي فاخر برائحة دافئة وجذابة.",
        descriptionEn:
          "Shouq Incense - A luxurious Arabic incense with a warm and captivating scent.",
        longDescription:
          "دخون شوق هو بخور تقليدي مميز يجمع بين العود والعنبر ليمنحك تجربة عطرية غنية. مصنوع بعناية من أجود المكونات الطبيعية، ليدوم طويلاً وينشر أجواء من الفخامة والدفء في المكان.",
        longDescriptionEn:
          "Shouq Incense is a distinctive traditional incense that combines oud and amber to give you a rich aromatic experience. Carefully crafted from the finest natural ingredients, it lasts long and spreads an atmosphere of luxury and warmth.",
        category: "بخور",
        categoryEn: "Incense",
        mainImage: "images/p6-1-1.jpg",
        images: ["images/p6-1-2.jpg"],
        details: [
          "بخور عربي فاخر",
          "مزيج العود والعنبر",
          "رائحة دافئة وجذابة",
          "يدوم طويلاً",
          "مكونات طبيعية 100%",
        ],
        detailsEn: [
          "Luxurious Arabic incense",
          "Blend of oud and amber",
          "Warm and captivating scent",
          "Long-lasting",
          "100% natural ingredients",
        ],
      },
      {
        id: "6_p2",
        name: "دخون ميره",
        nameEn: "Mairah Incense",
        description: "دخون ميره - بخور فاخر برائحة زكية ومميزة.",
        descriptionEn:
          "Mairah Incense - A luxurious incense with a pleasant and distinctive scent.",
        longDescription:
          "دخون ميره يجمع بين نفحات العود والورد ليمنحك تجربة عطرية راقية. يتميز بتركيز عالٍ يدوم طويلاً، ويضفي لمسة من الأناقة على المجالس.",
        longDescriptionEn:
          "Mairah Incense combines the scents of oud and rose to give you a refined aromatic experience. It features a high concentration that lasts long, adding a touch of elegance to gatherings.",
        category: "بخور",
        categoryEn: "Incense",
        mainImage: "images/p6-2-1.jpg",
        images: ["images/p6-2-2.jpg"],
        details: [
          "بخور فاخر",
          "مزيج العود والورد",
          "رائحة زكية",
          "تركيز عالٍ",
          "يدوم طويلاً",
        ],
        detailsEn: [
          "Luxurious incense",
          "Blend of oud and rose",
          "Pleasant scent",
          "High concentration",
          "Long-lasting",
        ],
      },
      {
        id: "6_p3",
        name: "دخون العنود",
        nameEn: "Al-Anoud Incense",
        description: "دخون العنود - بخور عربي تقليدي بنفحات شرقية.",
        descriptionEn:
          "Al-Anoud Incense - Traditional Arabic incense with oriental notes.",
        longDescription:
          "دخون العنود هو بخور عربي أصيل يعبق برائحة العود والعنبر والمسك. يمنح المكان جوًا من الدفء والروحانية، مثالي للمناسبات الخاصة والاسترخاء.",
        longDescriptionEn:
          "Al-Anoud Incense is an authentic Arabic incense fragrant with oud, amber, and musk. It gives the space an atmosphere of warmth and spirituality, perfect for special occasions and relaxation.",
        category: "بخور",
        categoryEn: "Incense",
        mainImage: "images/p6-3-1.jpg",
        images: ["images/p6-3-2.jpg"],
        details: [
          "بخور عربي أصيل",
          "مزيج العود والعنبر والمسك",
          "رائحة شرقية",
          "يدوم طويلاً",
          "مناسب للمجالس",
        ],
        detailsEn: [
          "Authentic Arabic incense",
          "Blend of oud, amber, and musk",
          "Oriental scent",
          "Long-lasting",
          "Suitable for gatherings",
        ],
      },
      {
        id: "6_p4",
        name: "دخون العين",
        nameEn: "Al-Ain Incense",
        description: "دخون العين - بخور مستوحى من تراث مدينة العين.",
        descriptionEn:
          "Al-Ain Incense - Incense inspired by the heritage of Al-Ain city.",
        longDescription:
          "دخون العين يجمع بين العود الفاخر ولمسات من الزعفران والعنبر ليقدم تجربة عطرية فريدة تعبق بالأصالة. مثالي لإضفاء أجواء تراثية عربية.",
        longDescriptionEn:
          "Al-Ain Incense combines luxurious oud with hints of saffron and amber to offer a unique aromatic experience redolent with authenticity. Ideal for creating a traditional Arabic atmosphere.",
        category: "بخور",
        categoryEn: "Incense",
        mainImage: "images/p6-4-1.jpg",
        images: ["images/p6-4-3.jpg", "images/p6-4-4.jpg"],
        details: [
          "بخور فاخر",
          "مزيج العود والزعفران والعنبر",
          "رائحة تراثية",
          "يدوم طويلاً",
          "إطلالة عربية أصيلة",
        ],
        detailsEn: [
          "Luxurious incense",
          "Blend of oud, saffron, and amber",
          "Heritage scent",
          "Long-lasting",
          "Authentic Arabic flair",
        ],
      },
      {
        id: "6_p5",
        name: "دخون سوسن",
        nameEn: "Sawsan Incense",
        description: "دخون سوسن - بخور ناعم برائحة الأزهار والعود.",
        descriptionEn:
          "Sawsan Incense - A soft incense with floral and oud scents.",
        longDescription:
          "دخون سوسن يمزج بين العود الدافئ وزهور الياسمين ليمنحك رائحة منعشة وجذابة. مناسب للاستخدام اليومي ولمن يحب العطور الخفيفة.",
        longDescriptionEn:
          "Sawsan Incense blends warm oud with jasmine flowers to give you a refreshing and attractive scent. Suitable for daily use and for those who prefer light perfumes.",
        category: "بخور",
        categoryEn: "Incense",
        mainImage: "images/p6-5-1.jpg",
        images: ["images/p6-5-2.jpg"],
        details: [
          "بخور ناعم",
          "مزيج العود والياسمين",
          "رائحة منعشة",
          "مناسب للاستخدام اليومي",
          "عطر خفيف وجذاب",
        ],
        detailsEn: [
          "Soft incense",
          "Blend of oud and jasmine",
          "Refreshing scent",
          "Suitable for daily use",
          "Light and attractive fragrance",
        ],
      },
      {
        id: "6_p6",
        name: "دخون مارية",
        nameEn: "Mariyah Incense",
        description: "دخون مارية - بخور فاخر بنفحات العود الفاخر.",
        descriptionEn:
          "Mariyah Incense - A luxurious incense with premium oud notes.",
        longDescription:
          "دخون مارية هو بخور مميز يجمع بين العود الهندي والعنبر الفاخر ليمنحك تجربة عطرية غامرة. يدوم طويلاً وينشر الفخامة في المكان.",
        longDescriptionEn:
          "Mariyah Incense is a distinctive incense combining Indian oud and luxurious amber to give you an immersive aromatic experience. It lasts long and spreads luxury in the space.",
        category: "بخور",
        categoryEn: "Incense",
        mainImage: "images/p6-6-1.jpg",
        images: ["images/p6-6-2.jpg"],
        details: [
          "بخور فاخر",
          "عود هندي وعنبر",
          "رائحة غامرة",
          "يدوم طويلاً",
          "فخامة عالية",
        ],
        detailsEn: [
          "Luxurious incense",
          "Indian oud and amber",
          "Immersive scent",
          "Long-lasting",
          "High luxury",
        ],
      },
      {
        id: "6_p7",
        name: "عود شمس المعطر",
        nameEn: "Shams Al-Mu'attar Oud",
        description: "عود شمس المعطر - عود طبيعي فاخر برائحة خشبية دافئة.",
        descriptionEn:
          "Shams Al-Mu'attar Oud - A luxurious natural oud with a warm woody scent.",
        longDescription:
          "عود شمس المعطر هو عود طبيعي ممتاز يتميز برائحة خشبية عميقة مع لمسات حلوة. يحضر بعناية فائقة ليمنحك تجربة عطرية أصيلة تعبق بالفخامة.",
        longDescriptionEn:
          "Shams Al-Mu'attar Oud is an excellent natural oud characterized by a deep woody scent with sweet notes. Carefully prepared to give you an authentic aromatic experience that exudes luxury.",
        category: "عود",
        categoryEn: "Oud",
        mainImage: "images/p6-7-1.jpg",
        images: ["images/p6-7-2.jpg"],
        details: [
          "عود طبيعي فاخر",
          "رائحة خشبية دافئة",
          "يدوم طويلاً",
          "مناسب للمناسبات",
          "فخامة وأصالة",
        ],
        detailsEn: [
          "Luxurious natural oud",
          "Warm woody scent",
          "Long-lasting",
          "Perfect for occasions",
          "Luxury and authenticity",
        ],
      },
      {
        id: "6_p8",
        name: "عود الشيخ محمد",
        nameEn: "Sheikh Mohammed Oud",
        description: "عود الشيخ محمد - عود فاخر برائحة خشبية كلاسيكية.",
        descriptionEn:
          "Sheikh Mohammed Oud - A luxurious oud with a classic woody scent.",
        longDescription:
          "عود الشيخ محمد هو عود طبيعي من أجود الأنواع، يتميز برائحة خشبية نقية وقوية. يعبق المكان بأجواء أصيلة تليق بالمجالس الراقية.",
        longDescriptionEn:
          "Sheikh Mohammed Oud is a natural oud of the finest quality, characterized by a pure and strong woody scent. It fills the space with an authentic atmosphere befitting elegant gatherings.",
        category: "عود",
        categoryEn: "Oud",
        mainImage: "images/p6-8-1.jpg",
        images: ["images/p6-8-2.jpg"],
        details: [
          "عود طبيعي فاخر",
          "رائحة خشبية نقية",
          "قوي ويدوم طويلاً",
          "مناسب للمجالس الراقية",
          "أصالة عربية",
        ],
        detailsEn: [
          "Luxurious natural oud",
          "Pure woody scent",
          "Strong and long-lasting",
          "Suitable for elegant gatherings",
          "Arabic authenticity",
        ],
      },
      {
        id: "6_p9",
        name: "عود سيف الامارات",
        nameEn: "Saif Al Emarat Oud",
        description: "عود سيف الامارات - عود إماراتي فاخر برائحة مميزة.",
        descriptionEn:
          "Saif Al Emarat Oud - A luxurious Emirati oud with a distinctive scent.",
        longDescription:
          "عود سيف الامارات هو عود طبيعي يجمع بين الفخامة والقوة، برائحة خشبية غنية تعكس روح الأصالة الإماراتية. مثالي للمناسبات الوطنية والخاصة.",
        longDescriptionEn:
          "Saif Al Emarat Oud is a natural oud combining luxury and strength, with a rich woody scent reflecting the spirit of Emirati authenticity. Ideal for national and special occasions.",
        category: "عود",
        categoryEn: "Oud",
        mainImage: "images/p6.jpg",
        images: ["images/p6.jpg"],
        details: [
          "عود إماراتي فاخر",
          "رائحة خشبية غنية",
          "قوي وفخم",
          "يدوم طويلاً",
          "روح الأصالة",
        ],
        detailsEn: [
          "Luxurious Emirati oud",
          "Rich woody scent",
          "Strong and luxurious",
          "Long-lasting",
          "Spirit of authenticity",
        ],
      },
      {
        id: "6_p10",
        name: "عود الشيخ منصور",
        nameEn: "Sheikh Mansour Oud",
        description: "عود الشيخ منصور - عود فاخر برائحة خشبية ناعمة.",
        descriptionEn:
          "Sheikh Mansour Oud - A luxurious oud with a soft woody scent.",
        longDescription:
          "عود الشيخ منصور يتميز برائحة خشبية ناعمة مع لمسات من العنبر، ليمنحك تجربة عطرية هادئة ومريحة. مناسب للاسترخاء والتأمل.",
        longDescriptionEn:
          "Sheikh Mansour Oud is characterized by a soft woody scent with hints of amber, giving you a calm and relaxing aromatic experience. Suitable for relaxation and meditation.",
        category: "عود",
        categoryEn: "Oud",
        mainImage: "images/p6-9-1.jpg",
        images: ["images/p6-9-2.jpg"],
        details: [
          "عود فاخر",
          "رائحة خشبية ناعمة",
          "لمسات عنبر",
          "يدوم طويلاً",
          "مناسب للاسترخاء",
        ],
        detailsEn: [
          "Luxurious oud",
          "Soft woody scent",
          "Hints of amber",
          "Long-lasting",
          "Suitable for relaxation",
        ],
      },
      {
        id: "6_p11",
        name: "لبان الصفوة المعطر",
        nameEn: "Al-Safwah Perfumed Frankincense",
        description:
          "لبان الصفوة المعطر - لبان عماني فاخر معطر بروائح العود.",
        descriptionEn:
          "Al-Safwah Perfumed Frankincense - Luxurious Omani frankincense perfumed with oud scents.",
        longDescription:
          "لبان الصفوة المعطر هو أجود أنواع اللبان العماني المضاف إليه عطور العود الفاخرة، ليمنحك تجربة تبخير فريدة. ينعش المكان ويهدئ النفس.",
        longDescriptionEn:
          "Al-Safwah Perfumed Frankincense is the finest Omani frankincense with added luxurious oud perfumes, giving you a unique fumigation experience. It refreshes the space and calms the soul.",
        category: "لبان",
        categoryEn: "Frankincense",
        mainImage: "images/p6-910-1.jpg",
        images: ["images/p6-910-1.jpg"],
        details: [
          "لبان عماني فاخر",
          "معطر بروائح العود",
          "ينعش المكان",
          "يهدئ النفس",
          "جودة عالية",
        ],
        detailsEn: [
          "Luxurious Omani frankincense",
          "Perfumed with oud scents",
          "Refreshes the space",
          "Calms the soul",
          "High quality",
        ],
      },
      {
        id: "6_p12",
        name: "لبان بالعود المعطر",
        nameEn: "Perfumed Frankincense with Oud",
        description: "لبان بالعود المعطر - لبان طبيعي ممزوج بدهن العود.",
        descriptionEn:
          "Perfumed Frankincense with Oud - Natural frankincense blended with oud oil.",
        longDescription:
          "لبان بالعود المعطر يجمع بين نقاء اللبان العماني ودهن العود الفاخر، ليمنحك رائحة مميزة تجمع بين العطور الشرقية الأصيلة. مثالي للتبخير اليومي.",
        longDescriptionEn:
          "Perfumed Frankincense with Oud combines the purity of Omani frankincense with luxurious oud oil, giving you a distinctive scent that blends authentic oriental perfumes. Ideal for daily fumigation.",
        category: "لبان",
        categoryEn: "Frankincense",
        mainImage: "images/p6-910-1.jpg",
        images: ["images/p6-910-1.jpg"],
        details: [
          "لبان عماني طبيعي",
          "ممزوج بدهن العود",
          "رائحة شرقية أصيلة",
          "مناسب للاستخدام اليومي",
          "ينعش الأجواء",
        ],
        detailsEn: [
          "Natural Omani frankincense",
          "Blended with oud oil",
          "Authentic oriental scent",
          "Suitable for daily use",
          "Refreshes the atmosphere",
        ],
      },
    ],
    deals: [
      {
        id: "deal1",
        title: "باقة المحبة المصغرة",
        titleEn: "Mini love bouquet",
        description: " للهدايا وللي يحبون ينوعون",
        descriptionEn: "For gifts and for those who like variety",
        image: "images/p6-d-1.jpg",
        images: ["images/p6-d-1.jpg", "images/p6-d-2.jpg"],
        expiry: "",
        badge: "باقة",
        badgeEn: "Package",
      },
    ],
  },
  {
    id: 8,
    name: "قلو تان",
    nameEn: "Glow Tan",
    emirate: "أبوظبي",
    description: "عناية",
    descriptionEn: "Care",
    longDescription: "نقدم خدمات التان الاحترافية للحصول على بشرة برونزية طبيعية وآمنة بدون التعرض للشمس، باستخدام منتجات عالية الجودة تناسب جميع ألوان البشرة مع نتائج تدوم لفترة طويلة.",
    longDescriptionEn: "We provide professional tanning services for a natural sun-kissed glow without sun exposure, using high-quality products suitable for all skin tones with long-lasting results.",
    image: "images/p8.jpeg",
    phone: "",
    whatsapp: "",
    email: "",
    sell_points:[
        {type: "instagram" , value: "glowtan.ae"}
    ],
    adra_license: "نعم",
    coverage: "جميع إمارات الدولة",
    badges: ["جديد"],
    badgesEn: ["New"],
    category: "عناية",
    categoryEn: "Care",
    products:[
        {
            id: "1_p8",
            name: "قلو تان",
            nameEn: "Glow Tan",
            description: "تان طبيعي بدون شمس",
            descriptionEn: "Sunless tanning",
            longDescription: "جلسة تان احترافية تمنحك لون برونزي متناسق وطبيعي باستخدام منتجات آمنة تدوم نتائجها لعدة أيام، مثالية للمناسبات والإطلالات اليومية.",
            longDescriptionEn: "A professional tanning session that delivers a natural bronzed glow using safe products with long-lasting results, perfect for events and daily looks.",
            category: "عناية",
            categoryEn: "Care",
            mainImage: "images/p8-1.jpeg",
            images: [
                "images/p8-1.jpeg"
            ],
            details: [
                "نتيجة طبيعية",
                "مناسب لجميع البشرة",
                "يدوم 5-10 أيام"
            ],
            detailsEn: [
                "Sunless",
                "Natural result",
                "All skin types",
                "Lasts 5–10 days"
            ]
        }
    ]
 },
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = familiesData;
}