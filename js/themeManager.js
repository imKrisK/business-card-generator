// themeManager.js

const themeManager = (() => {
    const themes = {
        default: 'assets/themes/default.css',
        dark: 'assets/themes/dark.css',
        technical: 'assets/themes/technical.css'
    };

    const loadTheme = (themeName) => {
        const linkElement = document.getElementById('theme-link');
        linkElement.href = themes[themeName] || themes.default;
    };

    const initThemeSwitcher = () => {
        const themeSwitcher = document.getElementById('theme-switcher');
        themeSwitcher.addEventListener('change', (event) => {
            loadTheme(event.target.value);
        });
    };

    return {
        initThemeSwitcher,
        loadTheme
    };
})();

document.addEventListener('DOMContentLoaded', () => {
    themeManager.initThemeSwitcher();
});