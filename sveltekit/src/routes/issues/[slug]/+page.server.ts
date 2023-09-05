import { get_pdf_url_from_article_id } from '$lib/server/api.js'

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	return {
		pdf_url: get_pdf_url_from_article_id(params.slug),
	}
}