import { json } from "@sveltejs/kit";

export async function GET(request) {
	const requestFromVercel = request.url.toString().match(/https:\/\/pfaucet-fullstack-[a-zA-Z0-9]+-miltonrosenbaum-mcgillca.vercel.app\/api\/cron/)
	if (!requestFromVercel) {
		return new Response('not from vercel', {status: 403});
	}
	console.log(JSON.stringify(request))
	return new Response('yay!', {status: 200});
}