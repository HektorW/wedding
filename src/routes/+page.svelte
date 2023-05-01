<script lang="ts">
	import Portugal from '../components/sections/Portugal.svelte'
	import Venue from '../components/sections/Venue.svelte'
	import Intro from '../components/sections/Intro.svelte'
	import WestrupWallin from '../components/sections/WestrupWallin.svelte'
	import Calendar from '../components/icons/Calendar.svelte'
	import Stars from '../components/icons/Stars.svelte'
	import RisingSun from '../components/icons/RisingSun.svelte'
	import CalendarSection from '../components/sections/Calendar.svelte'

	let isShowingIntro = true

	function onIntroFinish() {
		setTimeout(() => {
			isShowingIntro = false
		}, 1000)
	}
</script>

<link rel="preload" as="image" href="/us/hektor.jpg" />
<link rel="preload" as="image" href="/us/tilde.jpg" />

{#if isShowingIntro}
	<Intro on:finish={onIntroFinish} />
{:else}
	<WestrupWallin />

	<section class="intro">
		<img src="/leafs.png" />

		<p class="calendar">
			<Calendar />

			<span class="mark-your-calendar">Mark your calendars</span>

			<span class="dance-moves">🕺 and practice your dance moves 💃</span>
		</p>

		<p class="its-a-wedding">It's a wedding!</p>
	</section>

	<Portugal />

	<Venue />

	<section class="outro">
		<img class="tilde-hektor" src="/us/tilde_hektor.jpg" />

		<p>We're so excited to celebrate our wedding with you all!</p>

		<div class="divider">
			<RisingSun />
		</div>

		<p>
			Consider this just a small preview of what's in store! We'll be sharing more details with you
			soon, including a complete schedule of events, travel information, and additional
			recommendations for activities and attractions in the area.
		</p>

		<p>
			If we haven't already been in touch, expect us to reach out to you soon to discuss living
			arrangements and help you secure your accommodation for the duration of your stay.
		</p>

		<p>
			If you have any questions or concerns in the meantime, please don't hesitate to reach out to
			us.
		</p>

		<div class="divider">
			<Stars />
		</div>

		<p>We can't wait to share this special occasion with you!</p>

		<img class="palm" src="/palm.png" />
	</section>

	<CalendarSection />
{/if}

<style lang="scss">
	.intro {
		font-size: var(--heading--s);
		padding-block: var(--content--padding--block);
		position: relative;
		text-align: center;

		img {
			left: -25vw;
			max-width: none;
			position: absolute;
			top: 15rem;
			transform: rotateY(180deg) rotate(10deg);
			width: 70vw;
			z-index: -1;
		}

		p {
			margin: 0;
		}

		.mark-your-calendar,
		.dance-moves {
			display: block;
		}

		.mark-your-calendar {
			margin-bottom: 1rem;
		}

		.dance-moves {
			font-size: var(--body--m);
		}

		.its-a-wedding {
			margin-top: 1rem;
		}
	}

	.outro {
		padding-block: var(--content--padding--block);
		position: relative;

		.tilde-hektor {
			height: 45vh;
			width: 100%;
			object-fit: cover;
		}

		.divider {
			text-align: center;
		}

		p {
			margin-block: 2rem;
			padding-inline: var(--content--padding--inline);
		}

		.palm {
			bottom: -25vw;
			height: 70vw;
			object-fit: contain;
			position: absolute;
			right: -20%;
			transform: rotateY(180deg) rotate(45deg);
			z-index: -1;
		}
	}

	@media screen and (min-width: 40em) {
		.intro {
			img {
				left: -9rem;
				width: 40vw;
			}
		}

		.outro {
			.tilde-hektor {
				display: block;
				margin-inline: auto;
				max-width: 50rem;
			}

			.palm {
				right: -10rem;
				width: 26rem;
			}
		}
	}
</style>
