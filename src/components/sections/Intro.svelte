<script lang="ts">
	import MovingGradientBlob from '../MovingGradientBlob.svelte'
	import AnimatedWords from '../animations/AnimatedWords.svelte'

	import { createEventDispatcher, onMount } from 'svelte'

	const dispatch = createEventDispatcher<{ finish: never }>()

	let isFinished = false
	let isMounted = false

	onMount(() => {
		isMounted = true

		// document.scrollingElement!.scrollTop = 0

		// document.body.style.height = '100%'
		// document.body.style.overflow = 'hidden'

		return () => {
			// document.body.style.height = ''
			// document.body.style.overflow = ''
		}
	})

	function onWordsFinish() {
		isFinished = true
		dispatch('finish')
	}

	function onTransitionEnd() {}
</script>

<section class:isFinished on:transitionend={onTransitionEnd}>
	<div class="gradients fade-in" class:isMounted>
		<MovingGradientBlob
			moveSpeed={3}
			targetXStart={-1.5}
			targetXMax={1}
			targetXMin={0.5}
			targetYStart={0}
			targetYMax={0.25}
			targetYMin={-0.1}
			gradientStop2="80%"
			color="var(--color--pbd--peach)"
		/>
		<MovingGradientBlob
			moveSpeed={3}
			targetXStart={2.5}
			targetXMax={0.5}
			targetXMin={0}
			targetYStart={0.25}
			targetYMax={0.75}
			targetYMin={0.5}
			gradientStop2="80%"
			color="var(--color--pbd--blue)"
		/>
		<MovingGradientBlob
			moveSpeed={0.5}
			targetYStart={1}
			targetYMin={1}
			targetYMax={1.25}
			gradientStop2="80%"
			color="var(--color--green)"
		/>
	</div>

	<h1>
		<AnimatedWords
			wordDurationMs={1500}
			words={[
				'välkommen',
				'welcome',
				'bem-vindo',
				'bienvenue',
				['स्वा', 'ग', 'त', ' ', 'हे'],
				'2024',
				'1-3 July'
			]}
			on:finish={onWordsFinish}
		/>
	</h1>
</section>

<style lang="scss">
	section {
		align-items: center;
		display: flex;
		height: 90vh;
		inset: 0 0 auto 0;
		position: fixed;
		transition: opacity 0.25s ease-out;

		&.isFinished {
			opacity: 0;
		}
	}

	.gradients {
		opacity: 0;
		inset: 0;
		position: fixed;
		transition: opacity 1s ease-out;

		&.isMounted {
			opacity: 1;
		}
	}

	h1 {
		flex: 1;
		font-size: 10vw;
		font-weight: inherit;
		height: 1.5em;
		text-align: center;
	}
</style>
