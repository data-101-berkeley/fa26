(function () {
	'use strict';

	// Points the "Jump to Current Week" button at whichever week of the
	// schedule contains today.
	//
	// This has to happen in the browser rather than at build time: the site is
	// only rebuilt when someone pushes, so a week number baked in by Liquid
	// would be stale for most of the semester. The button's href in the markup
	// is the no-JS fallback.
	//
	// Each week heading carries its Sunday-Saturday span as data attributes, so
	// every date falls inside exactly one week and there are no gaps to handle.

	function parseDay(s) {
		const parts = String(s).split('-').map(Number);
		if (parts.length !== 3 || parts.some(isNaN)) return null;
		// Compare whole calendar days in UTC. Using timestamps would let a
		// viewer's timezone shift the answer by a day near midnight.
		return Date.UTC(parts[0], parts[1] - 1, parts[2]);
	}

	function findCurrentWeek() {
		const weeks = document.querySelectorAll('.week-label[data-week-start][data-week-end]');
		if (!weeks.length) return null;

		const now = new Date();
		const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());

		let nextUp = null;
		let last = null;

		for (const el of weeks) {
			const start = parseDay(el.getAttribute('data-week-start'));
			const end = parseDay(el.getAttribute('data-week-end'));
			if (start === null || end === null) continue;

			if (today >= start && today <= end) return el;
			if (start > today && (nextUp === null || start < nextUp.start)) {
				nextUp = { start: start, el: el };
			}
			last = el;
		}

		// Before the semester starts, jump to the first week still to come.
		// After it ends, stay on the final week.
		return nextUp ? nextUp.el : last;
	}

	function wire() {
		const btn = document.getElementById('jump-to-current-week');
		if (!btn) return;

		const target = findCurrentWeek();
		if (target && target.id) btn.setAttribute('href', '#' + target.id);
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', wire);
	} else {
		wire();
	}

})();
