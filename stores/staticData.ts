import { defineStore } from "pinia";
import { useRuntimeConfig } from "#app";

export const useStaticDataStore = defineStore("staticData", {
	state: () => {
		return {
			staticData: {
				counties: [],
				genres: [],
				instruments: [],
			},
		};
	},
	getters: {
		counties: (state) => state.staticData.counties,
		genres: (state) => state.staticData.genres,
		instruments: (state) => state.staticData.instruments,
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
