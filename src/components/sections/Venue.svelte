<script>
	import { texts } from '../../stores/texts'
	import ExternalLink from '../ExternalLink.svelte'
	import Wave from '../icons/Wave.svelte'
</script>

<section>
	<img class="top-view" src="/venue/dhilas_top.jpg" />

	<p class="intro">
		The celebrations will take place at two adjacent venues, <strong>Casa Paço D'Ilhas</strong>
		and <strong>Alma do Paço</strong>.
	</p>

	<!-- <p>
		They both offer stunning views of the ocean and coastline, and you'll be able to enjoy both
		spaces throughout the wedding festivities.
	</p> -->
	<div style:text-align="center">
		<Wave />
	</div>

	<p>
		We'll be doing everything at the venues, including our activities, eating, dancing, hanging out,
		and even having the ceremony.
	</p>

	<!-- <p class="glimpse">Scroll down for a taste of what awaits us.</p> -->
	<!-- <p>To give you a preview of what's in store, check this out:</p> -->

	<article>
		<img src="/venue/dhilas.jpg" alt="Alma" />
		<h2>casa paço d'ilhas</h2>

		<p>Named after its location in Paço De Ilhas, a small rural village.</p>

		<p>
			Casa Paço D'Ilhas is located on an elusive hilltop overlooking the world renowned surfbreaks
			of the Ericeira.
		</p>

		<div class="links">
			<ExternalLink href="https://casapacodilhas.com/">
				{$texts.venueSection.visitHomepage}
			</ExternalLink>
			<ExternalLink href="https://goo.gl/maps/Qt9QuS8k7p4R6rpB9">
				{$texts.venueSection.seeOnMaps}
			</ExternalLink>
		</div>
	</article>

	<article>
		<img src="/venue/alma.jpg" alt="Alma" />
		<h2>alma do paço</h2>

		<p>The Soul of the Palace.</p>
		<p>
			Once upon a time the king's summer residence, now it will be the location of our ceremony.
		</p>

		<div class="links">
			<ExternalLink href="https://almadopaco.com/">
				{$texts.venueSection.visitHomepage}
			</ExternalLink>
			<ExternalLink href="https://goo.gl/maps/2mHMnWNZrYx53xd89">
				{$texts.venueSection.seeOnMaps}
			</ExternalLink>
		</div>
	</article>
</section>

<style lang="scss">
	section {
		padding-top: 25rem;
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
		color: var(--color--text--strong);
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
			margin-top: 4rem;
		}

		.top-view {
			height: 75vh;
		}

		article img {
			height: 65vh;
		}
	}
</style>
