/* Article page language switcher */
function setArticleLang(lang) {
    document.querySelectorAll('.lang-content').forEach(el => {
        el.style.display = el.dataset.lang === lang ? 'block' : 'none';
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    document.documentElement.lang = lang === 'ar' ? 'ar' : lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    // Update nav text
    const backNav = document.getElementById('nav-back');
    const backLink = document.getElementById('back-link-text');
    const labels = { tr: '← Ana Sayfa', en: '← Home', es: '← Inicio', ar: '← الرئيسية' };
    const backLabels = { tr: '← Geri Dön', en: '← Go Back', es: '← Volver', ar: '← العودة' };
    if (backNav) backNav.textContent = labels[lang] || labels.tr;
    if (backLink) backLink.textContent = backLabels[lang] || backLabels.tr;
    localStorage.setItem('babader-lang', lang);
}
document.addEventListener('DOMContentLoaded', function() {
    var saved = localStorage.getItem('babader-lang') || 'tr';
    setArticleLang(saved);
});
