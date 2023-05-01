<script lang="ts">
	import MovingGradientBlob from '../MovingGradientBlob.svelte'
	import AnimatedWords from '../animations/AnimatedWords.svelte'

	import { createEventDispatcher, onMount } from 'svelte'

	const dispatch = createEventDispatcher<{ finish: never }>()

	let isFinished = false
	let isMounted = false

	onMount(() => {
		isMounted = true
	})

	function onWordsFinish() {
		isFinished = true
		dispatch('finish')
	}

	function onTransitionEnd() {}
</script>

<section class:isFinished on:transitionend={onTransitionEnd}>
	<div class="gradients" class:isMounted>
		<MovingGradientBlob color="var(--color--pbd--peach)" />
		<MovingGradientBlob color="var(--color--pbd--blue)" />
		<MovingGradientBlob color="var(--color--green)" />
	</div>

	<h1>
		<AnimatedWords
			wordDurationMs={2000}
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
