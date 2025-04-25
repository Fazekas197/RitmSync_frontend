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
		date="15.02.2025"
		:desc="post.shortDesc"
	/>
</template>

<script lang="ts" setup>
	interface Post {
		id: number;
		user: string;
		title: string;
		county: string;
		desc: string;
		shortDesc: string;
		phone: string;
		email: string;
		genres: [];
		instruments: [];
		socials: [];
	}

	const apiUrl = useRuntimeConfig().public.API_URL;
	const posts = await useFetch<Post[]>(`${apiUrl}/posts`);
</script>
