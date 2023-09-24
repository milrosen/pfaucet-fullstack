import { post_article, get_ai_config } from "./api";
import OpenAI from "openai";
import {
	env
} from '$env/dynamic/private';
import fs from 'fs';

const openai = new OpenAI({
  apiKey: env.OPENAI_API_KEY,
});


async function get_text_from_openai(proompt: string, system_proompt: string) {
	const response = await openai.chat.completions.create({
		model: "gpt-3.5-turbo",
		messages: [
		  {
			"role": "system",
			"content": system_proompt
		  },
		  {
			"role": "user",
			"content": proompt
		  }
		],
		
		temperature: 1,
		max_tokens: 800,
		top_p: 1,
		frequency_penalty: 0,
		presence_penalty: 0,
	});
	const text = response.choices[0].message.content;
	return text
}

async function  get_image_from_openAI(proompt: string) {

	const image = await openai.images.generate({ prompt :"a political cartoon for an article with the title: " + proompt });
	const url = image.data[0].url as unknown as URL;
	let file = await fetch(url).then(r => r.blob()).then(blobFile => new File([blobFile], "fileNameGoesHere", { type: "image/png" }));
	return file;
}

function format_ai_text(text: string, title: string): Section {
	let body: Section[] = [
		{
			type: 'paragraph',
			content: '',
		}
	]

	text.split('\n\n').forEach((s) => {
		if (s.includes("Title")) {
			return
		}
		body.push({
			type: "paragraph",
			content: s,
		})
	})

	return {
		type: "layout",
		content: body
	}
}

export async function build_ai_article() {
	const {title, system_prompt, blurb, author, paragraph} = await get_ai_config();
	const image = await get_image_from_openAI(title);
	const text = await get_text_from_openai(title, system_prompt);
	if (text == null) throw "error in openAIapi";
	let article_body = format_ai_text(text, title);
	let article_meta = {
		title: title,
		thumbnail: '',
		link: '',
		blurb: blurb,
		paragraph: paragraph,
		date: Date.now(),
		content: '',
		authors: author
	}
	await post_article(article_body, article_meta, image);
}