import * as d3 from 'd3';
import { gsap } from 'gsap';

export function initCircularNav() {
	// ✅ Récupère dynamiquement les nav-items du DOM
	const navItems = document.querySelectorAll('.nav-item');
	const menu = Array.from(navItems).map(item => {
		const href = item.getAttribute('href');
		const spanText = item.querySelector('span')?.textContent || '';
		const pageName = spanText.replace('.', '').toLowerCase(); // .music -> music
		const firstLetter = pageName.charAt(0).toUpperCase(); // M, P, A, S
		
		return {
			name: firstLetter,
			url: href,
			page: pageName,
			navItem: item
		};
	});

	const size = 300;
	const padding = 20; // Marge autour du cercle
	const radius = (size / 2) - padding;

	const container = document.createElement('div');
	container.id = 'circular-nav';
	container.className = 'circular-nav';
	document.body.appendChild(container);

	const svg = d3.select('#circular-nav')
		.append('svg')
		.attr('viewBox', `0 0 ${size} ${size}`)
		.append('g')
		.attr('transform', `translate(${size / 2}, ${size / 2})`);
	
	const colors = d3.scaleOrdinal()
		.domain(menu.map(d => d.name))
		.range(['#ffffff', '#555', '#555', '#555']);
	
	const pie = d3.pie()
		.value(1)
		.sort(null);
	const arc = d3.arc()
		.innerRadius(0)
		.outerRadius(radius);
	const labelArc = d3.arc()
		.innerRadius(radius * 0.6)
		.outerRadius(radius * 0.6);
	
	const slices = svg.selectAll('.slice')
		.data(pie(menu))
		.enter()
		.append('g')
		.attr('class', 'slice')
		.on('click', (e, d) => {
			window.location.href = d.data.url;
		})
		.on('mouseenter', (e, d) => {
			// Active le hover du nav-item correspondant
			const span = d.data.navItem.querySelector('span');
			if (span) span.classList.add('hover-from-circular');
		})
		.on('mouseleave', (e, d) => {
			// Retire le hover du nav-item
			const span = d.data.navItem.querySelector('span');
			if (span) span.classList.remove('hover-from-circular');
		});
	
	slices.append('path')
		.attr('d', arc)
		.attr('fill', 'transparent')
		.attr('stroke', 'var(--text-color)')
		.attr('stroke-width', 3);
	
	slices.append('text')
		.attr('class', 'label')
		.attr('transform', d => `translate(${labelArc.centroid(d)})`)
		.attr('fill', 'var(--text-color)')
		.text(d => d.data.name)
	
	let isOpen = false;

	function show() {
		if (window.innerWidth <= 750) return;
		container.style.display = 'block';
		gsap.fromTo(container, 
			{ opacity: 0, x: 100, scale: 0.8 },
			{ opacity: 1, x: 0, scale: 1, duration: 0.5, ease:'back.out(1.7)'}
		);
		isOpen = true;
	}
	function hide (){
		gsap.to(container, {
			opacity: 0,
			x: 100,
			scale: 0.8,
			duration: 0.8,
			ease: 'power2.in',
			onComplete : () => {
				container.style.display = "none";
			}
		});
		isOpen = false;
	}
	window.addEventListener('toggle-circular-nav', () => {
		if (isOpen) hide();
		else show();
	});
	
	// ✅ Ferme le diagramme quand le header se ferme
	window.addEventListener('header-closing', () => {
		if (isOpen) hide();
	});

	return {show, hide, isOpen: () => isOpen};
}