type Article = { title: any; thumbnail: string; link: string; blurb: any; paragraph: any; content: any; date: any; meta?: any; authors: any}
type Issue = { title: any; thumbnail: string, pdf: string, date: any}
type Section = {
	type: 'image'|'paragraph'|'title'|'layout';
	content: string|Section[];
}
type Staff = {
	name: string,
	title: string,
	degree: string,
	headshot: string,
	hometown: string,
	date_started: string,
	description: string,
}