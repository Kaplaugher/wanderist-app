import { serializeNonPOJOs } from '$lib/utils';
import { error, redirect } from '@sveltejs/kit';

export const load = async ({ locals, params }) => {
	const getPlace = async (placeId: string) => {
		try {
			const entry = serializeNonPOJOs(await locals.pb.collection('places').getOne(placeId));
			return entry;
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}
	};

	const place = await getPlace(params.placeId);

	return {
		placeId: params.placeId,
		entryId: params.entryId,
		place
	};
};

export const actions = {
	deletePlace: async ({ locals, params }) => {
		try {
			console.log('Deleting place: ', params.placeId);
			await locals.pb.collection('places').delete(params.placeId);
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}
		throw redirect(303, `/journal/${params.entryId}`);
	}
};
