// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	devtools: { enabled: true },
	modules: ["@nuxt/ui", "@pinia/nuxt"],
	css: ["~/assets/css/main.css"],
	ui: {
		colorMode: false,
	},
	runtimeConfig: {
		public: {
			API_URL: process.env.API_URL,
		},
	},
});
