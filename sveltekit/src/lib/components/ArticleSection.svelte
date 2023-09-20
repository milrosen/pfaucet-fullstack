<script lang="ts">
	export let section: Section;
	export let vertical: boolean;
</script>

{#if section.type === 'layout'}
	<div class="layout-section {vertical ? 'column' : 'vertical'}">
		{#each section.content as subsection}
			<svelte:self section={subsection} vertical={!vertical} />
		{/each}
	</div>
{:else if section.type === 'image'}
	<div class="image-wrapper">
		<img src={section.content.toString()} alt="a bad drawing" />
	</div>
{:else if section.type === 'paragraph'}
	<div class="paragraph fulljustify">
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
	.fulljustify {
		text-align: justify;
	}
	.fulljustify:after {
		content: '';
		display: inline-block;
		max-width: 1px;
	}
	.vertical {
		flex-direction: vertical;
	}

	.column {
		flex-direction: column;
	}
	@media only screen and (max-width: 1050px) {
		.vertical {
			flex-direction: column;
		}
		.layout-section {
			margin: 1rem 0;
		}
		.paragraph {
			margin: 0;
			font-size: 1.2rem;
		}
	}
</style>
