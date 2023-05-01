<script lang="ts">
	import AnimatedWords from '../animations/AnimatedWords.svelte'

	import { createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher<{ finish: never }>()

	function onWordsFinish() {
		dispatch('finish')
	}
</script>

<section>
	<h1>
		<AnimatedWords
			wordDurationMs={2000}
			words={[
				'välkommen',
				'welcome'
				// 'bem-vindo',
				// 'bienvenue',
				// ['स्वा', 'ग', 'त', ' ', 'हे'],
				// '2024',
				// '1-3 July'
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
	}

	h1 {
		flex: 1;
		font-size: 10vw;
		font-weight: inherit;
		height: 1.5em;
		text-align: center;
	}
</style>
