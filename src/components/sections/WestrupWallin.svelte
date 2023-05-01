<script>
	import Stars from '../icons/Stars.svelte'
</script>

<section>
	<div class="image-grid">
		<img src="/us/hektor.jpg" alt="Hektor smiling" />
		<img src="/us/tilde.jpg" alt="Tilde smiling" />
		<!-- <img src="/us/tilde_hektor.jpg" alt="Tilde and Hektor smiling together" /> -->
	</div>

	<div class="name">
		westrup<br />
		wallin <Stars />
	</div>

	<div class="date">
		<div class="year">2024</div>
		<div class="month">1-3 July</div>
	</div>
</section>

<style lang="scss">
	section {
		--gap: 1rem;
		--appear-delay: 0.25s;
		--appear-duration: 1s;
		--image-border-radius: 40px;

		padding-bottom: 10rem;
	}

	.image-grid {
		--image-height: 65vh;

		align-items: stretch;
		display: grid;
		gap: var(--gap);
		grid-template-columns: 1fr 1fr;
		grid-template-rows: calc(var(--image-height) - var(--gap) * 2);
		padding: var(--gap);
	}

	img,
	.name,
	.date {
		--ease-in-sine: cubic-bezier(0.47, 0, 0.75, 0.72);
		--ease-in-quad: cubic-bezier(0.55, 0.09, 0.68, 0.53);
		--ease-in-cube: cubic-bezier(0.55, 0.06, 0.68, 0.19);

		animation: fade-in var(--appear-duration) var(--ease-in-sine) both;
	}

	img {
		height: 100%;
		object-fit: cover;
		object-position: center 25%;
		width: 100%;

		&:nth-of-type(1) {
			animation-delay: calc(var(--appear-delay) * 0);
			border-top-left-radius: var(--image-border-radius);
		}

		&:nth-of-type(2) {
			animation-delay: calc(var(--appear-delay) * 1);
			border-bottom-right-radius: var(--image-border-radius);
		}
	}

	.name {
		animation-delay: calc(var(--appear-delay) * 2);
		font-size: 15vw;
		line-height: 1;
		padding-inline: var(--gap);
	}

	.date {
		animation-delay: calc(var(--appear-delay) * 3);
		font-size: 10vw;
		line-height: 1;
		text-align: right;
		padding-inline: var(--gap);
		transform: translateY(-50%);
	}

	@keyframes fade-in {
		from {
			opacity: 0;
		}
	}
</style>
