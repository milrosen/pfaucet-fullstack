<script lang="ts">
	import Header from '$lib/components/Header.svelte';
</script>

<Header />
<slot />

<style>
	:root {
		--black: #282a28;
		--cream: #fff;
		--red: #e64042;
	}

	:global(body) {
		background-color: var(--cream);
		margin-top: 0;
	}
</style>
