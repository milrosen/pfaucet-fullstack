import PocketBase from 'pocketbase';
import {
	PUBLIC_DATABASE_IP
} from '$env/static/public';

const pb = new PocketBase(PUBLIC_DATABASE_IP);

async function startPocketBase() {
	const result = await pb.collection('test').getFullList();
	return result[0].test_field;
}

/** @type {import('./$types').PageServerLoad} */
export function load() {
	return {
		post: startPocketBase()
	};
}