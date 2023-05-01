<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte'

	export let words: Array<string | string[]> = []
	export let wordDurationMs: number = 1750
	export let isLooping: boolean = false

	const dispatch = createEventDispatcher<{ finish: never }>()

	let activeIndex = 0

	onMount(() => {
		let intervalId = setInterval(() => {
			activeIndex += 1

			if (activeIndex === words.length) {
				dispatch('finish')

				if (isLooping) {
					activeIndex = 0
				} else {
					clearInterval(intervalId)
				}
			}
		}, wordDurationMs)

		return () => {
			clearInterval(intervalId)
		}
	})
</script>

<span class="container">
	{#each words as word, index}
		<span
			class="word"
			class:active={index === activeIndex}
			class:disappearing={index === (words.length + (activeIndex - 1)) % words.length}
		>
			{#each typeof word === 'string' ? Array.from(word) : word as letter}
				<span class="letter">{@html letter === ' ' ? '&nbsp;' : letter}</span>
			{/each}
		</span>
	{/each}
</span>

<style lang="scss">
	.container {
		display: block;
		position: relative;
	}

	.word {
		left: 0;
		position: absolute;
		top: 0;
		width: 100%;

		.letter {
			--transition-duration: 450ms;
			--transition-delay--enter--base: 250ms;
			--transition-delay--item--base: 90ms;
			--transition-delay--base: 0ms;
			--transition-delay--item: 0ms;
			--transition-delay: calc(var(--transition-delay--base) + var(--transition-delay--item));

			--transform--translate-y: 0.1em;

			--easing: var(--ease--in-out--back);

			display: inline-block;
			opacity: 0;
			transform: translateY(calc(-1 * var(--transform--translate-y)));
			transition-delay: var(--transition-delay);
			transition-duration: var(--transition-duration);
			transition-property: opacity, transform;
			transition-timing-function: var(--easing);

			@for $i from 1 to 20 {
				&:nth-child(#{$i}) {
					--transition-delay--item: calc(var(--transition-delay--item--base) * #{$i});
				}
			}
		}

		&.active {
			.letter {
				opacity: 1;
				transform: none;

				@for $i from 1 to 20 {
					&:nth-child(#{$i}) {
						--transition-delay--base: var(--transition-delay--enter--base);
						--transition-delay--item: calc(var(--transition-delay--item--base) * #{$i});
					}
				}
			}
		}

		&.disappearing {
			.letter {
				transform: translateY(var(--transform--translate-y));
			}
		}
	}
</style>
