import type { Action } from 'svelte/action';

let io: IntersectionObserver | null = null;

function getIO(): IntersectionObserver {
	if (!io) {
		io = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry, i) => {
					if (!entry.isIntersecting) return;
					setTimeout(() => entry.target.classList.add('in'), i * 80);
					io!.unobserve(entry.target);
				});
			},
			{ rootMargin: '0px 0px -12% 0px' }
		);
	}
	return io;
}

export const rise: Action<HTMLElement> = (node) => {
	if (typeof IntersectionObserver === 'undefined') return;
	node.classList.add('rise');
	getIO().observe(node);

	return {
		destroy() {
			getIO().unobserve(node);
		}
	};
};
