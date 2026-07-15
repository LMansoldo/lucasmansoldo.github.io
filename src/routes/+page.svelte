<script lang="ts">
	import { content } from '$lib/i18n.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Metrics from '$lib/components/Metrics.svelte';
	import WorkGrid from '$lib/components/WorkGrid.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import StackTabs from '$lib/components/StackTabs.svelte';
	import Contact from '$lib/components/Contact.svelte';

	const t = $derived(content());
</script>

<Hero data={t.hero} />
<Metrics data={t.metrics} />
<WorkGrid data={t.work} />
<Experience data={t.experience} />
<StackTabs data={t.stack} />
<Contact contact={t.contact} footer={t.footer} />
