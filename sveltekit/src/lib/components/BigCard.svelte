<script lang="ts">
	export let card: First_Issue;
</script>

<div class="big-card">
	<a href={card.link}>
		<p>{card.title}</p>
		<p2>{card.blurb}</p2>
		<p4>{card.paragraph}</p4>
		<p3>{card.authors}</p3>
	</a>
	<div class="bg">
		<img src={card.thumbnail} alt={card.title} />
	</div>
</div>

<style>
	a {
		display: flex;
		flex-direction: column;
		text-decoration: none;
		color: inherit;
		align-items: center;
		position: absolute;
		bottom: 0;
		margin-bottom: 5px;
		width: 100%;
		background-color: var(--cream);
	}
	p {
		font-family: 'dimbo';
		display: block;
		margin: 0.5em;
		text-align: center;
		padding: 0px 10px;
		transform: translateY(-5px);
		background-color: var(--cream);
		text-transform: uppercase;
		font-size: 4.5vmax;
		box-shadow: 0.5px 0.5px var(--black), 1px 1px var(--black), 1.5px 1.5px var(--black),
			2px 2px var(--black), 2.5px 2.5px var(--black), 3px 3px var(--black);
		border: 2px solid var(--black);
	}
	p2 {
		color: var(--red);
		text-transform: uppercase;
		border-style: solid;
		border-width: 0px 2px;
		padding: 0px 3px;
		font-size: 1rem;
		transform: rotate(-5deg) translateY(-6px);
		display: inline-block;
	}
	p3 {
		opacity: 0.5;
		font-size: 0.4rem;
	}
	p4 {
		font-size: 0.7rem;
		font-weight: lighter;
		opacity: 0.8;
		padding: 0.7rem;
		letter-spacing: 1.2px;
		text-align: center;
	}
	.big-card {
		width: 100%;
		height: 100%;
		position: relative;
		color: var(--black);
		justify-self: center;
		z-index: 1;
		background-color: var(--cream);
		grid-column: span 2;
		grid-row: span 2;
	}
	.bg {
		position: absolute;
		inset: 1em;
		overflow: hidden;
		z-index: -1;
	}
	img {
		width: 100%;
		object-fit: cover;
		transform: scale(110%) translateY(-30%);
	}
</style>
