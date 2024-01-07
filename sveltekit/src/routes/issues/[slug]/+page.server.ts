import { get_pdf_url_from_issue_content_id } from '$lib/server/api.js'

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	return {
		pdf_url: get_pdf_url_from_issue_content_id(params.slug),
	}
}