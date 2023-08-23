import { get_issues_range } from "$lib/server/api";



/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {
		newest_issue: get_issues_range(0, 1),
	};
}