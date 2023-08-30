import { get_db_test, get_articles, get_staff } from "$lib/server/api";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const grid_size = 7;
	let articles = await get_articles(grid_size);
	let staff = await get_staff();

	return {
		post: get_db_test(),
		articles: articles,
		staff: staff
	};
}