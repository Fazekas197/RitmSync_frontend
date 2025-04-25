import type { Social } from "./social";

export interface User {
	id: number;
	fullName: string;
	openForCollab: boolean;
	phone: string;
	email: string;
	desc: string;
	shortDesc: string;
	county: string;
	experience: [];
	genres: [];
	instruments: [];
	socials: Social[];
}
