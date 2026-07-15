<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { content, initLang } from '$lib/i18n.svelte';
	import LensFilter from '$lib/components/LensFilter.svelte';
	import Aurora from '$lib/components/Aurora.svelte';
	import Nav from '$lib/components/Nav.svelte';

	let { children } = $props();

	const t = $derived(content());

	$effect(() => {
		document.documentElement.lang = t.html.lang;
	});

	// Language detection must run after hydration: {@html} blocks are not
	// re-rendered during hydration, so switching the language any earlier
	// leaves the prerendered English inside them.
	onMount(() => {
		initLang();
	});

	// Liquid glass: the specular highlight (.glass::after) follows the
	// pointer via --gx/--gy. Skipped on touch devices and reduced motion.
	onMount(() => {
		if (
			window.matchMedia('(hover: none)').matches ||
			window.matchMedia('(prefers-reduced-motion: reduce)').matches
		) {
			return;
		}
		let raf = 0;
		const onMove = (e: PointerEvent) => {
			if (raf) return;
			raf = requestAnimationFrame(() => {
				raf = 0;
				for (const el of document.querySelectorAll<HTMLElement>('.glass')) {
					const r = el.getBoundingClientRect();
					if (r.bottom < -120 || r.top > window.innerHeight + 120) continue;
					el.style.setProperty('--gx', `${e.clientX - r.left}px`);
					el.style.setProperty('--gy', `${e.clientY - r.top}px`);
				}
			});
		};
		window.addEventListener('pointermove', onMove, { passive: true });
		return () => {
			window.removeEventListener('pointermove', onMove);
			if (raf) cancelAnimationFrame(raf);
		};
	});
</script>

<svelte:head>
	<title>{t.html.title}</title>
	<meta name="description" content={t.html.description} />
</svelte:head>

<LensFilter />
<Aurora />
<Nav />
<main>
	{@render children()}
</main>
