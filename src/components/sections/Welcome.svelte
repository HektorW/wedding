<script lang="ts">
	import { texts } from '../../stores/texts'
	import Section from '../layout/Section.svelte'
</script>

<Section>
	<h1>{$texts.welcomeSection.heading}</h1>

	<time datetime="2024-07-01">
		<span class="year">2024</span>
		<span class="date">1-3 July</span>
	</time>

	<!-- <img src="/tilde_hektor.jpg" alt="Tilde and Hektor" /> -->
</Section>

<style lang="scss">
	h1 {
		grid-column: 2 / span var(--grid--columns);
		font-size: var(--heading--l);
	}

	time {
		grid-column: span 2 / gutter-end;
		grid-row-start: 2;
		text-align: right;

		.year,
		.date {
			display: block;
		}

		.year {
			font-size: var(--heading--s);
		}
	}

	img {
		grid-column: gutter-start / span calc(var(--grid--columns) - 1);
		grid-row-start: 3;
		transform: translateY(-10%);
		width: 100%;
	}

	@media screen and (min-width: 40em) {
		img {
			transform: none;
		}
	}
</style>
