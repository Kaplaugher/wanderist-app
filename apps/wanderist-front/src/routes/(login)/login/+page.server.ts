import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';
import { error, fail, redirect } from '@sveltejs/kit';

const schema = z.object({
	email: z.string().email(),
	password: z.string().min(8).max(32).trim()
});

export const load = async () => {
	const form = await superValidate(schema);

	return { form };
};

export const actions = {
	login: async ({ request, locals }) => {
		const form = await superValidate(request, schema);
		if (!form.valid) {
			return fail(400, { form });
		}

		try {
			await locals.pb.collection('users').authWithPassword(form.data.email, form.data.password);
			if (!locals.pb?.authStore?.model?.verified) {
				locals.pb.authStore.clear();
				return fail(400, { form });
			}
		} catch (err) {
			console.log('Error: ', err);
			throw error(500, 'Something went wrong logging in');
		}

		throw redirect(303, '/');
	}
};
