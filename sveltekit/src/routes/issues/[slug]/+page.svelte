<script lang="ts">
	export const ssr = false
	
	export let data;
</script>

<object title="issuePdf" data={data.pdf_url} class="document"/>

<style>
	.document {
		max-width: 50rem;
		width: 100vw;
		height: 100vh;
		display: block;
		margin: 0 auto 0 auto;
	}
</style>
