<script lang="ts">
	import ArticleSection from '$lib/components/ArticleSection.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	const { title, authors } = JSON.parse(data.article);
	const article_content: Section = JSON.parse(data.article_json);
</script>

<div class="article">
	<div class="title-section">
		<h1>{title}</h1>
		<h2>By {authors}</h2>
	</div>
	<div class="article-body">
		<ArticleSection section={article_content} vertical />
	</div>
</div>

<style>
	.article {
		margin: 1rem;
		max-width: calc(100vw - (24px * 2 + 8px) - 300px);
		color: var(--black);
		padding: 3rem;
	}
	.title-section {
		font-family: 'dimbo';
	}
	.article-body {
		padding: 0 3rem;
	}
	h1 {
		font-size: 3.5rem;
		text-align: center;
		margin-bottom: 1rem;
	}
	h2 {
		margin-left: auto;
		margin-right: 3rem;
		width: fit-content;
	}
	@media only screen and (max-width: 1050px) {
		.article {
			max-width: 100%;
		}
		.article-body {
			padding: 1rem;
		}
		h1 {
			font-size: 2rem;
		}
		.article {
			padding: 0;
		}
	}
</style>
