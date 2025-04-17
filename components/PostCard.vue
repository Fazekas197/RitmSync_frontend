<template>
	<div
		class="px-8 py-6 rounded-2xl bg-gradient-to-br from-[#2e2e2e] to-[#121212] text-white flex flex-col gap-y-3"
	>
		<!-- TOP -->
		<div class="flex flex-col gap-y-1">
			<h2 class="text-2xl">Titlu</h2>
			<!-- DETAILS -->
			<!-- Instrument, Gen -->
			<div class="flex gap-x-2 items-center text-white/75">
				<div v-if="musician" class="flex gap-x-1 items-center">
					<UIcon
						name="i-material-symbols-light:location-on"
						class="size-5"
					/>
					<h4>Locatie</h4>
				</div>
				<div class="flex gap-x-1 items-center">
					<UIcon
						name="i-qlementine-icons:guitar-strat-16"
						class="size-5"
					/>
					<h4>Instrument</h4>
				</div>
				<div class="flex gap-1 items-center">
					<UIcon name="i-majesticons:music" class="size-5" />
					<h4>Gen</h4>
				</div>
			</div>

			<!-- locatie, autor, data -->
			<div v-if="!musician" class="flex gap-x-2 text-white/75">
				<div class="flex gap-x-1 items-center">
					<UIcon
						name="i-material-symbols-light:location-on"
						class="size-5"
					/>
					<h4>Locatie</h4>
				</div>
				<div class="flex gap-x-1 items-center">
					<UIcon name="i-material-symbols-person" class="size-5" />
					<h4>Autor</h4>
				</div>
				<div class="flex gap-x-1 items-center">
					<UIcon name="i-clarity:date-solid" class="size-5" />
					<h4>Autor</h4>
				</div>
			</div>
		</div>

		<!-- DESC -->
		<div>
			<p class="font-secondary">
				Lorem ipsum dolor sit amet consectetur. Ornare placerat
				fringilla semper viverra tincidunt pulvinar et diam dignissim.
				Eget vitae quam nulla enim commodo. Vel massa ante nibh
				fringilla blandit nam.
			</p>
		</div>

		<UButton to="/postari/test" class="w-fit" size="xl">Mai multe</UButton>
	</div>
</template>

<script setup lang="ts">
	const props = defineProps(["musician"]);
</script>
