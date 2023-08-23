import PocketBase from 'pocketbase';
import {
	env
} from '$env/dynamic/private';

const pb = new PocketBase(env.DATABASE_IP);
pb.collection('users').authWithPassword(env.PB_USERNAME, env.PB_PASSWORD);

export async function get_db_test() {
	const result = await pb.collection('test').getFullList();
 	return result[0]?.test_field;
}

export async function get_issues_range(first: number, last: number) {
	const resultList = await pb.collection('issues').getList(1, last+first, {
		sort: '-date',
	});
	return resultList.items.slice(first, last);
}