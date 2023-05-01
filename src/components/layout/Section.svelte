<script lang="ts">
	export let rows: number = 10
</script>

<!-- <section style:grid-template-rows={`repeat(${rows}, auto)`}> -->
<section>
	<slot />
</section>

<style lang="scss">
	section {
		align-items: center;
		display: grid;
		grid-template-columns: [gutter-start] var(--grid--gutter) repeat(var(--grid--columns), 1fr) [gutter-end] var(
				--grid--gutter
			);
		margin-inline: auto;
		max-width: 70ch;
		min-height: 100vh;
		padding-block: var(--grid--padding);
	}
</style>
