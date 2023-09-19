<script lang="ts">
	import PdfViewer from 'svelte-pdf';

	export let data;

	let pdfViewer: PdfViewer;
	const handleKeydown = (e: KeyboardEvent) => {
		e.preventDefault;
		if (e.code == 'ArrowRight') pdfViewer.nextPage();
		if (e.code == 'ArrowLeft') pdfViewer.prevPage();
	};
</script>

<div class="wrapper" on:keydown={handleKeydown}>
	<button class="nav prev" on:click={pdfViewer.prevPage()} />
	<PdfViewer bind:this={pdfViewer} url={data.pdf_url} showBorder={false} />
	<button class="nav next" on:click={pdfViewer.nextPage()} />
</div>

<style>
	.nav {
		position: absolute;
		height: 100%;
		width: 5rem;
		background-color: transparent;
		border: none;
	}
	.wrapper {
		position: relative;
		width: 100%;
	}
	.next {
		top: 0;
		right: 0;
		width: 70%;
	}
</style>
