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
	const getPlaces = async (entryId: string) => {
		try {
			const places = serializeNonPOJOs(
				await locals.pb.collection('places').getFullList(undefined, {
					filter: `entry_id = "${entryId}"`
				})
			);
			return places;
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}
	};

	const result = await getEntry(params.entryId);
	const places = await getPlaces(params.entryId);

	return {
		entry: result,
		entryId: params.entryId,
		places
	};
};

export const actions = {
	deleteEntry: async ({ locals, params }) => {
		try {
			await locals.pb.collection('entries').delete(params.entryId);
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}
		return {
			success: true
		};
	}
};
