import PocketBase from 'pocketbase';
const pb = new PocketBase(process.env.PUBLIC_DATABASE_IP);

async function startPocketBase() {
	const result = await pb.collection('test').getFullList();
	console.log(result[0].test_field);
	return result[0].test_field;
}

/** @type {import('./$types').PageServerLoad} */
export function load() {
	return {
		post: startPocketBase()
	};
}