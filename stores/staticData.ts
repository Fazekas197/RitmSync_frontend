import { defineStore } from "pinia";
import { useRuntimeConfig } from "#app";

export const useStaticDataStore = defineStore("staticData", {
	state: () => {
		return {
			staticData: {
				counties: [] as { name: string; id: number; abv: string }[],
				genres: [] as { id: number; name: string }[],
				instruments: [] as { id: number; name: string }[],
			},
		};
	},
	getters: {
		counties: (state) => state.staticData.counties,
		genres: (state) => state.staticData.genres,
		instruments: (state) => state.staticData.instruments,

		// Modified data for select components
		modCounties(): object {
			return this.counties.map((county) => ({
				label: county.name,
				id: county.id,
			}));
		},
		modGenres(): object {
			return this.genres.map((genre) => ({
				label: genre.name,
				id: genre.id,
			}));
		},
		modInstruments(): object {
			return this.instruments.map((instrument) => ({
				label: instrument.name,
				id: instrument.id,
			}));
		},
	},
	actions: {
		async getData() {
			const config = useRuntimeConfig();

			this.staticData = await $fetch(
				`${config.public.API_URL}/staticData`
			);
		},
	},
});
