<template>
	<div
		class="px-8 py-6 rounded-2xl bg-gradient-to-br from-[#2e2e2e] to-[#121212] text-white space-y-3"
	>
		<!-- TOP -->
		<div class="space-y-1">
			<h2 class="text-2xl">{{ title }}</h2>
			<!-- DETAILS -->
			<!-- Instrument, Gen -->
			<div class="space-y-1 text-white/75 text-sm">
				<div v-if="musician" class="flex items-center">
					<UIcon
						name="i-material-symbols-light:location-on"
						class="size-5"
					/>
					<h4 class="">{{ loc }}</h4>
				</div>
				<div class="flex gap-x-2">
					<div class="flex gap-x-0.5 items-center">
						<UIcon
							name="i-qlementine-icons:guitar-strat-16"
							class="size-5"
						/>
						<h4>{{ showArr(ins) }}</h4>
					</div>
					<div class="flex gap-x-1 items-center">
						<UIcon name="i-majesticons:music" class="size-5" />
						<h4>{{ showArr(gen) }}</h4>
					</div>
				</div>
			</div>

			<!-- locatie, autor, data -->
			<div v-if="!musician" class="flex gap-x-2 text-white/75 text-sm">
				<div class="flex gap-x-1 items-center">
					<UIcon
						name="i-material-symbols-light:location-on"
						class="size-5"
					/>
					<h4>{{ loc }}</h4>
				</div>
				<div class="flex gap-x-1 items-center">
					<UIcon name="i-material-symbols-person" class="size-5" />
					<h4>{{ author }}</h4>
				</div>
			</div>
			<div
				v-if="!musician"
				class="flex gap-x-1 items-center text-white/75 text-sm"
			>
				<UIcon name="i-clarity:date-solid" class="size-5" />
				<h4>{{ date }}</h4>
			</div>
		</div>

		<!-- DESC -->
		<div>
			<p class="font-secondary">
				{{ desc }}
			</p>
		</div>

		<UButton v-if="!musician" :to="`/postari/${id}`" class="w-fit" size="xl"
			>Mai multe</UButton
		>
		<UButton
			v-if="musician"
			:to="`/muzicieni/${id}`"
			class="w-fit"
			size="xl"
			>Mai multe</UButton
		>
	</div>
</template>

<script setup lang="ts">
	const props = defineProps([
		"musician",
		"title",
		"loc",
		"ins",
		"gen",
		"author",
		"date",
		"desc",
		"id",
	]);

	function showArr(arr: Array<string>) {
		if (arr.length > 2) {
			return `${arr[0]}, ${arr[1]} + ${arr.length - 2}`;
		}
		return arr.join(", ");
	}
</script>
