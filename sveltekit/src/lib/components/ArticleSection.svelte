<script lang="ts">
	export let section: Section;
	export let vertical: boolean;
</script>

{#if section.type === 'layout'}
	<div class="layout-section" style="flex-direction: {vertical ? 'column' : 'row'};">
		{#each section.content as subsection}
			<svelte:self section={subsection} vertical={!vertical} />
		{/each}
	</div>
{:else if section.type === 'image'}
	<div class="image-wrapper">
		<img src={section.content.toString()} alt="a bad drawing" />
	</div>
{:else if section.type === 'paragraph'}
	<div class="paragraph">
		{section.content}
	</div>
{:else if section.type === 'title'}
	<h3>{section.content}</h3>
{/if}

<style>
	h3 {
		margin: 0;
		font-weight: 900;
		font-style: italic;
		font-size: 1.5rem;
		text-align: center;
	}
	.layout-section {
		display: flex;
		margin: 1rem;
	}

	.image-wrapper {
		display: flex;
		align-items: center;
		min-width: calc(32px + ((100% - 176px) / 6 * 2));
	}
	img {
		object-fit: contain;
		width: 100%;
	}
	.paragraph {
		font-size: 1.7rem;
		margin: 0 1rem;
		text-indent: 3rem;
	}
</style>
