<script lang="ts">
	export let card: Article;
</script>

<div class="card">
	<a href={card.link}>
		<p>{card.title}</p>
		<p2>{card.blurb}</p2>
		<p3>{card.authors.split(',')}</p3>
	</a>
	<div class="bg">
		<img src={card.thumbnail} alt={''} />
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
		text-align: center;
		margin: 0;
		padding: 0px 5px;
		transform: translateY(-20px);
		background-color: var(--cream);
		text-transform: uppercase;
		font-size: 2vmax;
	}
	p2 {
		color: var(--red);
		text-transform: uppercase;
		border-style: solid;
		border-width: 0px 2px;
		padding: 0px 3px;
		font-size: .7rem;
		transform: rotate(-8deg) translateY(-15px);
	}
	p3 {
		opacity: 0.5;
		font-size: 0.4rem;
	}
	.card {
		width: 100%;
		height: 100%;
		position: relative;
		color: var(--black);
		justify-self: center;
		z-index: 1;
		background-color: var(--cream);
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
		transform: translateY(-2%);
	}
</style>
