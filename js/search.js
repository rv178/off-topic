(function() {
	const input = document.getElementById('search-input');
	const cards = document.querySelectorAll('.member-card');

	const members = Array.from(cards).map(function(card) {
		return {
			element: card,
			name: card.dataset.name || '',
			bio: card.dataset.bio || ''
		};
	});

	const fuse = new Fuse(members, {
		keys: ['name', 'bio'],
		threshold: 0.1,
		ignoreLocation: true
	});

	input.addEventListener('input', function() {
		const query = this.value.trim();

		if (!query) {
			cards.forEach(function(card) {
				card.style.display = '';
			});
			return;
		}

		const results = fuse.search(query);
		const matchedElements = new Set(results.map(function(r) {
			return r.item.element;
		}));

		cards.forEach(function(card) {
			card.style.display = matchedElements.has(card) ? '' : 'none';
		});
	});
})();
