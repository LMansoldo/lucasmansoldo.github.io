<script lang="ts">
	import type { HeroContent } from '$lib/types';
	import { rise } from '$lib/actions/rise';

	interface Props {
		data: HeroContent;
	}

	const { data }: Props = $props();
</script>

<section class="hero wrap">
	<p class="eyebrow">{data.eyebrow}</p>
	<h1>
		<i>{data.headline_a}</i>
		<i><b>{data.headline_b}</b></i>
	</h1>
	<p class="lede">{data.lede}</p>
	<div class="slab glass refract">
		<a class="btn btn-a" href="#work">{data.cta_primary}</a>
		<a class="btn btn-b" href="#contact">{data.cta_secondary}</a>
	</div>
</section>
