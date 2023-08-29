import { get_article_json, get_article_by_id } from "$lib/server/api";

export async function load({ params }) {
	const article = await get_article_by_id(params.slug);

	return {
		article: JSON.stringify(article),
		article_json: get_article_json(article.content),
	};
}