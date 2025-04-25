<template>
	<!-- TOP -->
	<div class="space-y-2">
		<h1 class="text-4xl">{{ post?.title }}</h1>
		<div class="space-y-0.5 text-black/75">
			<div class="flex gap-x-1 items-center">
				<UIcon
					name="i-qlementine-icons:guitar-strat-16"
					class="size-5"
				/>
				<h4>{{ post?.instruments.join(", ") }}</h4>
			</div>
			<div class="flex gap-x-1 items-center">
				<UIcon name="i-majesticons:music" class="size-5" />
				<h4>{{ post?.genres.join(", ") }}</h4>
			</div>
			<div class="flex gap-x-2">
				<div class="flex gap-x-1 items-center">
					<UIcon
						name="i-material-symbols-light:location-on"
						class="size-5"
					/>
					<h4>{{ post?.county }}</h4>
				</div>
				<div class="flex gap-x-1 items-center">
					<UIcon name="i-material-symbols-person" class="size-5" />
					<h4>{{ post?.user }}</h4>
				</div>
				<div class="flex gap-x-1 items-center">
					<UIcon name="i-clarity:date-solid" class="size-5" />
					<h4>{{ store.formatDate(post?.createdAt || "") }}</h4>
				</div>
			</div>
		</div>
	</div>

	<!-- CONTENT -->
	<div class="space-y-4">
		<!-- Desc -->
		<div class="space-y-1">
			<h2 class="text-2xl">Descriere</h2>
			<p class="font-secondary text-lg">
				{{ post?.desc }}
			</p>
		</div>

		<!-- Socials -->
		<div class="space-y-1">
			<h2 class="text-2xl">Socials</h2>
			<div class="flex gap-x-3">
				<UIcon
					name="i-si:youtube-fill"
					class="size-9 bg-gradient-to-br from-[#2e2e2e] to-[#121212]"
				/>
				<UIcon
					name="i-ic:outline-facebook"
					class="size-9 bg-gradient-to-br from-[#2e2e2e] to-[#121212]"
				/>
				<UIcon
					name="i-mdi:spotify"
					class="size-9 bg-gradient-to-br from-[#2e2e2e] to-[#121212]"
				/>
				<UIcon
					name="i-mdi:instagram"
					class="size-9 bg-gradient-to-br from-[#2e2e2e] to-[#121212]"
				/>
				<UIcon
					name="i-ic:baseline-tiktok"
					class="size-9 bg-gradient-to-br from-[#2e2e2e] to-[#121212]"
				/>
			</div>
		</div>

		<!-- Contact -->
		<div v-if="post?.phone || post?.email" class="flex flex-col gap-y-1">
			<h2 class="text-2xl">Contact</h2>
			<div
				v-if="post?.email"
				class="flex gap-x-2 items-center text-lg font-secondary"
			>
				<UIcon
					name="i-material-symbols:mail"
					class="size-9 bg-gradient-to-br from-[#2e2e2e] to-[#121212]"
				/>
				<p>{{ post?.email }}</p>
			</div>
			<div
				v-if="post?.phone"
				class="flex gap-x-2 items-center text-lg font-secondary"
			>
				<UIcon
					name="i-ic:baseline-call"
					class="size-9 bg-gradient-to-br from-[#2e2e2e] to-[#121212]"
				/>
				<p>{{ post?.phone }}</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	const store = usePostsStore();
	const router = useRoute();
	const post = store.getPostById(Number(router.params.id));
</script>
