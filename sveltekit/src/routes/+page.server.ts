import { get_db_test, get_articles } from "$lib/server/api";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const grid_size = 7;
	let articles = await get_articles(grid_size);

	return {
		post: get_db_test(),
		articles: articles
	};
}