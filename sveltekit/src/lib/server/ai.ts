import { post_article } from "./api";
import OpenAI from "openai";
import {
	env
} from '$env/dynamic/private';

const openai = new OpenAI({
  apiKey: env.OPENAI_API_KEY,
});


async function get_text_from_openai(proompt: string) {
	const _ = `"Title: \"The Rise and Fall of the Selfie: An Obituary\"\n\nAh, the selfie. A true testament to the narcissism and self-absorption that defines ourera. Like a fleeting flame, it burst onto the scene, capturing the attention of the masses and captivating their fragile egos. It was a phenomenon that shook the very foundation of our existence, igniting a desperate need for validation and an insatiable hunger for followers.\n\nBut alas, as with all things in life, the selfie's time in the limelight has come to an end. It seems that even the most fleeting of joys cannot withstand the relentless onslaught of time and maybe a little common sense.\n\nI can only imagine the scene at the funeral of the selfie. The mourners, clad in their best filters, shedding digital tears over their beloved companion. A slideshow plays in the background, showcasing the evolution of the selfie from its humble beginnings to its inevitable demise. Who could forget the infamous duck face era or the reign of the bathroom mirror selfie?\n\nAs I stand amidst the crowd, I can't help but feel a twinge of nostalgia for the simpler times, when people actually engaged with the world around them instead of frantically trying to capture the perfect angle of their own faces. Remember when we could go to a concert and not spend the entire evening watching it through someone else's phone screen? Oh, how we cheered when we were liberated from the shackles of self-expression and instead chose to capture every waking moment of our lives for all to see.\n\nBut now, my friends, the selfie has fallen. It has met its tragic end at the hands of itsown absurdity. In a world where everyone is a photographer and every moment is a potential Instagram post, the novelty has worn off. We have becomedesensitized to the endless stream of pouty lips, flexed biceps, and staged candids. The selfie, once a symbol of self-confidence and empowerment, has been reduced to nothing more than a clichéd cry for attention.\n\nGone are the days when people marveled at the beauty of a sunset or pondered the mysteries of the universe. Now, we are consumed with capturing our own faces in various states of pseudo-reflectiveness. It's a sad state of affairs when one's self-worth is measured by the number of likes they receive on a heavily edited photo.\n\nI cannot help but feel a certain sense of relief at the selfie's demise. Perhaps now, freed from the burden of constant self-documentation, we can once again begin to live in the moment. We can stop obsessing over the perfect lighting and focus on the imperfect beauty that surrounds us.\n\nSo, as we bid adieu to the selfie, let us reflecton its brief yet impactful reign. Let us remember the duck faces and the bathroom mirrors, the sunsets and the gym selfies. And let us vow to move forward, armed with the knowledge that life is meant to be lived, not filtered through a smartphone lens.\n\nRIP, dear selfie. You will not be missed."`
	return _;
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
	let article = format_ai_text(text, title);
	await post_article(article);
}