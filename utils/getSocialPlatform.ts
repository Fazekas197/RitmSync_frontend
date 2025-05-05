import { availableSocials } from "~/types/social";

export default function (link: string): string | null {
	const url = new URL(link);
	const hostname = url.hostname.toLowerCase();

	for (const platform in availableSocials) {
		if (hostname.includes(platform)) {
			return platform;
		}
	}

	return null;
}
