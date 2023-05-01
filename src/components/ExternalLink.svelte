<script lang="ts">
	export let href: string = ''
</script>

<a {href} {...$$restProps} target="_blank">
	<slot />
</a>

<style lang="scss">
	a {
		border: 2px solid currentColor;
		box-shadow: 2px 2px 0 1px #fff;
		display: inline-flex;
		overflow: hidden;
		padding: 0.5em 1em;
		position: relative;
		text-decoration: none;

		&::after {
			background: currentColor;
			content: '';
			display: block;
			height: 1em;
			position: absolute;
			right: 0;
			top: 0;
			transform: translate(100%, -100%) rotate(45deg);
			transition: transform 0.25s var(--ease-out--cubic);
			width: 1em;
		}

		&:hover,
		&:focus {
			&::after {
				transform: translate(50%, -50%) rotate(45deg);
			}
		}
	}
</style>
