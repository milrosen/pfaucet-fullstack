import { get_db_test } from "$lib/server/api";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {
		post: get_db_test()
	};
}