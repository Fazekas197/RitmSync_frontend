<template>
	<div class="space-y-2">
		<h1 class="text-4xl">Colaborări</h1>
		<div class="flex gap-x-2">
			<Filter />
			<Sort />
		</div>
	</div>

	<PostCard
		v-for="post in posts.data.value"
		:title="post.title"
		:ins="post.instruments.join(', ')"
		:gen="post.genres.join(', ')"
		:loc="post.county"
		:author="post.user"
		:date="formatDate(post.createdAt)"
		:desc="post.shortDesc"
	/>
</template>

<script lang="ts" setup>
	import type { Post } from "@/types/post";

	const apiUrl = useRuntimeConfig().public.API_URL;
	const posts = await useFetch<Post[]>(`${apiUrl}/posts`);

	function formatDate(createdAt: string) {
		const date = new Date(createdAt);
		const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
		const month =
			date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
		return day + "." + month + "." + date.getFullYear();
	}
</script>
