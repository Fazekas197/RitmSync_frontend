import { defineStore } from "pinia";
import type { User } from "../types/user";

export const useUsersStore = defineStore("users", {
	state: () => {
		return {
			users: [] as User[],
		};
	},
	actions: {
		async getUsers() {
			const config = useRuntimeConfig();
			this.users = await $fetch(`${config.public.API_URL}/users`);
		},
	},
});
