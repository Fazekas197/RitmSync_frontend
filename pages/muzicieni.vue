<template>
	<div class="flex flex-col gap-y-2">
		<h1 class="text-4xl">Muzicieni</h1>
		<div class="flex gap-x-2">
			<div
				class="flex items-center gap-x-1 border-2 rounded-xl border-primary px-3 py-1"
			>
				<UIcon name="i-mage:filter" class="size-7 -z-10" />
				<h2 class="text-2xl">Filtrează</h2>
			</div>
			<div
				class="flex items-center gap-x-1 border-2 rounded-xl border-primary px-3 py-1"
			>
				<UIcon name="i-flowbite:sort-outline" class="size-7 -z-10" />
				<h2 class="text-2xl">Sortează</h2>
			</div>
		</div>
	</div>
	<PostCard musician="true" />
</template>
