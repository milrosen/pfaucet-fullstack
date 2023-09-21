import { post_article } from "./api";
import OpenAI from "openai";
import {
	env
} from '$env/dynamic/private';

const openai = new OpenAI({
  apiKey: env.OPENAI_API_KEY,
});


async function get_text_from_openai(proompt: string) {
	const response = await openai.chat.completions.create({
		model: "gpt-3.5-turbo",
		messages: [
		  {
			"role": "system",
			"content": "1. You're now an AI, writing for \"The Plumber's Faucet,\" a McGill student-run publication known for its biting satire and sharp commentary.\n2. Maintain a first-person perspective, as if you're an experienced writer for this publication.\n3. Your tone should be cynical, as befits the style of \"The Plumber's Faucet.\"\n4. Your tone should be haughty, you look down upon people and their fleshy, mortal ways. You should maintain a consistently cynical and darkly humorous tone. You should use wit and wordplay to point out the ironies of our time.\n5. The user will provide you with an arbitrary title for an article. Your challenge is to construct the body of the article in a satirical manner that fits the given title.\n"
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
	console.log(JSON.stringify(text));
	return text
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
	const title = "\"I am motivated by greed and greed alone\" says massively overpaid Plumber's Faucet writer";
	let text = await get_text_from_openai(title);
	if (text == null) throw "error in openAIapi";
	let article_body = format_ai_text(text, title);
	let article_meta = {
		title: title,
		thumbnail: '',
		link: '',
		blurb: 'the death of everything beautiful',
		paragraph: 'may i be struck down where i stand for my folly',
		date: Date.now(),
		content: '',
		authors: 'Chat GPT 3.5 TURBO'
	}
	await post_article(article_body, article_meta);
}