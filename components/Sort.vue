<template>
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
</template>
