<script lang="ts">
	export let data;

	const newest_issue = JSON.parse(data.newest_issue);
	const issues: Issue[] = JSON.parse(data.first_page);
	const contributers = JSON.parse(data.contributers);
</script>

<div>
	<div class="first-issue">
		<a href={`/issues/${newest_issue.id}`}>
			<img src={newest_issue.thumbnail} alt="Test" class="first-issue-img" />
		</a>
		<div class="buttons">
			<p>{newest_issue.title}</p>
			<p2>{newest_issue.blurb}</p2>
			<p4>{newest_issue.paragraph}</p4>
		</div>
		<div class="contributors">
			<h1>Contributors:</h1>
			<h2>Editor-in-Chief</h2>
			<h3>{contributers.editor_in_chief}</h3>
			<h2>Editors & Executives</h2>
			<h3>{contributers.editors_and_executives.split(',').join('\n')}</h3>
			<h2>Publications Director</h2>
			<h3>{contributers.publications_director}</h3>
			<h2>Writers</h2>
			<h3>{contributers.writers.split(',').join('\n')}</h3>
			<h2>Illustrators</h2>
			<h3>{contributers.illustrators.split(',').join('\n')}</h3>
		</div>
	</div>
	<div class="issues-grid">
		{#each issues as issue}
			<a class="issue" href={`/issues/${issue.id}`}>
				<div>
					<img src={issue.thumbnail} alt={issue.title} class="issue-img" />
				</div>
				<div>{issue.title}</div>
				<div>
					{new Date(issue.date).toLocaleDateString('en-us', { year: 'numeric', month: 'long' })}
				</div>
			</a>
		{/each}
	</div>
</div>

<style>
	h3 {
		white-space: pre-line;
		margin: 0;
		margin-left: 3rem;
	}

	h2 {
		margin: 0;
		font-family: 'dimbo';
		font-size: 2.5rem;
	}
	.issue {
		padding: 1em;
		text-decoration: none;
		color: var(--black);
		min-width: 0;
	}
	.issue-img {
		width: 100%;
		object-fit: cover;
	}
	.issues-grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	}
	.first-issue {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
		padding-top: 3rem;
	}
	.first-issue > a {
		min-width: 0;
		grid-row-start: 1;
		grid-row-end: 3;
	}
	.first-issue-img {
		width: 100%;
		object-fit: cover;
	}

	.buttons {
		display: flex;
		flex-direction: column;
	}
	p {
		font-family: 'dimbo';
		display: block;
		margin: 0;
		padding: 0px 10px;
		transform: translateY(-20px);
		background-color: var(--cream);
		text-transform: uppercase;
		font-size: 4.5vmax;
		box-shadow: 0.5px 0.5px var(--black), 1px 1px var(--black), 1.5px 1.5px var(--black),
			2px 2px var(--black), 2.5px 2.5px var(--black), 3px 3px var(--black);
		border: 2px solid var(--black);
		text-align: center;
	}
	p2 {
		color: var(--red);
		text-transform: uppercase;
		border-style: solid;
		border-width: 0px 2px;
		padding: 0px 3px;
		font-size: 1rem;
		display: inline-block;
		margin-left: auto;
		margin-right: auto;
		transform-origin: center;
	}
	p3 {
		opacity: 0.5;
		font-size: 0.4rem;
	}

	@media only screen and (max-width: 600px) {
		.first-issue {
			grid-template-columns: 1fr 0.3fr;
			grid-template-rows: 0.3fr 1fr;
		}
		.first-issue > a {
			grid-row-start: 1;
			grid-row-end: 1;
		}
		.contributors {
			grid-column-start: 1;
			grid-column-end: 3;
			grid-row-start: 2;
			grid-row-end: 4;
		}
		.issues-grid {
			grid-template-columns: 1fr 1fr;
		}
		p2 {
			transform: scale(70%) translateY(-10px) rotate(-12.5deg);
		}
	}
</style>
