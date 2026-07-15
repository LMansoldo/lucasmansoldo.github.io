<script lang="ts">
	import type { MetricsContent } from '$lib/types';
	import { rise } from '$lib/actions/rise';

	interface Props {
		data: MetricsContent;
	}

	const { data }: Props = $props();
</script>

<section class="wrap">
	<div class="sec-head" use:rise><p class="eyebrow">{data.label}</p></div>
	<div class="metrics">
		{#each data.items as m}
			<article class="metric" use:rise>
				<div class="v">{m.value}<em>{m.unit}</em></div>
				<div class="l">{m.label}</div>
				<div class="n">{m.note}</div>
			</article>
		{/each}
	</div>
</section>
