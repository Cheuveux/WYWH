export function initThemeSwitcher() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute("data-theme", savedTheme);

    const sunIcon = 'https://pub-e38587f10dd74235986dd93b16c10e06.r2.dev/icons/menu-icons/light-light-mode-sun-svgrepo-com.svg';
    const moonIcon = 'https://pub-e38587f10dd74235986dd93b16c10e06.r2.dev/icons/menu-icons/night-night-mode-moon-svgrepo-com.svg';

    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.setAttribute('aria-label', 'Toggle theme');
    
    themeToggle.innerHTML = `<img src="${savedTheme === 'dark' ? sunIcon : moonIcon}" alt="Theme icon" />`;

    document.body.appendChild(themeToggle);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        themeToggle.innerHTML = `<img src="${newTheme === 'dark' ? sunIcon : moonIcon}" alt="Theme icon" />`;

        console.log('🎨 Theme changé:', newTheme);
    });

    console.log('✅ Theme switcher initialisé:', savedTheme);
}