<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<script lang="ts" setup>
	import { useStaticDataStore } from "./stores/staticData";
	const store = useStaticDataStore();
	await callOnce("staticData", () => store.getData());
</script>
