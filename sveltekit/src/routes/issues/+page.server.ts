import { get_all_issues, get_contributors, get_first_issue, get_issue_by_id } from "$lib/server/api";



/** @type {import('./$types').PageServerLoad} */
export async function load() {
	let issue_meta = await get_first_issue();
	let issue_content = await get_issue_by_id(issue_meta.issue);
	const issues = await get_all_issues();
	issues.shift();
	const newest_issue_contributers = await get_contributors(issue_meta.id);
	return {
		newest_issue: JSON.stringify({
			id: issue_content?.id,
			thumbnail: issue_content?.thumbnail,
			title: issue_content?.title,
			contributors: issue_meta.authors,
			blurb: issue_meta.blurb,
			paragraph: issue_meta.paragraph,
		}),
		contributers: JSON.stringify(newest_issue_contributers),
		first_page: JSON.stringify(issues),
	};
}