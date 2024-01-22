import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';
import { error, fail, redirect } from '@sveltejs/kit';

const schema = z.object({
	email: z.string().email(),
	password: z.string().min(8).max(32).trim()
});

export const load = async () => {
	// Server API:
	const form = await superValidate(schema);

	// Unless you throw, always return { form } in load and form actions.
	return { form, notVerified: false };
};

export const actions = {
	login: async ({ request, locals }) => {
		const form = await superValidate(request, schema);
		console.log('POST', form);
		if (!form.valid) {
			return fail(400, { form });
		}

		try {
			await locals.pb.collection('users').authWithPassword(form.data.email, form.data.password);
			if (!locals.pb?.authStore?.model?.verified) {
				locals.pb.authStore.clear();
				console.log('dingles');
				return fail(400, { form, notVerified: true });
			}
		} catch (err) {
			console.log('Error: ', err);
			throw error(500, 'Something went wrong logging in');
		}

		throw redirect(303, '/');
	}
};
