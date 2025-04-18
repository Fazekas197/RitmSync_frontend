<template>
	<!-- TOP -->
	<div class="flex flex-col gap-y-2 items-center">
		<UAvatar
			icon="i-material-symbols-person"
			class="bg-gradient-to-br from-[#2e2e2e] to-[#121212] size-28 text-7xl"
		/>
		<h1 class="text-4xl">Nume Prenume</h1>
		<div class="flex gap-x-3">
			<UIcon
				name="i-si:youtube-fill"
				class="size-8 bg-gradient-to-br from-[#2e2e2e] to-[#121212]"
			/>
			<UIcon
				name="i-ic:outline-facebook"
				class="size-8 bg-gradient-to-br from-[#2e2e2e] to-[#121212]"
			/>
			<UIcon
				name="i-mdi:spotify"
				class="size-8 bg-gradient-to-br from-[#2e2e2e] to-[#121212]"
			/>
			<UIcon
				name="i-mdi:instagram"
				class="size-8 bg-gradient-to-br from-[#2e2e2e] to-[#121212]"
			/>
			<UIcon
				name="i-ic:baseline-tiktok"
				class="size-8 bg-gradient-to-br from-[#2e2e2e] to-[#121212]"
			/>
		</div>
	</div>

	<!-- NAV -->
	<div class="flex pt-5 px-10 justify-between">
		<UButton
			color="neutral"
			variant="ghost"
			class="font-sans text-3xl underline"
			>Profil</UButton
		>
		<UButton color="neutral" variant="ghost" class="font-sans text-3xl"
			>Postări</UButton
		>
	</div>

	<!-- DIVIDER -->
	<div class="w-full bg-black h-[1px]"></div>

	<!-- GENERAL -->
	<div>
		<h2 class="text-2xl pb-1">General</h2>
		<div class="text-black/75 text-lg">
			<div class="flex items-center gap-x-1">
				<UIcon
					name="i-material-symbols-light:location-on"
					class="size-6"
				/>
				<h4>Locatie</h4>
			</div>
			<div class="flex items-center gap-x-1">
				<UIcon
					name="i-qlementine-icons:guitar-strat-16"
					class="size-5"
				/>
				<h4>Instrument</h4>
			</div>
			<div class="flex gap-x-1 items-center">
				<UIcon name="i-majesticons:music" class="size-5" />
				<h4>Gen</h4>
			</div>
		</div>
	</div>

	<!-- DESC -->
	<div>
		<h2 class="text-2xl pb-1">Descriere</h2>
		<p class="text-lg font-secondary">
			Lorem ipsum dolor sit amet consectetur. Etiam faucibus nulla sapien
			metus quis eget arcu tempor. Tellus proin arcu cursus tincidunt
			pretium pulvinar. Cras facilisis mi ipsum in blandit eu eu tortor.
			Ultricies ultrices nam et dignissim nec. Mauris sit tortor tempor
			vitae venenatis id elementum et. Ultricies ultrices nam et dignissim
			nec. Mauris sit tortor tempor vitae venenatis id elementum et. .
		</p>
	</div>

	<!-- EXPERIENTA -->
	<div>
		<h2 class="text-2xl pb-1">Experiență</h2>
		<div class="font-secondary">
			<h3 class="text-lg">Nume trupa - Instrument</h3>
			<p class="text-sm">luna an - luna an : timp</p>
		</div>
	</div>

	<!-- CONTACT -->
	<div>
		<h2 class="text-2xl pb-1">Contact</h2>
		<div class="flex gap-x-2 items-center text-lg font-secondary">
			<UIcon
				name="i-material-symbols:mail"
				class="size-7 bg-gradient-to-br from-[#2e2e2e] to-[#121212]"
			/>
			<p>emailultau@gmail.com</p>
		</div>
		<div class="flex gap-x-2 items-center text-lg font-secondary">
			<UIcon
				name="i-ic:baseline-call"
				class="size-7 bg-gradient-to-br from-[#2e2e2e] to-[#121212]"
			/>
			<p>0753 xxx xxx</p>
		</div>
	</div>
</template>
