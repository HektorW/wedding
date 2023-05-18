<script>
	import { texts } from '../../stores/texts'
	import ExternalLink from '../ExternalLink.svelte'
	import Wave from '../icons/Wave.svelte'
</script>

<section>
	<img class="top-view" alt="Arieal view of the venue" src="/venue/dhilas_top.jpg" />

	<p class="intro fade-in" data-delay="0.1">
		Our celebrations will take place at the two adjacent sibling venues, <strong
			>Casa Paço D'Ilhas</strong
		>
		and <strong>Alma do Paço</strong>.
	</p>

	<!-- <p>
		They are located just at the outskirts of Ericeira and we will have the entire space to
		ourselves during our time there.
	</p> -->

	<p class="fade-in" data-delay="0.2">
		They are located just at the outskirts of Ericeira and have a stunning view of the ocean and
		coastline. During our stay we will have the entire space to ourselves.
	</p>

	<!-- <p>
		They both offer stunning views of the ocean and coastline, and you'll be able to enjoy both
		spaces throughout the wedding festivities.
	</p> -->
	<div class="fade-in" data-delay="0.3" style:text-align="center">
		<Wave />
	</div>

	<p class="fade-in" data-delay="0.4">
		We will be doing almost everything at the venues, eating, dancing, yoga, hanging out, and even
		the ceremony.
	</p>

	<!-- <p class="glimpse">Scroll down for a taste of what awaits us.</p> -->
	<!-- <p>To give you a preview of what's in store, check this out:</p> -->

	<article>
		<img class="fade-in" src="/venue/dhilas.jpg" alt="Alma" />
		<h2 class="fade-in" data-delay="0.1">casa paço d'ilhas</h2>

		<p class="fade-in" data-delay="0.2">
			Named after its location in Paço De Ilhas, a small rural village.
		</p>

		<!-- <p class="fade-in" data-delay="0.3">
			Casa Paço D'Ilhas is located on an elusive hilltop overlooking the world renowned surfbreaks
			of the Ericeira.
		</p> -->

		<div class="links">
			<ExternalLink href="https://casapacodilhas.com/" class="fade-in" data-delay="0.4">
				{$texts.venueSection.visitHomepage}
			</ExternalLink>
			<ExternalLink href="https://goo.gl/maps/Qt9QuS8k7p4R6rpB9" class="fade-in" data-delay="0.5">
				{$texts.venueSection.seeOnMaps}
			</ExternalLink>
		</div>
	</article>

	<article>
		<img class="fade-in" data-delay="0" src="/venue/alma.jpg" alt="Alma" />
		<h2 class="fade-in" data-delay="0.1">alma do paço</h2>

		<p class="fade-in" data-delay="0.2">The Soul of the Palace.</p>
		<p class="fade-in" data-delay="0.3">
			Once upon a time the king's summer residence, now it will be the location of our ceremony.
		</p>

		<div class="links">
			<ExternalLink class="fade-in" data-delay="0.4" href="https://almadopaco.com/">
				{$texts.venueSection.visitHomepage}
			</ExternalLink>
			<ExternalLink class="fade-in" data-delay="0.5" href="https://goo.gl/maps/2mHMnWNZrYx53xd89">
				{$texts.venueSection.seeOnMaps}
			</ExternalLink>
		</div>
	</article>
</section>

<style lang="scss">
	section {
		position: relative;
		z-index: 1;
	}

	.top-view {
		height: 45vh;
		object-fit: cover;
		width: 100%;
	}

	p {
		margin-block: 2rem;
		padding-inline: var(--content--padding--inline);
	}

	.intro {
		margin-top: var(--content--padding--block);
	}

	strong {
		/* color: var(--color--text--strong); */
		white-space: nowrap;
	}

	article {
		margin-block: var(--content--padding--block);

		img {
			height: 45vh;
			width: 100%;
			object-fit: cover;
		}

		h2,
		p,
		.links {
			padding-inline: var(--content--padding--inline);
		}

		h2 {
			font-size: var(--heading--m);
			margin-top: 1rem;
		}

		.links {
			display: flex;
			gap: 0.5rem;
			margin-top: 4rem;
		}
	}

	@media screen and (min-width: 40em) {
		.intro {
			margin-top: var(--content--padding--block);
		}

		.top-view {
			height: 65vh;
		}

		article img {
			height: 65vh;
		}
	}
</style>
