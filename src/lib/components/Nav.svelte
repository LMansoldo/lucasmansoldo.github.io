<script lang="ts">
	import { content, toggleLang } from '$lib/i18n.svelte';
	import { onMount } from 'svelte';

	const t = $derived(content());

	const links = $derived([
		{ id: 'work', href: '#work', label: t.nav.work, icon: 'M20 7h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 4h4v3h-4V4zm10 16H4V9h16v11zm-8-1h2v-4h4v-2h-4V9h-2v4H8v2h4v4z' },
		{ id: 'experience', href: '#experience', label: t.nav.experience, icon: 'M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z' },
		{ id: 'stack', href: '#stack', label: t.nav.stack, icon: 'M12 2l-8 4.5v3L12 13l8-4.5v-3L12 2zm0 2.25L17.5 7.5 12 10.75 6.5 7.5 12 4.25zM4 15.5l8 4.5 8-4.5v2L12 22l-8-4.5v-2z' },
		{ id: 'contact', href: '#contact', label: t.nav.contact, icon: 'M2.01 21L23 12 2.01 3 2 10l15 2-15 2z' }
	]);

	let activeId = $state('');

	onMount(() => {
		const sections = links
			.map(l => document.getElementById(l.id))
			.filter(Boolean) as HTMLElement[];

		if (!sections.length) return;

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						activeId = entry.target.id;
					}
				}
			},
			{ rootMargin: '-50% 0px -50% 0px', threshold: 0 }
		);

		sections.forEach(s => observer.observe(s));
		return () => observer.disconnect();
	});
</script>

<header>
	<div class="nav glass">
		<span class="mark">LUCAS MANSOLDO <span>/ SWE</span></span>
		<div class="dock">
			{#each links as link (link.id)}
				<a
					href={link.href}
					aria-label={link.label}
					class:active={activeId === link.id}
				>
					<svg viewBox="0 0 24 24" aria-hidden="true"><path d={link.icon} /></svg>
					<span class="tooltip">{link.label}</span>
					<span class="dot"></span>
				</a>
			{/each}
		</div>
		<button class="lang" type="button" aria-label={t.ui.langToggleAria} onclick={toggleLang}>
			{t.ui.langToggle}
		</button>
	</div>
</header>

<div class="mobile-dock glass">
	{#each links as link (link.id)}
		<a
			href={link.href}
			aria-label={link.label}
			class:active={activeId === link.id}
		>
			<svg viewBox="0 0 24 24" aria-hidden="true"><path d={link.icon} /></svg>
			<span class="dot"></span>
		</a>
	{/each}
</div>
