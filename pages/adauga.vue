<template>
	<div class="space-y-6">
		<h1 class="text-4xl">Creaza postare</h1>
		<form class="space-y-3" @submit.prevent="submit">
			<UFormField label="Titlu" required>
				<UInput highlight v-model="state.title" />
			</UFormField>
			<div class="flex gap-x-3">
				<UFormField label="Județ" required class="w-full">
					<USelectMenu
						:items="Object.values(store.modCounties)"
						highlight
						class="w-full"
						value-key="id"
						v-model="state.countyId"
					/>
				</UFormField>
				<UFormField
					label="Instrumente"
					required
					class="w-full max-w-1/2"
				>
					<USelectMenu
						:items="Object.values(store.modInstruments)"
						multiple
						highlight
						class="w-full"
						value-key="id"
						v-model="state.instruments"
					/>
				</UFormField>
			</div>
			<UFormField label="Genuri muzicale" required>
				<USelectMenu
					:items="Object.values(store.modGenres)"
					multiple
					highlight
					class="w-full"
					value-key="id"
					v-model="state.genres"
				/>
			</UFormField>
			<UFormField label="Descriere" required>
				<UTextarea
					class="w-full font-secondary"
					highlight
					:rows="10"
					v-model="state.desc"
					placeholder="Descrie proiectul tău și ce fel de muzician cauți"
				/>
			</UFormField>
			<UFormField label="Telefon">
				<UInput highlight v-model="state.phone" />
			</UFormField>
			<UFormField label="Email" name="email">
				<UInput highlight v-model="state.email" />
			</UFormField>
			<UFormField label="Socials" :error="err" :ui="{ error: 'text-sm' }">
				<div class="flex justify-between gap-6">
					<UInput highlight v-model="social" />
					<UButton size="lg" @click="addSocial">Adaugă</UButton>
				</div>
				<div class="text-sm font-secondary">
					<p v-for="social in state.socials">
						{{ social.platform }}: {{ social.link }}
					</p>
				</div>
			</UFormField>
			<UButton type="submit" class="text-xl"> Crează </UButton>
		</form>
	</div>
</template>

<script setup lang="ts">
	import type { PostForm } from "~/types/post";
	import type { Social } from "~/types/social";
	const config = useRuntimeConfig();

	const store = useStaticDataStore();
	const postStore = usePostsStore();

	const social = ref("");
	const state = ref<PostForm>({
		userId: 1,
		title: "",
		countyId: 0,
		instruments: [],
		genres: [],
		desc: "",
		phone: "",
		email: "",
		socials: [],
	});

	const err = ref("");
	function addSocial(): void {
		err.value = "";
		const platform = getSocialPlatform(social.value);
		if (platform == null) {
			err.value =
				"Please enter a link from youtube, tiktok, facebook, spotify or instagram";
			return;
		}

		var addSocial = { link: social.value, platform: platform } as Social;
		state.value.socials.push(addSocial);
		social.value = "";
	}

	async function submit() {
		await useFetch(`${config.public.API_URL}/posts`, {
			method: "POST",
			body: state.value,
		});
		navigateTo("/");
		await postStore.getPosts();
	}
</script>
