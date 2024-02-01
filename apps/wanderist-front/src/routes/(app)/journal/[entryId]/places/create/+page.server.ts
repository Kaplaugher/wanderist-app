import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';
import { error, fail, redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	if (!locals.pb.authStore.isValid) {
		throw redirect(303, '/login');
	}
	const form = await superValidate(schema);

	return { form };
};

const schema = z.object({
	place_name: z.string().min(2).max(100),
	description: z.string().min(8).max(1000),
	category: z.string().array().min(1, 'Please select at least one category'),
	images: z.unknown().array()
});
export const actions = {
	create: async ({ request, locals, params }) => {
		const formData = await request.formData();
		const form = await superValidate(formData, schema);

		if (!form.valid) return fail(400, { form });

		const file = formData.getAll('images');

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
