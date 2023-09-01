<script lang="ts">
	export let span: string;
	export let href: string;
	export let onClick = (e: Event) => {};
</script>

<a {href} on:click={onClick}>
	<span>{span}</span>
</a>

<style>
	a {
		text-decoration: none;
		text-transform: uppercase;
		display: flex;
		align-items: center;
		color: var(--black);
	}
</style>
