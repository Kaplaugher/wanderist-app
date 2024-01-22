import { generateUserName } from '$lib/utils.js';
import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';
import { error, fail, redirect } from '@sveltejs/kit';

const refined = z
	.object({
		name: z.string().min(3),
		email: z.string().email(),
		password: z.string().min(8).max(32).trim(),
		passwordConfirm: z.string().min(8).max(32).trim()
	})
	.refine((data) => data.password == data.passwordConfirm, "Passwords didn't match.");

export const load = async () => {
	// Server API:
	const form = await superValidate(refined);

	// Unless you throw, always return { form } in load and form actions.
	return { form };
};

export const actions = {
	register: async ({ locals, request }) => {
		const form = await superValidate(request, refined);
		const username = generateUserName(form.data.name.split(' ').join('')).toLowerCase();
		console.log('POST', form);
		if (!form.valid) {
			return fail(400, { form });
		}

		try {
			await locals.pb.collection('users').create({ username, ...form.data });
			await locals.pb.collection('users').requestVerification(form.data.email);
		} catch (err) {
			console.log('Error: ', err);
			throw error(500, 'Something went wrong my dude');
		}

		throw redirect(303, '/login');
	}
};
