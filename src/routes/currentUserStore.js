import { writable } from 'svelte/store';

function createUser() {
	const { subscribe, set, update } = writable({});
	let done = false;
	return {
		subscribe,
		fetch: async function() {
			if(!done) {
				console.log("Fetching");
				const resp = await this.fetch('/api/profile', {
					credentials: 'include'
				});

				const json = await resp.json();
				console.log("json:", json);
				set(json);
				done = true;
			}
			
		}
	}
}

export const userStore = createUser();