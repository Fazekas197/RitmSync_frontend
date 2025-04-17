<template>
	<!-- TOP -->
	<div class="flex flex-col gap-y-2">
		<h1 class="text-4xl">Titlu Postarii</h1>
		<div class="flex flex-col gap-y-0.5 text-black/75">
			<div class="flex gap-x-1 items-center">
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
			<div class="flex gap-x-2">
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
					<h4>Data</h4>
				</div>
			</div>
		</div>
	</div>

	<!-- CONTENT -->
	<div class="flex flex-col gap-y-4">
		<!-- Desc -->
		<div class="flex flex-col gap-y-1">
			<h2 class="text-2xl">Descriere</h2>
			<p class="font-secondary text-lg">
				Lorem ipsum dolor sit amet consectetur. Etiam faucibus nulla
				sapien metus quis eget arcu tempor. Tellus proin arcu cursus
				tincidunt pretium pulvinar. Cras facilisis mi ipsum in blandit
				eu eu tortor. Ultricies ultrices nam et dignissim nec. Mauris
				sit tortor tempor vitae venenatis id elementum et. Ultricies
				ultrices nam et dignissim nec. Mauris sit tortor tempor vitae
				venenatis id elementum et. .
			</p>
		</div>

		<!-- Socials -->
		<div class="flex flex-col gap-y-1">
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
		<div class="flex flex-col gap-y-1">
			<h2 class="text-2xl">Contact</h2>
			<div class="flex gap-x-2 items-center text-lg font-secondary">
				<UIcon
					name="i-material-symbols:mail"
					class="size-9 bg-gradient-to-br from-[#2e2e2e] to-[#121212]"
				/>
				<p>emailultau@gmail.com</p>
			</div>
			<div class="flex gap-x-2 items-center text-lg font-secondary">
				<UIcon
					name="i-ic:baseline-call"
					class="size-9 bg-gradient-to-br from-[#2e2e2e] to-[#121212]"
				/>
				<p>0753 xxx xxx</p>
			</div>
		</div>
	</div>
</template>
