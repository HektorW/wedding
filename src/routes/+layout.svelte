<svelte:head>
	<meta name="theme-color" content="hsl(36, 100%, 94%)" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="manifest" href="/site.webmanifest" />
	<title>Westrup Wallin - Wedding</title>
</svelte:head>

<main>
	<slot />
</main>

<style>
	:root {
		--ease--in-out--back: cubic-bezier(0.68, -0.55, 0.27, 1.55);
		--ease-out--cubic: cubic-bezier(0.22, 0.61, 0.36, 1);
		--ease--in-out--cubic: cubic-bezier(0.65, 0.05, 0.36, 1);

		--ease-in-sine: cubic-bezier(0.47, 0, 0.75, 0.72);
		--ease-in-quad: cubic-bezier(0.55, 0.09, 0.68, 0.53);
		--ease-in-cube: cubic-bezier(0.55, 0.06, 0.68, 0.19);

		/* Typography */
		--heading--l: 10vh;
		--heading--m: 2.5rem;
		--heading--s: 1.75rem;

		/* --heading--l--desktop: 5rem; */

		--body--m: 1.125rem;

		/* Colors */
		--color--green: hsl(134, 100%, 87%);
		--color--peach: hsl(358, 97%, 85%);
		--color--a: hsl(34, 100%, 79%);
		--color--b: #84fff8;
		--color--c: var(--color--green);
		--color--d: var(--color--peach);
		--color--e: #bde9ff;

		--color--pbd--blue: hsl(201, 45%, 80%);
		--color--pbd--peach: hsl(21, 100%, 81%);
		--color--pbd--sand: hsl(36, 100%, 94%);

		/* --color--bg: hsl(0, 0%, 100%); */
		--color--bg: var(--color--pbd--sand);
		/* --color--bg: var(--gradient--color--2); */
		--color--text: hsl(0, 0%, 26%);
		--color--text--strong: hsl(0, 0%, 13%);

		/* Layers */
		--layer--background: -1;
		--layer--content: 0;

		/* Background */
		--root--color: var(--color--pbd--sand);
		/* --gradient--color--1: var(--color--pbd--blue); */
		/* --gradient--color--2: var(--color--pbd--sand); */
		--gradient--color--1: var(--color--peach);
		--gradient--color--2: var(--color--green);
		--gradient--opacity: 0.75;
		--gradient--stop--1: 20%;
		--gradient--stop--2: 80%;
		--texture--opacity: 0.25;

		/* Grid */
		--grid--columns: 8;
		--grid--gutter: 2rem;
		--grid--padding--block: 3rem;
		--grid--padding--inline: 3rem;

		/* Content */
		--content--padding--block: 10rem;
		--content--padding--inline: 1rem;
		--content--padding: 1rem;
	}

	@media screen and (min-width: 40em) {
		:root {
			--heading--m: 4rem;
			--heading--s: 2.5rem;
			--body--m: 1.25rem;

			--content--padding--block: 15rem;
			--content--padding--inline: calc((100vw - 38rem) / 2);
		}
	}

	@font-face {
		font-family: 'MaisonNeue';
		src: url(/font/MaisonNeueWEB-Book.woff2);
	}

	:global(html) {
		background-color: var(--color--bg);
		box-sizing: border-box;
		color: var(--color--text);
		font-family: 'MaisonNeue', 'Open Sans', sans-serif;
		-webkit-font-smoothing: antialiased;
		letter-spacing: -0.01em;
		line-height: 1.5;
		overflow-x: hidden;

		/* &.gradient {
			background: radial-gradient(
				circle at left 10% top 10%,
				var(--color--bg) var(--gradient--stop--1),
				var(--gradient--color--2) var(--gradient--stop--2)
			);
		} */
	}

	:global(*),
	:global(*::after),
	:global(*::before) {
		box-sizing: inherit;
	}

	:global(body) {
		font-size: var(--body--m);
		margin: 0;
	}

	:global(h1),
	:global(h2),
	:global(h3),
	:global(h4) {
		font-weight: 400;
		margin: 0;
	}

	:global(img) {
		max-width: 100%;
	}

	:global(a) {
		color: inherit;
	}

	main {
		overflow-x: hidden;
	}
</style>
