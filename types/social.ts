export interface Social {
	link: string;
	platform: keyof typeof availableSocials;
}

export const availableSocials = {
	youtube: "i-si:youtube-fill",
	facebook: "i-ic:outline-facebook",
	spotify: "i-mdi:spotify",
	instagram: "i-mdi:instagram",
	tiktok: "i-ic:baseline-tiktok",
};
