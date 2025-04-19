<template>
	<div class="space-y-6">
		<h1 class="text-4xl">Creaza postare</h1>
		<form class="space-y-3">
			<UFormField label="Titlu" required>
				<UInput highlight />
			</UFormField>
			<div class="flex gap-x-3">
				<UFormField label="Județ" required class="w-full">
					<USelectMenu :items="items" highlight class="w-full" />
				</UFormField>
				<UFormField
					label="Instrumente"
					required
					class="w-full max-w-1/2"
				>
					<USelectMenu
						:items="items"
						multiple
						highlight
						class="w-full"
					/>
				</UFormField>
			</div>
			<UFormField label="Genuri muzicale" required>
				<USelectMenu :items="items" multiple highlight class="w-full" />
			</UFormField>
			<UFormField label="Descriere" required>
				<UTextarea class="w-full" highlight :rows="10" />
			</UFormField>
			<UFormField label="Telefon">
				<UInput highlight />
			</UFormField>
			<UFormField label="Email" name="email">
				<UInput highlight />
			</UFormField>
			<UFormField label="Socials">
				<div class="flex justify-between gap-6">
					<UInput highlight />
					<UButton size="lg">Adaugă</UButton>
				</div>
			</UFormField>
			<UButton type="submit" class="text-xl"> Crează </UButton>
		</form>
	</div>
</template>

<script setup lang="ts">
	const items = ref(["Backlog", "Todo", "In Progress", "Done"]);
</script>
