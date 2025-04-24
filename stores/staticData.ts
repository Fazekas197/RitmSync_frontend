import { defineStore } from "pinia";

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
			this.staticData = await $fetch("http://localhost:5014/staticData");
		},
	},
});
