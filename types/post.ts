import type { Social } from "./social";

export interface Post {
	id: number;
	user: string;
	userId: number;
	title: string;
	county: string;
	desc: string;
	shortDesc: string;
	phone: string;
	email: string;
	createdAt: string;
	genres: [];
	instruments: [];
	socials: Social[];
}
