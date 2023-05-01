<script>
	import InfiniteMarquee from '../animations/InfiniteMarquee.svelte'
</script>

<section>
	<img src="/Tree.png" />

	<p>We'll be seeing each other in:</p>

	<div class="marquees">
		<InfiniteMarquee text="portugal 🇵🇹 " direction={-1} velocity={20} />
		<InfiniteMarquee text="ericeira . " direction={1} velocity={25} />
	</div>
</section>

<style lang="scss">
	section {
		padding-block: var(--content--padding--block);
		position: relative;
	}

	img {
		max-width: none;
		position: absolute;
		right: -100%;
		top: 25rem;
		transform: rotate(354deg);
		width: 170vw;
		z-index: -1;
	}

	p {
		margin: 0;
		padding-inline: var(--content--padding--inline);
	}

	.marquees {
		font-size: max(4rem, 10vw);
	}

	@media screen and (min-width: 40em) {
		img {
			right: -70rem;
			width: 103rem;
		}
	}
</style>
