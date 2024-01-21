import { generateUserName } from '$lib/utils.js';
import { error, redirect } from '@sveltejs/kit';

export const actions = {
	register: async ({ locals, request }) => {
		console.log('asdfasdfasdfasdfasfdasdfasdf -------------------');
		const body = Object.fromEntries(await request.formData());

		const username = generateUserName(body.name.split(' ').join('')).toLowerCase();

		console.log('body: ', body);

		console.log('username: ', username);

		try {
			await locals.pb.collection('users').create({ username, ...body });
			await locals.pb.collection('users').requestVerification(body.email);
		} catch (err) {
			console.log('Error: ', err);
			throw error(500, 'Something went wrong my dude');
		}

		throw redirect(303, '/login');
	}
};
