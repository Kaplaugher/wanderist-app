import { serializeNonPOJOs } from '$lib/utils';
import { error } from '@sveltejs/kit';

export const load = async ({ locals, params }) => {
	const getEntry = async (entryId: string) => {
		try {
			const entry = serializeNonPOJOs(await locals.pb.collection('entries').getOne(entryId));
			return entry;
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}
	};

	const result = await getEntry(params.entryId);

	return {
		entry: result,
		entryId: params.entryId
	};
};
