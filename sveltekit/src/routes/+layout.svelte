<script lang="ts">
	import Header from '$lib/components/Header.svelte';
</script>

<Header />
<div class="under-construction">Under Construction</div>
<slot />

<style>
	.under-construction {
		position: fixed;
		text-transform: uppercase;
		color: black;
		background-color: #f9d63d;
		border: 5px dashed black;
		width: 200vw;
		z-index: 10;
		text-align: center;
		transform-origin: center;
		transform: translate(-35%, 10%) rotate(-12.5deg);
		font-size: 2rem;
	}
	@media only screen and (max-width: 600px) {
		.under-construction {
			transform: translate(-25%, 80vh) rotate(-12.5deg);
			width: 200vw;
		}
	}
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
