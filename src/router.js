export class Router {
	constructor() {
		this.routes = {};
		this.currentPage = null;
	}

	register(path, loadFunction) {
		this.routes[path] = loadFunction;
	}

	async navigate(path) {
		let route = this.routes[path];
		let params = null; // ✅ Pour stocker les paramètres dynamiques

		if (!route) {
			// ✅ Cherche une route avec pattern (ex: /artists/:id)
			for (let routePath in this.routes) {
				const pattern = routePath.replace(/:\w+/g, '([^/]+)');
				const regex = new RegExp(`^${pattern}$`);
				const match = path.match(regex);

				if (match) {
					route = this.routes[routePath];
					params = match.slice(1); // ✅ Récupère les paramètres capturés
					break;
				}
			}
		}

		if (!route) {
			console.error('Route non trouvée', path);
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

			// ✅ Passe le path complet à la fonction render
			await route(content, path, params);

			content.style.opacity = '1';
		}

		if (window.location.pathname !== path) {
			window.history.pushState(null, '', path);
		}

		this.updatePageTitle(path);
	}

	// Nettoie les widgets
	cleanupWidgets() {
		// Ferme la météo
		const weatherWidget = document.querySelector('.weather-widget');
		if (weatherWidget) {
			weatherWidget.remove();
		}

		// Ferme le circular nav
		const circularNav = document.querySelector('.circular-nav');
		if (circularNav) {
			circularNav.remove();
		}

		// Dispatch les événements de fermeture au cas où
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

		document.addEventListener('click', (e) => {
			const link = e.target.closest('a[data-link]');

			if (link)
			{
				e.preventDefault();
				const href = link.getAttribute('href');
				this.navigate(href);
			}
		});

		window.addEventListener('popstate', () => {
			this.navigate(window.location.pathname);
		});

		this.navigate(window.location.pathname);
	}
}

export const router = new Router();