import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';
import { error, fail, redirect } from '@sveltejs/kit';

const schema = z.object({
	entry_title: z.string().min(2).max(50),
	description: z.string().min(8).max(100),
	location_id: z.number(),
	main_image: z.unknown()
});

export const load = async ({ locals }) => {
	if (!locals.pb.authStore.isValid) {
		throw redirect(303, '/login');
	}
	const form = await superValidate(schema);

	return { form };
};

export const actions = {
	create: async ({ request, locals }) => {
		const formData = await request.formData();
		const form = await superValidate(formData, schema);

		if (!form.valid) return fail(400, { form });

		const file = formData.get('main_image');
		const payload = { ...form.data, user: locals.user.id, main_image: file };
		if (file instanceof File) {
			// Do something with the file.
			console.log('File: ', file);
		}

		try {
			await locals.pb.collection('entries').create(payload);
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}

		throw redirect(303, '/my/journal');
	}
};
