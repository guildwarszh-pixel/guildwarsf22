const translations = {
    fr: {
        home: "Accueil",
        products: "Produits",
        contact: "Contact",
        welcome: "Bienvenue chez Rabat Prints",
        "hero-text": "Découvrez nos designs uniques pour t-shirts, hoodies et pantalons.",
        "latest-designs": "Derniers Designs",
        tshirt: "T-shirt",
        hoodie: "Hoodie",
        pants: "Pantalon",
        order: "Commander",
        name: "Nom",
        phone: "Téléphone",
        address: "Adresse",
        "product-select": "Produit",
        "size-select": "Taille",
        "color-select": "Couleur",
        submit: "Commander",
        footer: "© 2023 Rabat Prints. Tous droits réservés."
    },
    ar: {
        home: "الرئيسية",
        products: "المنتجات",
        contact: "اتصل بنا",
        welcome: "مرحبا بكم في طباعة الرباط",
        "hero-text": "اكتشف تصاميمنا الفريدة للقمصان، الهوديز والسراويل.",
        "latest-designs": "أحدث التصاميم",
        tshirt: "قميص",
        hoodie: "هودي",
        pants: "سروال",
        order: "اطلب",
        name: "الاسم",
        phone: "الهاتف",
        address: "العنوان",
        "product-select": "المنتج",
        "size-select": "الحجم",
        "color-select": "اللون",
        submit: "اطلب",
        footer: "© 2023 طباعة الرباط. جميع الحقوق محفوظة."
    }
};

function switchLanguage(lang) {
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
}

document.getElementById('lang-fr').addEventListener('click', () => switchLanguage('fr'));
document.getElementById('lang-ar').addEventListener('click', () => switchLanguage('ar'));

document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const lang = document.documentElement.lang;
    const message = lang === 'ar' ? 'شكرا لك! سيتم الاتصال بك قريبا.' : 'Merci ! Nous vous contacterons bientôt.';
    alert(message);
    // Here you can add code to send the form data to a server or WhatsApp
});
