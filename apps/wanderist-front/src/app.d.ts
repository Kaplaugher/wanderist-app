// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: UserInfo; // Your type here
			pb: import('PocketBase').default;
		}

		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
