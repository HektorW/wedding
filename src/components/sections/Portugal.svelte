<script>
	import InfiniteMarquee from '../animations/InfiniteMarquee.svelte'
</script>

<section>
	<div class="marquees fade-in">
		<InfiniteMarquee text="portugal 🇵🇹 " direction={-1} velocity={20} />
		<InfiniteMarquee text="ericeira . " direction={1} velocity={25} />
	</div>

	<p class="fade-in" data-delay="0.2">Come meet us in Portugal.</p>
	<p class="fade-in" data-delay="0.3">In the small coastal village of Ericeira.</p>

	<img
		class="fade-in"
		alt="A tree"
		data-delay="0.4"
		data-threshold="0"
		src="/Tree.webp"
		srcset="/Tree.webp, /Treex2.webp 2x"
	/>
</section>

<style lang="scss">
	section {
		padding-bottom: calc(var(--content--padding--block) + 15rem);
		padding-top: var(--content--padding--block);
		position: relative;
	}

	img {
		bottom: -1rem;
		max-width: none;
		position: absolute;
		right: -4rem;
		width: 35rem;
	}

	p {
		margin: 0;
		padding-inline: var(--content--padding--inline);
	}

	.marquees {
		font-size: max(4.5rem, 10vw);
		line-height: 1.2;
	}

	@media screen and (min-width: 40em) {
		img {
			width: 43rem;
		}
	}

	@media screen and (min-width: 50em) {
		img {
			right: -17rem;
			width: 53rem;
			z-index: 1;
		}
	}

	@media screen and (min-width: 88em) {
		img {
			right: -10rem;
			width: 63rem;
		}
	}
</style>
