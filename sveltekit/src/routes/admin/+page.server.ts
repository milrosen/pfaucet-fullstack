import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "../$types";

export const load: PageServerLoad = async (event) => {
    const {
		url,
		locals: { getSession }
	} = event;

    if (await getSession() == null) {
        throw redirect(302, '/admin/login');
    }
}