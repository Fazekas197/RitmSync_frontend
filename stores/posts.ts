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

		async getPostById(id: number) {
			const post = this.posts.find((post) => post.id === id);
			if (!post) {
				return (await this.fetchPostById(id)) as Post;
			}
			return post;
		},

		async fetchPostById(id: number) {
			const config = useRuntimeConfig();
			const post = await $fetch(`${config.public.API_URL}/posts/${id}`);
			return post;
		},
	},
});
