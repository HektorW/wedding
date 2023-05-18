<script>
	import Stars from '../icons/Stars.svelte'
</script>

<section>
	<img class="fade-in_" src="/us/hektor.jpg" alt="Hektor smiling" />
	<img class="fade-in_" src="/us/tilde.jpg" alt="Tilde smiling" />
	<img
		class="fade-in_"
		data-threshold="0"
		src="/us/tilde_hektor_looking_at.jpg"
		alt="Tilde smiling"
	/>

	<div class="name fade-in_">
		westrup<br />
		wallin <Stars />
	</div>

	<div class="date fade-in_" data-threshold="0">
		<div class="year">2024</div>
		<div class="month">1-3 July</div>
	</div>
</section>

<style lang="scss">
	section {
		--gap: 1rem;
		--appear-delay: 0.15s;
		--appear-duration: 1.25s;
		--image-border-radius: 40px;
		--base-font-size: 1vw;

		display: grid;
		gap: var(--gap);
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 65vh auto auto 25vh;
		padding: var(--content--padding) var(--content--padding) 10rem;
	}

	img,
	.name,
	.date {
		animation: fade-in var(--appear-duration) var(--ease-out--cubic) both;
	}

	img {
		height: 100%;
		object-fit: cover;
		/* object-position: center 25%; */
		overflow: hidden;
		width: 100%;

		&:nth-of-type(1) {
			animation-delay: calc(var(--appear-delay) * 0);
			border-top-left-radius: var(--image-border-radius);
			grid-column: 1 / 2;
			grid-row: 1 / 2;
		}

		&:nth-of-type(2) {
			animation-delay: calc(var(--appear-delay) * 1);
			border-bottom-right-radius: var(--image-border-radius);
			grid-column: 2 / 3;
			grid-row: 1 / 2;
		}

		&:nth-of-type(3) {
			animation-delay: calc(var(--appear-delay) * 4);
			border-top-left-radius: var(--image-border-radius);
			border-bottom-right-radius: var(--image-border-radius);
			grid-column: 1 / 3;
			grid-row: 4 / 5;
			transform: translateY(-10%);
		}
	}

	.name,
	.date {
		line-height: 1;
	}

	.name {
		animation-delay: calc(var(--appear-delay) * 2);
		font-size: calc(var(--base-font-size) * 15);
		grid-column: 1 / 3;
		grid-row: 2 / 3;
	}

	.date {
		animation-delay: calc(var(--appear-delay) * 3);
		animation-name: fade-in-date-mobile;
		font-size: calc(var(--base-font-size) * 10);
		grid-column: 1 / 3;
		grid-row: 3 / 4;
		text-align: right;
		transform: translateY(-50%);
	}

	@media screen and (min-width: 60em) {
		section {
			--base-font-size: min(0.85rem, 0.8vw);
			--gap: 1.5rem;

			grid-template-columns: repeat(4, 1fr);
			grid-template-rows: repeat(6, 1fr);
			height: 100vh;
			margin-inline: auto;
			max-height: 1000px;
			max-width: 1600px;
			padding-block: 5rem;

			img {
				&:nth-child(1) {
					animation-delay: calc(var(--appear-delay) * 1);
					grid-column: 3 / 4;
					grid-row: 1 / 5;
				}

				&:nth-child(2) {
					animation-delay: calc(var(--appear-delay) * 2);
					border-bottom-right-radius: 0;
					grid-column: 4 / 5;
					grid-row: 1 / 5;
				}

				&:nth-child(3) {
					animation-delay: calc(var(--appear-delay) * 4);
					border-top-left-radius: 0;
					grid-column: 3 / 5;
					grid-row: 5 / 7;
					transform: none;
				}
			}

			.name {
				align-self: flex-end;
				animation-delay: calc(var(--appear-delay) * 3);
				grid-column: 1 / 3;
				grid-row: 4 / 7;
			}

			.date {
				align-self: flex-start;
				animation-delay: calc(var(--appear-delay) * 0);
				animation-name: fade-in;
				font-size: 4rem;
				grid-column: 1 / 3;
				grid-row: 1 / 4;
				transform: none;
			}
		}
	}

	@keyframes fade-in {
		from {
			opacity: 0;
			transform: translateY(15px);
		}
	}

	@keyframes fade-in-date-mobile {
		from {
			opacity: 0;
			transform: translateY(calc(-50% + 15px));
		}
	}
</style>
