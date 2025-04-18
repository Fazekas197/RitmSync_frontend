<template>
	<Header />

	<div class="px-8 py-7 pb-32 pt-28 flex gap-y-4 flex-col">
		<slot></slot>
	</div>

	<footer
		class="bg-white fixed bottom-0 w-full flex justify-around py-4 shadow-black/25 shadow-[0px_-8px_80px_5px] rounded-t-4xl"
	>
		<ULink to="/">
			<UIcon name="i-material-symbols-search-rounded" class="size-10" />
		</ULink>

		<ULink to="/muzicieni">
			<UIcon name="i-pepicons-pencil-people" class="size-10" />
		</ULink>

		<ULink to="adauga">
			<UIcon name="i-material-symbols-add-2-rounded" class="size-10" />
		</ULink>
	</footer>
</template>
