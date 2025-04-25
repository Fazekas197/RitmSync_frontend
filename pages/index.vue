<template>
	<div class="space-y-2">
		<h1 class="text-4xl">Colaborări</h1>
		<div class="flex gap-x-2">
			<Filter />
			<Sort />
		</div>
	</div>

	<PostCard
		v-for="post in postStore.posts"
		:title="post.title"
		:ins="post.instruments.join(', ')"
		:gen="post.genres.join(', ')"
		:loc="post.county"
		:author="post.user"
		:date="postStore.formatDate(post.createdAt)"
		:desc="post.shortDesc"
		:id="post.id"
	/>
</template>

<script lang="ts" setup>
	const postStore = usePostsStore();
	await callOnce("posts", () => postStore.getPosts());
</script>
