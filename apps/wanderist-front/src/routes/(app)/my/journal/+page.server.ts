import { error, redirect } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils';

export const load = async ({ locals }) => {
	if (!locals.pb.authStore.isValid) {
		throw redirect(303, '/login');
	}

	const getUsersEntries = async (userId: string) => {
		try {
			const entries = serializeNonPOJOs(
				await locals.pb.collection('entries').getFullList(undefined, {
					filter: `user = "${userId}"`
				})
			);
			return entries;
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}
	};

	const results = await getUsersEntries(locals.user.id);

	return {
		entries: results,
		user: locals.user
	};
};

export const actions = {
	deleteEntry: async ({ request, locals }) => {
		const { id } = Object.fromEntries(await request.formData());

		try {
			await locals.pb.collection('entries').delete(id);
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}
		return {
			success: true
		};
	}
};
