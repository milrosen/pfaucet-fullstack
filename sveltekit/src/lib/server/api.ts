import PocketBase, { ListResult, Record } from 'pocketbase';
import {
	env
} from '$env/dynamic/private';

const pb = new PocketBase(env.DATABASE_IP);
pb.collection('users').authWithPassword(env.PB_USERNAME, env.PB_PASSWORD);


const format_articles = (raw_articles: ListResult<Record>) => {
	let formatted_articles: Article[] = [];

	raw_articles.items.forEach(article => {
		formatted_articles.push(format_article(article));
	});

	return formatted_articles;
}

const format_article = (article: Record) => {
	return {
		title: article.title,
		thumbnail: `${db_ip}/api/files/${article.collectionName}/${article.id}/${article.thumbnail}`,
		link: `articles/${article.id}`,
		blurb: article.blurb,
		paragraph: article.paragraph,
		content: article.content,
		date: article.date,
		authors: article.authors,
	}
}

const format_staff = (raw_staff: Record[]) => {
	let formatted_staff: Staff[] = [];

	raw_staff.forEach(staffer => {
		formatted_staff.push(format_staffer(staffer));
	});

	return formatted_staff;
}

const format_staffer = (staffer: Record) => {
	return {
		name: staffer.name,
		title: staffer.title,
		degree: staffer.degree,
		headshot: `${db_ip}/api/files/${staffer.collectionName}/${staffer.id}/${staffer.headshot}`,
		hometown: staffer.hometown,
		date_started: staffer.date_started,
		description: staffer.description,
	}
}


const format_issues = (raw_issues: ListResult<Record>) => {
	let formatted_issues: Issue[] = [];

	raw_issues.items.forEach(issue => {
		formatted_issues.push(format_issue(issue))
	});

	return formatted_issues;
}

export const get_pdf_url_from_article_id = async (id: string) => {
	const record = await pb.collection('issues_content').getOne(id);
	return `${db_ip}/api/files/${record.collectionName}/${record.id}/${record.issue_pdf}`;
}

const format_issue = (issue: Record) => {
	return {
		id: issue.id,
		thumbnail: `${db_ip}/api/files/${issue.collectionName}/${issue.id}/${issue.thumbnail}`,
		title: issue.title,
		date: issue.date,
	}
}

export const get_contributors = async (issue_id: string) => {
	const issue  = await pb.collection('issues').getOne(issue_id);
	const contributers = await pb.collection('contributers').getOne(issue.contributors);
	return contributers;
}


export const db_ip = env.DATABASE_IP;

export const get_article_json = async(id: string) => {
	const record = await pb.collection('articles_content').getOne(id);
	return record.content;
} 

export async function get_articles(n: number) {
	const result = await pb.collection('articles').getList(0, n, {
		sort: '-created',
	});
	return format_articles(result);
}

export async function get_db_test() {
	const result = await pb.collection('test').getFullList();
 	return result[0]?.test_field;
}

export async function get_issues(first: number, last: number) {
	const result = await pb.collection('issues').getList(0, last+first, {
		sort: '-date',
	});
	const formatted_result = format_issues(result);
	return formatted_result.slice(first, last);
}

export async function get_all_issues() {
	const result = await pb.collection('issues_content').getList(0, 72, {
		sort: '-date',
	});
	return format_issues(result);
}

export async function get_issue_by_id(id: string) {
	const result = await pb.collection('issues_content').getOne(id);
	return format_issue(result);
}

export async function get_article_by_id(id: string) {
	const result = await pb.collection('articles').getOne(id);
	return format_article(result);
}

export async function get_first_issue() {
	return await pb.collection('issues').getFirstListItem('special = \'firstIssue\'');
}

export async function get_staff() {
	const result = await pb.collection('staff').getFullList();
	return format_staff(result);
}

export async function post_article(articleContent: Section, articleMeta: Article) {
	const content = {
		"title": articleMeta.title,
		"content": JSON.stringify(articleContent)
	}
	const contentRecord = await pb.collection('articles_content').create(content);
	const meta = {
		"title": articleMeta.title,
		"authors": articleMeta.authors,
		"blurb": articleMeta.blurb,
		"content": contentRecord.id,
		"paragraph": articleMeta.authors,
		"date": articleMeta.date,
		"issue": "online exclusive",
	};
	await pb.collection('articles').create(meta);
}

export async function get_ai_config() {
	const configRecord = await pb.collection('ai_configuration').getOne("g0b8k92i8nkufo6");
	return {
		system_prompt: configRecord.system_prompt,
		title: configRecord.title,
		blurb: configRecord.blurb,
		author: configRecord.author,
		paragraph: configRecord.paragraph
	}
}