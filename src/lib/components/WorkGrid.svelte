<script lang="ts">
	import type { WorkContent } from '$lib/types';
	import { fmt } from '$lib/format';
	import { rise } from '$lib/actions/rise';
	import WorkCard from './WorkCard.svelte';

	interface Props {
		data: WorkContent;
	}

	const { data }: Props = $props();
</script>

<section class="wrap" id="work">
	<div class="sec-head" use:rise>
		<p class="eyebrow">{data.eyebrow}</p>
		<h2>{@html fmt(data.title)}</h2>
		<p class="sub">{data.lede}</p>
	</div>
	<div class="work-grid">
		{#each data.items as item}
			<WorkCard {item} />
		{/each}
	</div>
</section>
