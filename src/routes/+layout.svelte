<script lang="ts">
	import '../app.css';
	import { content, initLang } from '$lib/i18n.svelte';
	import LensFilter from '$lib/components/LensFilter.svelte';
	import Aurora from '$lib/components/Aurora.svelte';
	import Nav from '$lib/components/Nav.svelte';

	let { children } = $props();

	initLang();

	const t = $derived(content());

	$effect(() => {
		document.documentElement.lang = t.html.lang;
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
