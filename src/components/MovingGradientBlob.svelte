<script lang="ts">
	import { onMount } from 'svelte'

	export let color: string = ''
	export let gradientStop1 = 'var(--gradient--stop--1)'
	export let gradientStop2 = 'var(--gradient--stop--2)'
	export let targetYMin = 0
	export let targetYMax = 1
	export let targetYStart = 1.3
	export let targetXMin = 0
	export let targetXMax = 1
	export let targetXStart = 0.8
	export let repositionDelayMs = 2000
	export let moveSpeed = 2

	let gradientEl: HTMLDivElement

	let targetX = 0 //typeof window === 'undefined' ? 0 : window.innerWidth * 0.8
	let targetY = 0 //typeof window === 'undefined' ? 0 : window.innerHeight * 1.3

	let gradientX = targetX
	let gradientY = targetY

	onMount(() => {
		let isInViewport = false

		new IntersectionObserver(
			([entry]) => {
				isInViewport = entry.isIntersecting
			},
			{
				rootMargin: '0px',
				threshold: 0
			}
		).observe(gradientEl)

		gradientX = targetX = gradientEl.clientWidth * targetXStart
		gradientY = targetY = gradientEl.clientHeight * targetYStart

		let rafId = setTimeout(function update() {
			rafId = requestAnimationFrame(update)

			if (!isInViewport) return

			const dirX = targetX - gradientX
			const dirY = targetY - gradientY
			const dirLength = Math.sqrt(dirX ** 2 + dirY ** 2)
			const normalizedDirX = dirLength === 0 ? 0 : dirX / dirLength
			const normalizedDirY = dirLength === 0 ? 0 : dirY / dirLength

			gradientX += normalizedDirX * moveSpeed
			gradientY += normalizedDirY * moveSpeed

			gradientEl.style.backgroundImage = `
			  radial-gradient(
			    circle at left ${gradientX.toFixed(2)}px top ${gradientY.toFixed(2)}px,
			    ${color} ${gradientStop1},
			    rgba(255, 255, 255, 0) ${gradientStop2}
			  )
			`
		}, 100)

		const newPositionIntervalId = setInterval(() => {
			const { clientHeight, clientWidth } = gradientEl

			targetX = lerp(targetXMin * clientWidth, targetXMax * clientWidth, Math.random())
			targetY = lerp(targetYMin * clientHeight, targetYMax * clientHeight, Math.random())
		}, repositionDelayMs)

		function lerp(min: number, max: number, t: number) {
			return min + (max - min) * t
		}

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
