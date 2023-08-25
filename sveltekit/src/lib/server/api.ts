import PocketBase from 'pocketbase';
import {
	env
} from '$env/dynamic/private';

const pb = new PocketBase(env.DATABASE_IP);
//pb.collection('users').authWithPassword(env.PB_USERNAME, env.PB_PASSWORD);

export const db_ip = env.DATABASE_IP;

export async function get_db_test() {
	const result = await pb.collection('test').getFullList();
 	return result[0]?.test_field;
}

export async function get_issues(first: number, last: number) {
	const resultList = await pb.collection('issues').getList(1, last+first, {
		sort: '-date',
	});
	return resultList.items.slice(first, last);
}

export async function get_all_issues() {
	const resultList = await pb.collection('issues').getFullList({
		sort: '-date',
	});
	return resultList
}

export async function get_issue_by_id(id: string) {
	return await pb.collection('issues').getOne(id);
}

export async function get_first_issue() {
	return await pb.collection('isses_metadata').getFirstListItem('special = \'firstIssue\'');
}