<script lang="ts">
	import type { ContactContent, FooterContent } from '$lib/types';
	import { fmt } from '$lib/format';
	import { rise } from '$lib/actions/rise';

	interface Props {
		contact: ContactContent;
		footer: FooterContent;
	}

	const { contact, footer }: Props = $props();
</script>

<section class="wrap" id="contact">
	<div class="contact" use:rise>
		<p class="eyebrow">{contact.eyebrow}</p>
		<h2>{@html fmt(contact.title)}</h2>
		<p>{contact.lede}</p>
		<a class="mail" href="mailto:{contact.email}">{contact.email}</a>
		<div class="links">
			{#each contact.links as link}
				<a href={link.href} target="_blank" rel="noopener">{link.label}</a>
			{/each}
		</div>
	</div>
	<footer>
		<span>{footer.note}</span>
		<span>{footer.location}</span>
	</footer>
</section>
