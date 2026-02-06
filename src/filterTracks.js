import { gsap } from "gsap";

// Stockage des titres pour pouvoir ensuite les trier

export function sortTracks(tracks, sortType) {
	if (!Array.isArray(tracks))
			return [];
		const sorted = [...tracks];

		if (sortType === 'alphabetical') {
			sorted.sort((a, b) => a.title.localeCompare(b.title));
		}else if (sortType == 'date') {
			sorted.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
		}else if (sortType === 'project') {
			sorted.sort((a, b) => a.project.localeCompare(b.project));
		} else if (sortType === 'default') {
			sorted.sort((a,b) => a.order - b.order);
		}
		return (sorted);
}

export function initFilterAccordion(containerID, onSortChange) {
    const container = document.getElementById(containerID);
    if (!container)
        return;
    const filterHTML =  `  
        <div class="filter_accordeon" id="filter_accordeon">
            <img class="filter_toggle" id="filter_toggle" src="https://pub-e38587f10dd74235986dd93b16c10e06.r2.dev/icons/radio-icons/filter-circle-svgrepo-com.svg"/>
            <div class="filter_options" style="display: none; overflow: hidden;">
                <button data-sort="default">Default</button>
                <button data-sort="alphabetical">Title (A - Z)</button>
                <button data-sort="date">When Added</button>
                <button data-sort="project">Project</button>
            </div>
        </div>	
    `;

    container.insertAdjacentHTML('beforebegin', filterHTML);

    const filterToggle = document.querySelector('.filter_toggle');
    const filterOptions = document.querySelector('.filter_options');

    if (filterToggle && filterOptions) {
        let isOpen = false;
        filterToggle.addEventListener('click', () => {
            isOpen = !isOpen;
            if (isOpen) {
                filterOptions.style.display = 'flex';
                gsap.fromTo(
                    filterOptions,
                    { height: 0, opacity: 0 },
                    { height: "auto", opacity: 1, duration: 0.35, ease: "power2.out" }
                );
            } else {
                gsap.to(filterOptions, {
                    height: 0,
                    opacity: 0,
                    duration: 0.25,
                    ease: "power2.in",
                    onComplete: () => { filterOptions.style.display = 'none'; }
                });
            }
        });

        filterOptions.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                isOpen = false;
                gsap.to(filterOptions, {
                    height: 0,
                    opacity: 0,
                    duration: 0.25,
                    ease: "power2.in",
                    onComplete: () => { filterOptions.style.display = 'none'; }
                });
                const sortType = e.target.dataset.sort;
                if (onSortChange) onSortChange(sortType);
            }
        });
    }
}