export default defineAppConfig({
	ui: {
		button: {
			slots: {
				base: "font-secondary",
			},
		},
		link: {
			variants: {
				active: { false: "text-black" },
			},
		},
	},
});
