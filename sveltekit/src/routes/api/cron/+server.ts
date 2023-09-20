import { json } from "@sveltejs/kit";

export async function GET(request) {
	console.log(JSON.stringify(request))
	return json({ request });
}