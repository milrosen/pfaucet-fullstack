<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	import Link from '$lib/components/Link.svelte';
	import Complaints from '$lib/components/Complaints.svelte';
	import Contact from './Contact.svelte';
	let currentAnim = ' ';
</script>

<svelte:window
	on:wheel={() => {
		if (currentAnim !== ' ') return;
		if (Math.random() < 0.6) {
			currentAnim = 'drop-wiggle';
		} else {
			currentAnim = 'drop-fall';
		}
		setTimeout(() => {
			currentAnim = ' ';
		}, 3500);
	}}
/>

<Contact
	showModal={$page.url.searchParams.has('contact')}
	closeModal={() => {
		goto(`?`, { noScroll: true });
	}}
/>

<div class="container">
	<img src="/faucet.png" class="faucet" alt="" />
	<div class="square" />
	<svg viewBox="0 0 144 264" class={`drop ${currentAnim}`}>
		<path
			id="path382"
			style="stroke-width:1.30264"
			d="m 49.808954,0 c 3.44659,0.789 4.51126,3.07251 4.70312,7.71484 0.50511,12.2218 -5.6389,22.2617 -10.22656,32.7793 -14.73029,33.77046 -31.46902,66.64045 -40.1503897,102.80664 -8.3412,34.74902 -4.85947004,66.43718 17.7831997,95.22266 16.99621,21.60715 40.22427,30.03513 66.6211,23.4414 27.428676,-6.85149 47.270986,-24.39255 53.373036,-52.29882 5.07577,-23.21296 1.19353,-46.38662 -6.70312,-68.66211 C 125.40393,113.34436 114.3336,86.127 102.95348,59.03516 97.389124,45.78838 91.708664,32.57875 86.553094,19.18164 81.926174,7.1583 84.326004,1.40613 94.582384,0.08398 Z m 13.37695,2.65039 c 3.139,0.59619 4.82238,2.80041 4.60156,5.42188 -1.83097,21.73684 8.9008,40.61748 14.55664,60.62109 5.11396,18.08714 10.95598,35.98181 16.47657,53.96094 6.407066,19.47064 9.063896,38.38078 7.599606,57.75586 -1.51565,20.05377 -12.370196,34.46608 -30.164066,43.67968 -14.65513,7.58845 -35.49428,1.31693 -45.17773,-12.14648 -17.02284,-23.66791 -20.14075,-49.26319 -14.7793,-77.36328 6.21231,-32.55929 20.68484,-61.96841 33.46875,-92.08203 4.3843,-10.32754 7.39567,-20.93625 9.98242,-31.74414 0.66456,-2.77668 0.66162,-5.99535 3.43555,-8.10352 z"
		/>
	</svg>
	<div class="title">
		<h2>The</h2>
		<h1>Plumber's Faucet</h1>
	</div>

	<div class="button-container">
		<Link href={'/'} span={'Home'} />
		<Link href={''} span={'Contact'} onClick={() => goto('?contact', { noScroll: true })} />
		<Link href={'/issues'} span={'Issues'} />
		<Complaints />
	</div>
</div>

<style>
	.faucet {
		fill: var(--black);
		z-index: 3;
	}
	.square {
		z-index: 2;
		position: fixed;
		display: block;
		background-color: var(--cream);
		top: 0;
		left: 0;
		height: 55px;
		width: 50px;
	}
	.drop {
		position: fixed;
		fill: var(--black);
		top: 54px;
		left: 22px;
		height: 15px;
		transform-origin: top center;
		z-index: 1;
	}
	:global(.drop-wiggle) {
		animation-name: wiggle;
		animation-duration: 2s;
	}
	:global(.drop-fall) {
		animation-name: fall;
		animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
		animation-duration: 3s;
	}

	.title {
		font-family: 'dimbo';
	}
	h1 {
		font-size: 4em;
		margin: 0;
		display: inline;
		letter-spacing: -2px;
	}
	h2 {
		font-size: 3em;
		margin: 0;
		margin-top: auto;
		margin-left: 0.5rem;
		margin-right: 0rem;
		display: inline;
	}
	.container {
		overflow: hidden;
		position: fixed;
		top: 0px;
		padding-top: 8px;
		background: var(--cream);
		width: 100%;
		color: var(--black);
		display: flex;
		z-index: 2;
		height: 4.5rem;
		border-bottom: solid 3px;
	}
	.button-container {
		flex: 1;
		display: flex;
		justify-content: right;
		gap: 1rem;
	}
	.link {
		height: 100%;
		vertical-align: middle;
	}

	@media only screen and (max-width: 1050px) {
		.title {
			display: none;
		}
	}

	@media only screen and (max-width: 550px) {
		.container {
			height: 3rem;
		}
		.faucet {
			height: 2.5rem;
		}
		.drop {
			top: 33px;
			left: 12px;
			height: 8px;
		}
		.square {
			height: 30px;
			width: 30px;
		}
	}

	@keyframes fall {
		0% {
			opacity: 1;
		}
		19% {
			transform: translateY(110vh);
			opacity: 0;
		}
		20% {
			transform: translateY(-100%);
		}
		40% {
			opacity: 1;
		}
		100% {
			transform: translateY(0vh);
		}
	}

	@keyframes wiggle {
		0% {
			transform: rotate(0deg);
		}
		11% {
			transform: rotate(-25deg);
		}
		20% {
			transform: rotate(17deg);
		}
		31% {
			transform: rotate(-11deg);
		}
		41% {
			transform: rotate(8deg);
		}
		52% {
			transform: rotate(-5deg);
		}
		63% {
			transform: rotate(3deg);
		}
		74% {
			transform: rotate(-2deg);
		}
		84% {
			transform: rotate(1deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
</style>
