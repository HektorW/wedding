<script lang="ts">
	import { onMount } from 'svelte'

	export let color: string = ''
	export let gradientStop1 = 'var(--gradient--stop--1)'
	export let gradientStop2 = 'var(--gradient--stop--2)'

	let gradientEl: HTMLDivElement

	let targetX = typeof window === 'undefined' ? 0 : window.innerWidth * 0.8
	let targetY = typeof window === 'undefined' ? 0 : window.innerHeight * 1.3

	let gradientX = targetX
	let gradientY = targetY

	onMount(() => {
		let rafId = setTimeout(function update() {
			rafId = requestAnimationFrame(update)

			const dirX = targetX - gradientX
			const dirY = targetY - gradientY
			const dirLength = Math.sqrt(dirX ** 2 + dirY ** 2)
			const normalizedDirX = dirLength === 0 ? 0 : dirX / dirLength
			const normalizedDirY = dirLength === 0 ? 0 : dirY / dirLength

			const moveSpeed = 2

			gradientX += normalizedDirX * moveSpeed
			gradientY += normalizedDirY * moveSpeed

			gradientEl.style.backgroundImage = `
			  radial-gradient(
			    circle at left ${gradientX}px top ${gradientY}px,
			    ${color} ${gradientStop1},
			    rgba(255, 255, 255, 0) ${gradientStop2}
			  )
			`
		}, 100)

		const newPositionIntervalDelayMs = 2000
		const newPositionIntervalId = setInterval(() => {
			targetX = window.innerWidth * Math.random()
			targetY = window.innerHeight * Math.random()
		}, newPositionIntervalDelayMs)

		return () => {
			clearInterval(newPositionIntervalId)
			clearInterval(rafId)
			cancelAnimationFrame(rafId)
		}
	})
</script>

<div class="gradient" bind:this={gradientEl} />

<style lang="scss">
	.gradient {
		inset: 0;
		position: absolute;
	}
</style>
