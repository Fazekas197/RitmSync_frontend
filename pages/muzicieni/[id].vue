<template>
	<!-- TOP -->
	<div class="flex flex-col gap-y-2 items-center">
		<UAvatar
			icon="i-material-symbols-person"
			class="bg-gradient-to-br from-[#2e2e2e] to-[#121212] size-28 text-7xl"
		/>
		<h1 class="text-4xl">{{ user.fullName }}</h1>
		<div class="space-x-3">
			<ULink
				v-for="social in user?.socials"
				:to="social.link"
				target="_blank"
			>
				<UIcon
					:name="availableSocials[social.platform]"
					class="size-9 bg-gradient-to-br from-[#2e2e2e] to-[#121212]"
				/>
			</ULink>
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
				<h4>{{ user.county }}</h4>
			</div>
			<div class="flex items-center gap-x-1">
				<UIcon
					name="i-qlementine-icons:guitar-strat-16"
					class="size-5"
				/>
				<h4>{{ user.instruments.join(", ") }}</h4>
			</div>
			<div class="flex gap-x-1 items-center">
				<UIcon name="i-majesticons:music" class="size-5" />
				<h4>{{ user.genres.join(", ") }}</h4>
			</div>
		</div>
	</div>

	<!-- DESC -->
	<div>
		<h2 class="text-2xl pb-1">Descriere</h2>
		<p class="text-lg font-secondary">
			{{ user.desc }}
		</p>
	</div>

	<!-- EXPERIENTA -->
	<div>
		<h2 class="text-2xl pb-1">Experiență</h2>
		<div v-for="exp in user.experience" class="font-secondary">
			<h3 class="text-lg">{{ exp.projectName }}</h3>
			<p class="text-sm">
				{{ getExperience(exp.start, exp.end) }}
			</p>
		</div>
	</div>

	<!-- CONTACT -->
	<div v-if="user?.phone || user?.email">
		<h2 class="text-2xl pb-1">Contact</h2>
		<div
			v-if="user.email"
			class="flex gap-x-2 items-center text-lg font-secondary"
		>
			<UIcon
				name="i-material-symbols:mail"
				class="size-7 bg-gradient-to-br from-[#2e2e2e] to-[#121212]"
			/>
			<p>{{ user.email }}</p>
		</div>
		<div
			v-if="user.phone"
			class="flex gap-x-2 items-center text-lg font-secondary"
		>
			<UIcon
				name="i-ic:baseline-call"
				class="size-7 bg-gradient-to-br from-[#2e2e2e] to-[#121212]"
			/>
			<p>{{ user.phone }}</p>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { availableSocials } from "~/types/social";
	import type { User } from "~/types/user";

	const store = useUsersStore();
	const router = useRoute();
	var user = (await store.getUserById(Number(router.params.id))) as User;

	function getExperience(start: Date, end: Date) {
		if (!end) return `${formatDate(start)} - prezent`;

		const startDate = new Date(start);
		const endDate = new Date(end);

		const year = endDate.getFullYear() - startDate.getFullYear();
		const month = endDate.getMonth() - startDate.getMonth();

		return `${formatDate(start)} - ${formatDate(end)} : ${
			year > 0 ? year + "ani" : ""
		}  ${month} luni`;
	}

	function formatDate(createdAt: Date) {
		const date = new Date(createdAt);
		const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
		const month =
			date.getMonth() + 1 < 10
				? `0${date.getMonth() + 1}`
				: date.getMonth() + 1;
		return day + "." + month + "." + date.getFullYear();
	}
</script>
