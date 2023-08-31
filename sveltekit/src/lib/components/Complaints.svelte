<script lang="ts">
	let complaints: HTMLAnchorElement;
	let flying = false;
	let minleft: number, maxleft: number, mintop: number, maxtop: number;
	let flynumber = 0;

	let moveAway = () => {
		if (flying && flynumber <= 6) {
			complaints.style.left = Math.random() * (maxleft - minleft) + minleft + 'px';
			complaints.style.top = Math.random() * (maxtop - mintop) + mintop + 'px';
			flynumber++;
		} else if (!flying) {
			let rect = complaints.getBoundingClientRect();

			minleft = -rect.left;
			maxleft = window.innerWidth - rect.right;
			mintop = 50;
			maxtop = window.innerHeight - rect.bottom;

			flying = true;
			moveAway();
		}
		if (flynumber == 7) {
			complaints.style.left = '0px';
			complaints.style.top = '0px';
		}
	};
</script>

<div>
	<a href="/complaints" on:mouseenter={moveAway} bind:this={complaints} on:click={moveAway}>
		<span>complaints</span>
	</a>
</div>

<style>
	a {
		text-decoration: none;
		text-transform: uppercase;
		color: var(--black);
		background-color: white;
		height: 100%;
		width: 100%;
		justify-content: center;
		align-items: center;
		display: flex;
		position: relative;
		top: 0;
		left: 0;
		transition: top 100ms linear, left 100ms linear;
		z-index: 10;
	}
	span {
		padding: 5px;
		margin: 0 1rem;
	}
</style>
