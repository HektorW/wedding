<script lang="ts">
	import Portugal from '../components/sections/Portugal.svelte'
	import Venue from '../components/sections/Venue.svelte'
	import Intro from '../components/sections/Intro.svelte'
	import WestrupWallin from '../components/sections/WestrupWallin.svelte'
	import Calendar from '../components/icons/Calendar.svelte'
	import Stars from '../components/icons/Stars.svelte'
	import RisingSun from '../components/icons/RisingSun.svelte'
	import CalendarSection from '../components/sections/Calendar.svelte'
	import Family from '../components/icons/Family.svelte'
	import MovingGradientBlob from '../components/MovingGradientBlob.svelte'
	import FadeInOnAppear from '../components/animations/FadeInOnAppear.svelte'

	let isShowingIntro = true
	let isRenderingIntro = true

	function onIntroFinish() {
		setTimeout(() => {
			isShowingIntro = false

			setTimeout(() => {
				isRenderingIntro = false
			}, 1500)
		}, 500)
	}
</script>

<link rel="preload" as="image" href="/us/hektor.jpg" />
<link rel="preload" as="image" href="/us/tilde.jpg" />

{#if isRenderingIntro}
	<div class="welcome-intro" class:is-active={isShowingIntro}>
		<Intro on:finish={onIntroFinish} />
	</div>
{/if}

{#if !isShowingIntro}
	<div class="top-background fade-in">
		<MovingGradientBlob color="var(--color--pbd--peach)" />
		<MovingGradientBlob color="var(--color--green)" />
		<MovingGradientBlob color="var(--color--pbd--blue)" />
	</div>

	<FadeInOnAppear />

	<WestrupWallin />

	<section class="intro">
		<!-- <img src="/leafs.webp" /> -->

		<div class="calendar">
			<div class="fade-in">
				<Calendar />
			</div>

			<div class="mark-your-calendar fade-in" data-delay="0.1">Mark your calendars</div>

			<div class="dance-moves fade-in" data-delay="0.2">
				🕺 <span>and practice your dance moves</span> 💃
			</div>

			<div class="fade-in" data-delay="0.3" style:font-size="var(--body--m)">because</div>

			<p class="its-a-wedding fade-in" data-delay="0.4">we're gonna have a wedding!</p>
		</div>
	</section>

	<Portugal />

	<Venue />

	<div class="divider fade-in" style:text-align="center">
		<Family />
	</div>

	<section class="outro">
		<img class="tilde-hektor fade-in" src="/us/tilde_hektor_apple.jpg" />

		<p class="fade-in" data-delay="0.1">
			We're so excited to celebrate our wedding with all of you (and together with our little
			toddler 😮)!
		</p>

		<div class="divider fade-in" data-delay="0.2">
			<RisingSun />
		</div>

		<p class="fade-in" data-delay="0.3">
			Consider this just a small preview of what's in store. We'll be sharing more details with you
			soon, including a complete schedule of events, travel information, and additional
			recommendations for activities and attractions in the area.
		</p>

		<p class="fade-in" data-delay="0.4">
			If we haven't already been in touch, expect us to reach out to you soon to discuss living
			arrangements and help you secure your accommodation for the duration of your stay.
		</p>

		<p class="fade-in" data-delay="0.5">
			If you have any questions or concerns in the meantime, please don't hesitate to reach out to
			us.
		</p>

		<div class="divider fade-in" data-delay="0.6">
			<Stars />
		</div>

		<p class="fade-in" data-delay="0.7">We can't wait to share this special occasion with you.</p>

		<img
			class="palm fade-in"
			data-delay="0.8"
			data-start-transform="translateY(15px) rotateY(180deg) rotate(45deg)"
			src="/palm.webp"
		/>
	</section>

	<CalendarSection />
{/if}

<style lang="scss">
	.welcome-intro {
		opacity: 0;
		transition: opacity 1s var(--ease-out--cubic);

		&.is-active {
			opacity: 1;
		}
	}

	.top-background {
		height: 200vh;
		position: absolute;
		width: 100%;
		z-index: -1;
	}

	.intro {
		font-size: var(--heading--s);
		padding-block: var(--content--padding--block);
		position: relative;
		text-align: center;

		img {
			left: -35vw;
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

			span {
				padding-inline: 0.5rem;
			}
		}

		.its-a-wedding {
			margin-top: 1rem;
		}
	}

	.divider {
		align-items: center;
		display: flex;
		justify-content: center;
		gap: 1rem;

		&::before,
		&::after {
			background-color: currentColor;
			content: '';
			height: 1px;
			width: 2rem;
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
