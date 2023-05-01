<script lang="ts">
	import { onMount } from 'svelte'

	export let text: string
	export let direction: 1 | -1 = 1
	export let velocity: number = 1

	let firstWordEl: HTMLElement
	let overflowContainerEl: HTMLElement
	let animationContainerEl: HTMLElement

	let repeatCount = 10

	let marqueeStart = 0
	let marqueeEnd = 0

	onMount(() => {
		let isMounted = true

		const timeoutId = setTimeout(() => {
			onResize()

			// let pos = 0
			let t = 0
			let prevNow = Date.now()

			;(function update() {
				if (!isMounted) return

				requestAnimationFrame(update)

				const now = Date.now()
				const dt = now - prevNow
				prevNow = now

				t += (dt / 1000) * direction * velocity

				if (direction === 1 && t > marqueeEnd) {
					t = marqueeStart
				} else if (direction === -1 && t < marqueeEnd) {
					t = marqueeStart
				}

				animationContainerEl.style.transform = `translateX(${t.toFixed(4)}px)`
			})()
		}, 200)

		return () => {
			isMounted = false
			clearTimeout(timeoutId)
		}
	})

	function onResize() {
		const wordWidth = firstWordEl.getBoundingClientRect().width
		const containerWidth = overflowContainerEl.getBoundingClientRect().width

		repeatCount = Math.ceil(containerWidth / wordWidth)

		const start = direction === 1 ? -wordWidth : 0
		const end = direction === 1 ? 0 : -wordWidth

		marqueeStart = start
		marqueeEnd = end
	}
</script>

<svelte:window on:resize={onResize} />

<div bind:this={overflowContainerEl} class="overflow-container" style:--duration={`${velocity}s`}>
	<div bind:this={animationContainerEl} class="animation-container">
		<span bind:this={firstWordEl}>{text}</span>

		{#each { length: repeatCount } as _}
			<span>{text}</span>
		{/each}
	</div>
</div>

<style lang="scss">
	.overflow-container {
		overflow: hidden;
	}

	.animation-container {
		/* animation: marquee var(--duration, 1s) infinite linear; */
		white-space: nowrap;
	}

	/* @keyframes marquee {
		0% {
			transform: translateX(var(--marquee--start, 0px));
		}
		100% {
			transform: translateX(var(--marquee--end, 0px));
		}
	} */
</style>
