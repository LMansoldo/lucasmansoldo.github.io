<script lang="ts">
	import type { ExperienceContent } from '$lib/types';
	import { fmt } from '$lib/format';
	import { rise } from '$lib/actions/rise';

	interface Props {
		data: ExperienceContent;
	}

	const { data }: Props = $props();
</script>

<section class="wrap" id="experience">
	<div class="sec-head" use:rise>
		<p class="eyebrow">{data.eyebrow}</p>
		<h2>{@html fmt(data.title)}</h2>
	</div>
	<div>
		{#each data.items as j}
			<article class="job" use:rise>
				<div>
					<h3 class="co">{j.company}</h3>
					<p class="role">{j.role}</p>
					<p class="ctx">{j.context}</p>
					<p class="per">{j.period}</p>
				</div>
				<div>
					<p class="sum">{j.summary}</p>
					<ul>
						{#each j.bullets as b}
							<li>{b}</li>
						{/each}
					</ul>
				</div>
			</article>
		{/each}
	</div>
</section>
