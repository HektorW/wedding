<script lang="ts">
	import { onMount } from 'svelte'
	import Gradient from './Gradient.svelte'

	let gradientEl: HTMLDivElement

	let targetX = typeof window === 'undefined' ? 0 : window.innerWidth * 0.8
	let targetY = typeof window === 'undefined' ? 0 : window.innerHeight * 1.3

	let gradientX = targetX
	let gradientY = targetY

	let isGradientVisible = false

	// onMount(() => {
	// 	isGradientVisible = true

	// 	let isMouseOver = false

	// 	let rafId = setTimeout(function update() {
	// 		rafId = requestAnimationFrame(update)

	// 		// if (!isMouseOver) {
	// 		// 	return
	// 		// }

	// 		const dirX = targetX - gradientX
	// 		const dirY = targetY - gradientY
	// 		const dirLength = Math.sqrt(dirX ** 2 + dirY ** 2)
	// 		const normalizedDirX = dirLength === 0 ? 0 : dirX / dirLength
	// 		const normalizedDirY = dirLength === 0 ? 0 : dirY / dirLength

	// 		const moveSpeed = 75

	// 		gradientX += normalizedDirX * moveSpeed
	// 		gradientY += normalizedDirY * moveSpeed

	// 		gradientEl.style.backgroundImage = `
	// 		  radial-gradient(
	// 		    circle at left ${gradientX}px top ${gradientY}px,
	// 		    var(--gradient--color--1) var(--gradient--stop--1),
	// 		    var(--gradient--color--2) var(--gradient--stop--2)
	// 		  )
	// 		`
	// 	}, 100)

	// 	const newPositionIntervalDelayMs = 5000
	// 	const newPositionIntervalId = setInterval(() => {
	// 		targetX = window.innerWidth * Math.random()
	// 		targetY = window.innerHeight * Math.random()
	// 	}, newPositionIntervalDelayMs)

	// 	function onMouseMove(event: MouseEvent) {
	// 		// mouseX = event.screenX
	// 		// mouseY = event.screenY
	// 	}

	// 	function onMouseOver() {
	// 		isMouseOver = true
	// 	}

	// 	function onMouseOut() {
	// 		isMouseOver = false
	// 	}

	// 	window.addEventListener('mousemove', onMouseMove)
	// 	window.addEventListener('mouseover', onMouseOver)
	// 	window.addEventListener('mouseout', onMouseOut)

	// 	return () => {
	// 		clearInterval(newPositionIntervalId)
	// 		clearInterval(rafId)
	// 		// cancelAnimationFrame(rafId)
	// 		window.removeEventListener('mousemove', onMouseMove)
	// 		window.removeEventListener('mouseover', onMouseOver)
	// 		window.removeEventListener('mouseout', onMouseOut)
	// 	}
	// })
</script>

<div class="root" aria-hidden="true">
	<Gradient />
	<!-- <div class="gradient" class:visible={isGradientVisible} bind:this={gradientEl} /> -->

	<!-- <div style:--gradient--color--1="var(--color--a)" style:--gradient--color--2="var(--color--b)">
		<Gradient />
	</div>

	<div style:--gradient--color--1="var(--color--c)" style:--gradient--color--2="var(--color--d)">
		<Gradient />
	</div> -->

	<!-- <div class="texture" /> -->
</div>

<style lang="scss">
	/* .root,
	.gradient,
	.texture {
		height: 100%;
		bottom: 0;
		left: 0;
		width: 100%;
	}

	.gradient,
	.texture {
		position: absolute;
	} */

	.root {
		background-color: var(--root--color);
		position: fixed;
		z-index: var(--layer--background);
	}

	/* .gradient {
		opacity: 0;
		transition: opacity 5s;

		&.visible {
			opacity: var(--gradient--opacity);
		}
	} */

	/* .texture {
		background-image: url(/noise-texture_.png);
		background-repeat: repeat;
		opacity: var(--texture--opacity);
	} */
</style>
