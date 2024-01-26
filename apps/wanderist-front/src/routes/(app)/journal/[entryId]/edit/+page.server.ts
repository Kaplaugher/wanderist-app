import { error, fail, redirect } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils';
import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';

const schema = z.object({
	entry_title: z.string().min(2).max(50),
	description: z.string().min(8).max(100),
	location_id: z.number(),
	main_image: z.unknown()
});

export const load = async ({ locals, params }) => {
	const entry = serializeNonPOJOs(await locals.pb.collection('entries').getOne(params.entryId));
	const form = await superValidate(entry, schema);
	if (!locals.pb.authStore.isValid) {
		throw error(401, 'Unauthorized');
	}

	try {
		if (locals.user.id === entry.user) {
			return {
				entry,
				form
			};
		} else {
			throw error(403, 'Forbidden');
		}
	} catch (err) {
		console.log('Error: ', err);
		throw error(err.status, err.message);
	}
};

export const actions = {
	updateEntry: async ({ request, locals, params }) => {
		const formData = await request.formData();
		const form = await superValidate(formData, schema);

		if (!form.valid) return fail(400, { form });

		const file = form.data.main_image || formData.get('main_image');
		const payload = { ...form.data, user: locals.user.id, main_image: file };

		try {
			await locals.pb.collection('entries').update(params.entryId, payload);
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}

		throw redirect(303, `/journal/${params.entryId}`);
	},
	deleteThumbnail: async ({ locals, params }) => {
		try {
			await locals.pb.collection('entries').update(params.entryId, { main_image: null });
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}
		return {
			success: true
		};
	}
};
