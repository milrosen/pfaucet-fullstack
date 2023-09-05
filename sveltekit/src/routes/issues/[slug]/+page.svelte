<script lang="ts">
	import { onMount } from 'svelte';
	export let data;

	let innerWidth: number, innerHeight: number;

	onMount(() => {
		innerWidth = window.innerWidth;
		innerHeight = window.innerHeight;
	});
</script>

<div class="wrapper">
	<object
		type="application/pdf"
		data={data.pdf_url}
		width={innerWidth}
		height={innerHeight}
		title={data.pdf_url}
	>
		<a href={data.pdf_url}>alt</a></object
	>
</div>

<style>
	.wrapper {
		display: flex;
	}
</style>
