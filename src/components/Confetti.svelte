<script lang="ts">
	import { onMount } from 'svelte'

	const { abs, random, round } = Math

	let canvasElBack: HTMLCanvasElement
	let canvasElFront: HTMLCanvasElement

	type ConfettiItem = {
		x: number
		y: number
		size: number
		xVel: number
		yVel: number
		asset: Asset
	}

	type Asset = {
		state: 'loading' | 'loaded'
		image: HTMLImageElement
	}

	let spawnCountLeft = 0
	let currentSpawnDelay = 0
	const spawnDelayS = 0.025

	const confettiItems: ConfettiItem[] = []
	const assets =
		typeof window === 'undefined'
			? []
			: [
					loadAsset('/pastel-de-nata-side.webp'),
					loadAsset('/pastel-de-nata-top.webp'),
					loadAsset('/ring.webp')
			  ]

	onMount(() => {
		resize()

		setTimeout(fireConfetti, 500)

		let lastNow = performance.now()
		let rafId = requestAnimationFrame(function raf() {
			rafId = requestAnimationFrame(raf)

			const now = performance.now()
			const elapsedS = Math.min(1, (now - lastNow) / 1000)
			lastNow = now

			update(elapsedS)
		})

		window.addEventListener('resize', resize)

		return () => {
			window.removeEventListener('resize', resize)
			cancelAnimationFrame(rafId)
		}
	})

	function fireConfetti() {
		spawnCountLeft += 40
		// const spawnCount = 30
		// const spawnX = canvasElBack.width / 2
		// const spawnY = canvasElBack.height / 2

		// const sizeMin = 20
		// const sizeMax = 50
		// const spawnVelXMin = -(canvasElBack.width * 0.25)
		// const spanwVelXMax = canvasElBack.width * 0.25
		// const spanwVelYMin = canvasElBack.height * 0.5
		// const spanwVelYMax = canvasElBack.height * 1

		// Array.from({ length: spawnCount }).forEach(() => {
		// 	confettiItems.push({
		// 		x: spawnX,
		// 		y: spawnY,
		// 		size: randRange(sizeMin, sizeMax),
		// 		asset: assets[randRangeInt(0, assets.length - 1)],
		// 		xVel: randRange(spawnVelXMin, spanwVelXMax),
		// 		yVel: -randRange(spanwVelYMin, spanwVelYMax)
		// 	})
		// })
	}

	function update(elapsedS: number) {
		if (spawnCountLeft > 0) {
			if (currentSpawnDelay < 0) {
				spawnCountLeft -= 1
				currentSpawnDelay = spawnDelayS

				const spawnX = canvasElBack.width / 2
				const spawnY = canvasElBack.height / 2

				const sizeMin = 10
				const sizeMax = 25
				const spawnVelXMin = -(canvasElBack.width * 0.25)
				const spanwVelXMax = canvasElBack.width * 0.25
				const spanwVelYMin = canvasElBack.height * 0.5
				const spanwVelYMax = canvasElBack.height * 1

				confettiItems.push({
					x: spawnX,
					y: spawnY,
					size: randRange(sizeMin, sizeMax),
					asset: assets[randRangeInt(0, assets.length - 1)],
					xVel: randRange(spawnVelXMin, spanwVelXMax),
					yVel: -randRange(spanwVelYMin, spanwVelYMax)
				})
			}
		}

		currentSpawnDelay -= elapsedS

		const ctxBack = canvasElBack.getContext('2d')
		const ctxFront = canvasElFront.getContext('2d')
		if (!ctxFront || !ctxBack) {
			return
		}

		ctxBack.clearRect(0, 0, canvasElBack.width, canvasElBack.height)
		ctxFront.clearRect(0, 0, canvasElBack.width, canvasElBack.height)

		const gravity = 980

		confettiItems.forEach((item, itemIndex) => {
			item.x += item.xVel * elapsedS
			item.y += item.yVel * elapsedS

			if (
				item.x + item.size < 0 ||
				item.x - item.size > canvasElBack.width ||
				item.y - item.size > canvasElBack.height
			) {
				confettiItems.splice(itemIndex, 1)
				return
			}

			item.yVel += gravity * elapsedS

			const aspectRatio = item.asset.image.naturalHeight / item.asset.image.naturalWidth

			const renderWidth = item.size
			const renderHeight = item.size * aspectRatio

			const ctx = item.yVel > 0 ? ctxFront : ctxBack

			ctx.save()

			const opaqueHeight = canvasElBack.height * 0.65
			const fadeHeight = canvasElBack.height - opaqueHeight

			ctx.globalAlpha = item.y > opaqueHeight ? 1 - (item.y - opaqueHeight) / fadeHeight : 1

			ctx.translate(item.x, item.y)
			ctx.rotate(item.x * 0.05)

			ctx.drawImage(
				item.asset.image,
				-renderWidth / 2,
				-renderHeight / 2,
				renderWidth,
				renderHeight
			)

			ctx.restore()
		})
	}

	function resize() {
		canvasElFront.width = canvasElBack.width = window.innerWidth
		canvasElFront.height = canvasElBack.height = window.innerHeight
	}

	function randRange(min: number, max: number) {
		return min + random() * abs(max - min)
	}

	function randRangeInt(min: number, max: number) {
		return round(randRange(min, max))
	}

	function loadAsset(src: string): Asset {
		const asset: Asset = {
			state: 'loading',
			image: new Image()
		}

		asset.image.onload = () => {
			asset.state = 'loaded'
		}

		asset.image.src = src

		return asset
	}
</script>

<canvas class="back" bind:this={canvasElBack} />
<canvas class="front" bind:this={canvasElFront} />
<button on:click={fireConfetti}>Fire confetti</button>

<style lang="scss">
	canvas {
		position: fixed;
		inset: 0;
		pointer-events: none;
	}

	.front {
		z-index: 2;
	}

	button {
		position: fixed;
		inset: auto;
	}
</style>
