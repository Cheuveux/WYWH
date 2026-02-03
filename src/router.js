export class Router {
	constructor() {
		this.routes = {};
		this.currentPage = null;
		this.base = import.meta.env.BASE_URL || '/'; // ✅ Récupère le base path de Vite
	}

	register(path, loadFunction) {
		this.routes[path] = loadFunction;
	}

	// ✅ NOUVELLE MÉTHODE : Normalise le path en enlevant le base
	normalizePath(fullPath) {
		// Enlève le base path (ex: /WYWH/ → /)
		if (this.base !== '/' && fullPath.startsWith(this.base)) {
			return fullPath.slice(this.base.length - 1) || '/';
		}
		return fullPath || '/';
	}

	async navigate(path) {
		// ✅ Normalise le path
		const normalizedPath = this.normalizePath(path);
		console.log('🔵 Navigation:', path, '→', normalizedPath);

		let route = this.routes[normalizedPath];
		let params = null;

		if (!route) {
			for (let routePath in this.routes) {
				const pattern = routePath.replace(/:\w+/g, '([^/]+)');
				const regex = new RegExp(`^${pattern}$`);
				const match = normalizedPath.match(regex);

				if (match) {
					route = this.routes[routePath];
					params = match.slice(1);
					break;
				}
			}
		}

		if (!route) {
			console.error('Route non trouvée:', normalizedPath);
			return;
		}

		window.dispatchEvent(new CustomEvent('close-navigation'));
		this.cleanupWidgets();
		await new Promise(resolve => setTimeout(resolve, 300));

		const content = document.getElementById('page-content');
		if (content) {
			content.style.opacity = '0';
			await new Promise(resolve => setTimeout(resolve, 200));
			content.innerHTML = '';

			await route(content, normalizedPath, params);

			content.style.opacity = '1';
		}

		// ✅ Utilise le path COMPLET pour l'URL
		if (window.location.pathname !== path) {
			window.history.pushState(null, '', path);
		}

		this.updatePageTitle(normalizedPath);
	}

	cleanupWidgets() {
		const weatherWidget = document.querySelector('.weather-widget');
		if (weatherWidget) {
			weatherWidget.remove();
		}

		const circularNav = document.querySelector('.circular-nav');
		if (circularNav) {
			circularNav.remove();
		}

		window.dispatchEvent(new CustomEvent('close-weather'));
		window.dispatchEvent(new CustomEvent('header-closing'));
	}
	
	updatePageTitle(path) {
		const titleElement = document.getElementById('page-title');
		if (!titleElement) 
			return ;

		const titles = {
			'/':'.world',
			'/music':'.music',
			'/photo':'.photo',
			'/artists':'.artists',
		};

		titleElement.textContent = titles[path] || '.world';
	}

	init() {
		console.log('🔵 Router init - Base:', this.base);
		console.log('🔵 Current pathname:', window.location.pathname);

		document.addEventListener('click', (e) => {
			const link = e.target.closest('a[data-link]');

			if (link)
			{
				e.preventDefault();
				let href = link.getAttribute('href');
				
				// ✅ Ajoute le base si nécessaire
				if (this.base !== '/' && !href.startsWith(this.base)) {
					href = this.base.slice(0, -1) + href;
				}
				
				console.log('🔗 Clic lien:', href);
				this.navigate(href);
			}
		});

		window.addEventListener('popstate', () => {
			console.log('🔙 Popstate:', window.location.pathname);
			this.navigate(window.location.pathname);
		});

		this.navigate(window.location.pathname);
	}
}

export const router = new Router();