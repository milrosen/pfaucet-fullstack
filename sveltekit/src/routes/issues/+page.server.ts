import { get_all_issues, get_first_issue, get_issue_by_id, db_ip } from "$lib/server/api";



/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const newest_issue_meta = await get_first_issue();
	const newest_issue = await get_issue_by_id(newest_issue_meta.issue);
	const issues = (await get_all_issues()).map(issue => {
		return {
			pdf: `${db_ip}/api/files/${issue.collectionName}/${issue.id}/${issue.issue_pdf}`,
			thumbnail: `${db_ip}/api/files/${issue.collectionName}/${issue.id}/${issue.thumbnail}`,
			title: issue.title,
			date: issue.date,
		}
	});
	issues.shift();
	return {
		newest_issue: JSON.stringify({
			pdf: `${db_ip}/api/files/${newest_issue.collectionName}/${newest_issue.id}/${newest_issue.issue_pdf}`,
			thumbnail: `${db_ip}/api/files/${newest_issue.collectionName}/${newest_issue.id}/${newest_issue.thumbnail}`,
			title: newest_issue.title,
			contributors: newest_issue_meta.contributors,
			blurb: newest_issue_meta.blurb,
			paragraph: newest_issue_meta.paragraph,
		}),
		first_page: JSON.stringify(issues),
	};
}  

//  <img src="http://example.com/api/files/demo/1234abcd/test.png" alt="Test image" />