<script lang="ts">
	import { onMount } from 'svelte'

	onMount(() => {
		const fadeInElements = document.querySelectorAll<HTMLElement>('.fade-in')

		fadeInElements.forEach((element) => {
			const endOpacity = element.style.opacity
			const endTransform = element.style.transform
			const endTransitionDelay = element.style.transitionDelay
			const endTransitionDuration = element.style.transitionDuration
			const endTransitionTimingFunction = element.style.transitionTimingFunction
			const endTransitionProperty = element.style.transitionProperty
			const endWillChange = element.style.willChange

			const startOpacity = element.getAttribute('data-start-opacity') ?? '0'
			const startTransform = element.getAttribute('data-start-transform') ?? 'translateY(15px)'

			const threshold = element.getAttribute('data-threshold')
				? parseFloat(element.getAttribute('data-threshold')!)
				: 0.25

			element.style.opacity = startOpacity
			element.style.transform = startTransform
			element.style.transitionDuration = '1.25s'
			element.style.transitionTimingFunction = 'var(--ease-out--cubic)'
			element.style.transitionProperty = 'opacity, transform'
			element.style.willChange = 'opacity, transform'

			if (element.getAttribute('data-delay')) {
				element.style.transitionDelay = `${element.getAttribute('data-delay')}s`
			}

			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							element.style.opacity = endOpacity
							element.style.transform = endTransform

							setTimeout(() => {
								element.style.transitionDelay = endTransitionDelay
								element.style.transitionDuration = endTransitionDuration
								element.style.transitionTimingFunction = endTransitionTimingFunction
								element.style.transitionProperty = endTransitionProperty
								element.style.willChange = endWillChange
							}, 1500)

							observer.unobserve(element)
						}
					})
				},
				{ threshold }
			)

			observer.observe(element)
		})
	})
</script>
