import { get_db_test, get_articles } from "$lib/server/api";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	let articles = await get_articles(7);

	return {
		post: get_db_test()
	};
}