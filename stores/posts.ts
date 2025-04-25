import { defineStore } from "pinia";
import { useRuntimeConfig } from "#app";
import type { Post } from "../types/post";

export const usePostsStore = defineStore("posts", {
	state: () => {
		return {
			posts: [] as Post[],
		};
	},
	actions: {
		async getPosts() {
			const config = useRuntimeConfig();
			this.posts = await $fetch(`${config.public.API_URL}/posts`);
		},

		formatDate(createdAt: string) {
			const date = new Date(createdAt);
			const day =
				date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
			const month =
				date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
			return day + "." + month + "." + date.getFullYear();
		},
	},
});
