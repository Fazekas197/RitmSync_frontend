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
				const config = useRuntimeConfig();
				return (await $fetch(
					`${config.public.API_URL}/posts/${id}`
				)) as Post;
			}
			return post;
		},

		async getPostsByUserId(userId: number) {
			const posts = this.posts.filter((post) => post.userId === userId);
			if (posts.length === 0) {
				const config = useRuntimeConfig();
				return (await $fetch(
					`${config.public.API_URL}/posts/users/${userId}`
				)) as Post[];
			}
			return posts;
		},
	},
});
