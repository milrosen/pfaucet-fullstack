import { get_articles, get_first_issue, get_issue_by_id, get_staff } from "$lib/server/api";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	let articles = await get_articles(2);
	let issue_meta = await get_first_issue();
	let issue_content = await get_issue_by_id(issue_meta.issue)
	let issue: First_Issue = {
		link: `/issues/${issue_meta.issue}`,
		thumbnail: issue_content?.thumbnail,
		title: issue_content?.title,
		blurb: issue_meta.blurb,
		paragraph: issue_meta.paragraph,
		authors: 'list of authors'
	}
	let staff = await get_staff();

	return {
		cards: JSON.stringify([issue, ...articles]),
		staff: staff
	};
}