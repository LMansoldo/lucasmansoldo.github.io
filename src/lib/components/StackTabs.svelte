<script lang="ts">
	import type { StackContent } from '$lib/types';
	import { fmt } from '$lib/format';
	import { rise } from '$lib/actions/rise';
	import Chip from './Chip.svelte';

	interface Props {
		data: StackContent;
	}

	const { data }: Props = $props();

	let activeTab = $state(0);

	function selectTab(i: number) {
		activeTab = i;
	}

	const activeGroup = $derived(data.groups[activeTab]);
</script>

<section class="wrap" id="stack">
	<div class="sec-head" use:rise>
		<p class="eyebrow">{data.eyebrow}</p>
		<h2>{@html fmt(data.title)}</h2>
	</div>
	<div class="tabs glass" use:rise role="tablist">
		{#each data.groups as group, i}
			<button
				class="tab"
				type="button"
				role="tab"
				aria-selected={i === activeTab}
				onclick={() => selectTab(i)}
			>
				{group.name}
			</button>
		{/each}
	</div>
	<div class="panel glass refract" use:rise role="tabpanel">
		{#key activeTab}
			<div class="chips">
				{#each activeGroup.items as item}
					<Chip name={item} />
				{/each}
			</div>
		{/key}
	</div>
</section>
