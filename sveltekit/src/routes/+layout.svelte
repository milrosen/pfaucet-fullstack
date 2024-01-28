<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Header />
<slot />
<Footer />

<style>
	:root {
		--black: #282a28;
		--cream: #fff;
		--red: #e64042;
	}

	:global(body) {
		background-color: white;
		margin: 0;
		box-shadow: 100vw 0px inset white, 0px -50px white;
		margin-top: 5rem;
		background-color: #282a28;
	}
</style>
