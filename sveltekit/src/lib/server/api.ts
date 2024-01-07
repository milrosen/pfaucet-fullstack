import type { Article, Database, Staff, Issue, Section } from '$lib/ambient'
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://eszkdgkkhqcjozvwrhnm.supabase.co'
import { PUBLIC_SUPABASE_KEY } from '$env/static/public'
const supabase = createClient(supabaseUrl,  PUBLIC_SUPABASE_KEY)

const format_articles = (raw_articles: any[]) => {
	let formatted_articles: Article[] = [];

	raw_articles.forEach(article => {
		formatted_articles.push(format_article(article));
	});

	return formatted_articles;
}

const format_article = (article: { title: any; collectionName: any; id: any; thumbnail: any; blurb: any; paragraph: any; content: any; date: any; authors: any }) => {
	return {
		title: article.title,
		thumbnail: get_file_url('articles_thumbnail', article.thumbnail),
		link: `articles/${article.id}`,
		blurb: article.blurb,
		paragraph: article.paragraph,
		content: article.content,
		date: article.date,
		authors: article.authors,
	}
}

const format_staff = (raw_staff: any[]) => {
	let formatted_staff: Staff[] = [];

	raw_staff.forEach(staffer => {
		formatted_staff.push(format_staffer(staffer));
	});

	return formatted_staff;
}

const format_staffer = (staffer: { name: any; title: any; degree: any; collectionName: any; id: any; headshot: any; hometown: any; date_started: any; description: any }) => {
	return {
		name: staffer.name,
		title: staffer.title,
		degree: staffer.degree,
		headshot: get_file_url('headshots', staffer.headshot),
		hometown: staffer.hometown,
		date_started: staffer.date_started,
		description: staffer.description,
	}
}


const format_issues = (raw_issues: any[]) => {
	let formatted_issues: Issue[] = [];

	raw_issues.forEach(issue => {
		formatted_issues.push(format_issue(issue))
	});

	return formatted_issues;
}

const get_file_url = (bucket: string, filename: string) => {
	const { data } = supabase
		.storage
		.from('open')
		.getPublicUrl(`${bucket}/${filename}`)
	return data.publicUrl
}


export const get_pdf_url_from_issue_content_id = async (id: string) => {
	let { data: issues_content, error } = await supabase
		.from('issues_content')
		.select('id, issue_pdf')
		.eq('id', id);

	const issue_pdf = issues_content ? issues_content[0].issue_pdf as string : '';
	
	return get_file_url('issues_pdf', issue_pdf)
}
const format_issue = (issue: { id: any; collectionName: any; thumbnail: any; title: any; date: any }) => {
	return {
		id: issue.id,
		thumbnail: get_file_url('issues_thumbnail', issue.thumbnail),
		title: issue.title,
		date: issue.date,
	}
}

export const get_contributors = async (issue_id: string) => {
	const {data: issue} = await supabase.from('issues').select('id, contributors').eq('id', issue_id).limit(1).single();
	const { data: contributors } = await supabase.from('contributers').select().eq('id', issue!.contributors).limit(1).single()
	return contributors;
}


export const db_ip = supabaseUrl

export const get_article_json = async(id: string) => {
	const { data: record } = await supabase.from('articles_content').select().eq('id', id).limit(1).single()
	return record.content;
} 

export async function get_articles(n: number) {
	const { data: result } = await supabase.from('articles').select().order('date', { ascending: false }).limit(n)
	if (!!!result) return;
	return format_articles(result);
}

export async function get_all_issues() {
	
	const {data: result } = await supabase.from('issues_content').select().order('date', { ascending: false });
	if (!!!result) return;
	return format_issues(result);
}

export async function get_issue_by_id(id: string) {
	const { data: result } = await supabase.from('issues_content').select().eq('id', id).limit(1).single()
	return format_issue(result);
}

export async function get_article_by_id(id: string) {
	const { data: result } = await supabase.from('articles').select().eq('id', id).limit(1).single()
	return format_article(result);
}

export async function get_first_issue() {
	const { data: result } = await supabase.from('issues').select().eq('special', 'firstIssue').limit(1).single()
	return result
}

export async function get_staff() {
	const {data: result } = await supabase.from('staff').select();
	if (!!!result) return;
	return format_staff(result);
}

// export async function post_article(articleContent: Section, articleMeta: Article, image: File) {
// 	const content = {
// 		"title": articleMeta.title,
// 		"content": JSON.stringify(articleContent)
// 	}
// 	const contentRecord = await pb.collection('articles_content').create(content);
// 	const meta = {
// 		"title": articleMeta.title,
// 		"authors": articleMeta.authors,
// 		"blurb": articleMeta.blurb,
// 		"content": contentRecord.id,
// 		"paragraph": articleMeta.authors,
// 		"date": articleMeta.date,
// 		"issue": "online exclusive",
// 	};
// 	const metaRecord = await pb.collection('articles').create(meta);

// 	const formData = new FormData();
// 	formData.append('thumbnail', image)
// 	const metaRecordWithImage = await pb.collection('articles').update(metaRecord.id, formData);
// 	const filename = metaRecordWithImage.thumbnail;
// 	const url = pb.files.getUrl(metaRecordWithImage, filename);
// 	articleContent.content.unshift({
// 		type: 'image',
// 		content: url,
// 	});
// 	await pb.collection('articles_content').update(contentRecord.id, {
// 		content: JSON.stringify(articleContent),
// 	})
// }

// export async function get_ai_config() {
// 	const configRecord = await pb.collection('ai_configuration').getOne("g0b8k92i8nkufo6");
// 	return {
// 		system_prompt: configRecord.system_prompt,
// 		title: configRecord.title,
// 		blurb: configRecord.blurb,
// 		author: configRecord.author,
// 		paragraph: configRecord.paragraph
// 	}
// }