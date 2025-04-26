<template>
	<div class="space-y-2">
		<h1 class="text-4xl">Muzicieni</h1>
		<div class="flex gap-x-2">
			<Filter />
			<Sort />
		</div>
	</div>

	<div v-for="user in store.users">
		<PostCard
			v-if="user.openForCollab"
			musician="true"
			:title="user.fullName"
			:loc="user.county"
			:ins="user.instruments.join(', ')"
			:gen="user.genres.join(', ')"
			:desc="user.shortDesc"
			:id="user.id"
		/>
	</div>
</template>

<script lang="ts" setup>
	const store = useUsersStore();
	await callOnce("users", () => store.getUsers());
</script>
