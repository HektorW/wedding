<script>
	import { texts } from '../../stores/texts'
	import ExternalLink from '../ExternalLink.svelte'
	import Wave from '../icons/Wave.svelte'
</script>

<section>
	<img src="/venue/dhilas_top_raw.jpg" />

	<p class="intro">
		The celebrations will take place at two adjacent venues, <strong>Casa Paço D'Ilhas</strong>
		and <strong>Alma do Paço</strong>.
	</p>

	<!-- <p>
		They both offer stunning views of the ocean and coastline, and you'll be able to enjoy both
		spaces throughout the wedding festivities.
	</p> -->

	<p>
		We'll be doing everything at the venues, including our activities, eating, dancing, hanging out,
		and even having the ceremony.
	</p>

	<div style:text-align="center">
		<Wave />
	</div>

	<p class="glimpse">To give you a glimpse of what's in store, check these places out below.</p>
	<!-- <p>To give you a preview of what's in store, check this out:</p> -->

	<article>
		<img src="/venue/dhilas_raw.jpg" alt="Alma" />
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
		<img src="/venue/alma_raw.jpg" alt="Alma" />
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
		padding-top: 10rem;
	}

	p {
		margin-block: 2rem;
		padding-inline: 1rem;
	}

	strong {
		color: var(--color--text--strong);
		white-space: nowrap;
	}

	article {
		margin-block: 10rem;

		img {
			height: 45vh;
			width: 100%;
			object-fit: cover;
		}

		h2,
		p,
		.links {
			padding-inline: 1rem;
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
</style>
