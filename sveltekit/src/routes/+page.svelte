<script>
	import Card from '$lib/components/Card.svelte';
	import BigCard from '$lib/components/BigCard.svelte';
	import StaffCard from '$lib/components/StaffCard.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	const cards = JSON.parse(data.cards);
	const staff = data.staff;
</script>

<div class="articles-grid">
	{#each cards as card (cards.indexOf(card))}
		{#if cards.indexOf(card) == 0} <BigCard {card} />{/if}
		{#if cards.indexOf(card) == 1 || cards.indexOf(card) == 2} <Card {card} />{/if}
	{/each}
</div>

<div class="call-to-action">
	You can implement something already or not, but it will basically just say: <b
		>“The Faucet is accepting submissions for its next issue: “The TOPIC Issue.”</b
	> If you would like to submit any articles, art, or anything of comedic nature, please visit our Contact
	page and send us what you’ve got!”
</div>
<div class="staff-grid">
	{#each staff as staffer (staff.indexOf(staffer))}
		<StaffCard staff={staffer} />
	{/each}
</div>

<style>
	.call-to-action {
		margin: 3rem;
		font-size: large;
	}
	.articles-grid {
		display: grid;
		gap: 2px;
		grid-template-columns: 1fr 1fr 1fr;
		background-color: var(--black);
		margin: 0 2rem;
		height: 90vh;
	}

	.staff-grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 2px;
		margin: 2rem;
	}

	@media only screen and (max-width: 1050px) and (min-width: 600px) {
		.staff-grid {
			grid-template-columns: 1fr 1fr;
		}
	}
	@media only screen and (max-width: 600px) {
		.articles-grid {
			height: 150vw;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr 1fr 1fr;
		}
		.staff-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
