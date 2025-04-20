<template>
	<div class="space-y-2">
		<h1 class="text-4xl">Colaborări</h1>
		<div class="flex gap-x-2">
			<Filter />

			<UModal title="Sortează">
				<UButton
					icon="i-flowbite:sort-outline"
					size="xl"
					class="text-2xl text-black font-sans bg-transparent border-2 rounded-xl border-primary px-3 py-1"
				>
					Sortează
				</UButton>

				<template #body>
					<div class="text-xl space-y-2">
						<UFormField label="Criteriu" class="w-full">
							<USelectMenu highlight class="w-full" />
						</UFormField>
						<UButton class="text-lg mt-3">Sortează</UButton>
					</div>
				</template>
			</UModal>
		</div>
	</div>
	<PostCard
		title="Titlu"
		ins="Bass"
		gen="Rock"
		loc="Iasi"
		author="Fazekas Cosmin"
		date="15.02.2025"
		desc="Lorem ipsum dolor sit amet consectetur. Ornare placerat fringilla semper viverra tincidunt pulvinar et diam dignissim. Eget vitae quam nulla enim commodo. Vel massa ante nibh fringilla blandit nam..."
	/>
</template>
