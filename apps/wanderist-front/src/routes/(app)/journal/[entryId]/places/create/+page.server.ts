import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';
import { error, fail, redirect } from '@sveltejs/kit';

const schema = z.object({
	place_name: z.string().min(2).max(50),
	description: z.string().min(8).max(100),
	category: z.string(),
	images: z.unknown()
});

export const load = async ({ locals }) => {
	if (!locals.pb.authStore.isValid) {
		throw redirect(303, '/login');
	}
	const form = await superValidate(schema);

	return { form };
};

export const actions = {
	create: async ({ request, locals, params }) => {
		const formData = await request.formData();
		const form = await superValidate(formData, schema);

		if (!form.valid) return fail(400, { form });

		const file = formData.get('images');
		const payload = { ...form.data, user: locals.user.id, entry_id: params.entryId, images: file };
		console.log('Payload: ', payload);
		console.log('File: ', file);

		try {
			await locals.pb.collection('places').create(payload);
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}

		throw redirect(303, `/journal/${params.entryId}`);
	}
};
