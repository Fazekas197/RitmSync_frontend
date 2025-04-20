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
		formField: {
			variants: {
				size: {
					md: {
						root: "text-2xl",
					},
				},
			},
		},
		input: {
			slots: {
				root: "w-full font-secondary",
			},
		},
	},
});
