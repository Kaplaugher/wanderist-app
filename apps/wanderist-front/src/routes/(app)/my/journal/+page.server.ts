import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';
import { error, fail, redirect } from '@sveltejs/kit';

const schema = z.object({
	entryTitle: z.string().min(2).max(50),
	entryDescription: z.string().min(8).max(100),
	locationId: z.number()
});

export const load = async () => {
	const form = await superValidate(schema);

	return { form };
};

export const actions = {
	create: async ({ request }) => {
		const form = await superValidate(request, schema);
		if (!form.valid) {
			return fail(400, { form });
		}
	}
};
