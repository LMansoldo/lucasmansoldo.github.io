<script lang="ts">
	import { content, toggleLang } from '$lib/i18n.svelte';

	const t = $derived(content());
</script>

<header>
	<div class="nav glass">
		<span class="mark">LUCAS MANSOLDO <span>/ SWE</span></span>
		<nav>
			<a href="#work">{t.nav.work}</a>
			<a href="#experience">{t.nav.experience}</a>
			<a href="#stack">{t.nav.stack}</a>
			<a href="#contact">{t.nav.contact}</a>
		</nav>
		<button class="lang" type="button" aria-label={t.ui.langToggleAria} onclick={toggleLang}>
			{t.ui.langToggle}
		</button>
	</div>
</header>
