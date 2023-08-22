import PocketBase from 'pocketbase';
import {
	env
} from '$env/dynamic/private';

const pb = new PocketBase(env.DATABASE_IP);
pb.collection('users').authWithPassword(env.PB_USERNAME, env.PB_PASSWORD);

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