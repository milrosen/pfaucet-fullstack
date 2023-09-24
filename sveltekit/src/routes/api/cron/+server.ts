import { build_ai_article } from '$lib/server/ai'

export async function GET(request) {
	const requestFromVercel = request.url.toString().match(/https:\/\/pfaucet-fullstack-[a-zA-Z0-9]{9}-miltonrosenbaum-mcgillca\.vercel\.app\/api\/cron/)
	if (!requestFromVercel && import.meta.env.PROD) {
		return new Response('you shouldn\'t be here. it litchrally says cron in the url', {status: 403});
	}
	await build_ai_article();
}