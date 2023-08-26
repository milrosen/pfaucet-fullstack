<script>
	import Card from '$lib/components/Card.svelte';
	import BigCard from '$lib/components/BigCard.svelte';
	import Longcard from '$lib/components/Longcard.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	const cards = data.articles;
	console.log(cards);
</script>

<div class="articles-grid">
	{#each cards as card (cards.indexOf(card))}
		{#if cards.indexOf(card) == 0} <BigCard {card} />{/if}
		{#if cards.indexOf(card) == 1 || cards.indexOf(card) == 2} <Longcard {card} />{/if}
		{#if cards.indexOf(card) >= 3} <Card {card} />{/if}
	{/each}
</div>

<h1>{data.post}</h1>

<style>
	.articles-grid {
		display: grid;
		gap: 2px;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-template-rows: 0.8fr 0.8fr 1fr;
		background-color: var(--black);
		margin: 2rem;
		margin-top: 0;
		height: 65vw;
	}

	@media only screen and (max-width: 1050px) and (min-width: 600px) {
		.articles-grid {
			height: 100vw;
			grid-template-columns: 1fr 1fr 1fr;
			grid-template-rows: 1fr 1fr 0.7fr 0.7fr;
		}
		:global(.articles-grid div:nth-child(1)) {
			order: 0;
		}
		:global(.articles-grid div:nth-child(2)) {
			order: 4;
		}
		:global(.articles-grid div:nth-child(3)) {
			order: 5;
		}
		:global(.articles-grid div:nth-child(4)) {
			order: 1;
		}
		:global(.articles-grid div:nth-child(5)) {
			order: 2;
		}
		:global(.articles-grid div:nth-child(6)) {
			order: 3;
		}
		:global(.articles-grid div:nth-child(7)) {
			order: 6;
		}
	}
	@media only screen and (max-width: 600px) {
		.articles-grid {
			height: 250vw;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
		}
	}
</style>
