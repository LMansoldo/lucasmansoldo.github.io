<script lang="ts">
	import type { WorkItem } from '$lib/types';
	import { rise } from '$lib/actions/rise';

	interface Props {
		item: WorkItem;
	}

	const { item }: Props = $props();
</script>

<article class="item glass refract" class:wide={item.featured} use:rise>
	<div class="item-top">
		<span class="kind">{item.kind}</span>
		<span class="year">{item.year}</span>
	</div>
	<div>
		<h3>{item.name}</h3>
		<p class="org">{item.org}</p>
	</div>
	<p class="summary">{item.summary}</p>
	<p class="detail">{item.detail}</p>
	<div class="tags">
		{#each item.tags as tag}
			<span class="tag">{tag}</span>
		{/each}
	</div>
</article>
