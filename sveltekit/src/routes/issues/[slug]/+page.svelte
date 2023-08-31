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
	<embed type="application/pdf" src={data.pdf_url} width={innerWidth} height={innerHeight} />
</div>

<style>
	.wrapper {
		display: flex;
	}
</style>
