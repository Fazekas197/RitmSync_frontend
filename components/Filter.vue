<template>
	<UModal title="Filtrează">
		<UButton
			icon="i-mage:filter"
			size="xl"
			class="text-2xl text-black font-sans bg-transparent border-2 rounded-xl border-primary px-3 py-1"
		>
			Filtrează
		</UButton>

		<template #body>
			<div class="text-xl space-y-2">
				<UFormField label="Județ" class="w-full">
					<USelectMenu highlight class="w-full" />
				</UFormField>
				<UFormField label="Instrumente" class="w-full">
					<USelectMenu highlight class="w-full" />
				</UFormField>
				<UFormField label="Genuri Muzicale" class="w-full">
					<USelectMenu highlight class="w-full" />
				</UFormField>
				<UButton class="text-lg mt-3">Filtrează</UButton>
			</div>
		</template>
	</UModal>
</template>
