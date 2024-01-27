import { error } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils';

export const load = async ({ locals }) => {
	const getEntries = async () => {
		try {
			const entries = serializeNonPOJOs(await locals.pb.collection('entries').getFullList());
			return entries;
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}
	};

	const results = await getEntries();

	return {
		entries: results
	};
};

export const actions = {};
