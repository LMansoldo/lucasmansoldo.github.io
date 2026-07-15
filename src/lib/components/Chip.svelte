<script lang="ts">
	import logosData from '$lib/content/logos.json';
	import type { Logos } from '$lib/types';

	const LOGOS = logosData as Logos;

	interface Props {
		name: string;
	}

	const { name }: Props = $props();

	const icon = $derived(LOGOS[name]);
</script>

{#if icon}
	<span class="chip" style="--brand:{icon.h}">
		<svg viewBox="0 0 24 24" aria-hidden="true"><path d={icon.p} /></svg>
		{name}
	</span>
{:else}
	<span class="chip">
		<span class="dot" aria-hidden="true"></span>
		{name}
	</span>
{/if}
