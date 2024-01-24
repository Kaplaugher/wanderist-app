import type { PageServerLoad } from './$types';
import { superValidate } from 'sveltekit-superforms/server';

import { fail, type Actions } from '@sveltejs/kit';
import { profileFormSchema } from '../(components)/profile-form.svelte';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(profileFormSchema)
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, profileFormSchema);
		if (!form.valid) {
			return fail(400, {
				form
			});
		}
		return {
			form
		};
	}
};
