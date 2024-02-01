import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "../$types";
import { add_issue } from "$lib/server/api";

export const load: PageServerLoad = async (event) => {
    const {
		locals: { getSession, supabase }
	} = event;

    let data = await getSession()
    if (data === null) {
        console.log(data)
        throw redirect(302, '/admin/login')
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
	uploadIssue: async ({ request }) => {
		let formData = await request.formData()
        add_issue({
            title: formData.get('issue name') as string,
            blurb: formData.get('blurb') as string,
            paragraph: formData.get('paragraph') as string,
        }, formData.get('thumbnail'), formData.get('pdf'))
	}
};
