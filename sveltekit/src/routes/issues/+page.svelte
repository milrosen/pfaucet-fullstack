<script lang="ts">
	export let data;

	const newest_issue = JSON.parse(data.newest_issue);
	const issues: Issue[] = JSON.parse(data.first_page);
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
			<p3>{newest_issue.contributors}</p3>
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
		}
		.issues-grid {
			grid-template-columns: 1fr 1fr;
		}
		p2 {
			transform: scale(70%) translateY(-10px) rotate(-12.5deg);
		}
	}
</style>
