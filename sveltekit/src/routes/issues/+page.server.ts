import { get_all_issues, get_first_issue, get_issue_by_id, db_ip } from "$lib/server/api";



/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const newest_issue_meta = await get_first_issue();
	const issues = await get_all_issues()
	const newest_issue = await issues.shift();
	return {
		newest_issue: JSON.stringify({
			id: newest_issue?.id,
			thumbnail: newest_issue?.thumbnail,
			title: newest_issue?.title,
			contributors: newest_issue_meta.contributors,
			blurb: newest_issue_meta.blurb,
			paragraph: newest_issue_meta.paragraph,
		}),
		first_page: JSON.stringify(issues),
	};
}