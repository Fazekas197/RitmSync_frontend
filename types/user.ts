import type { Social } from "./social";
import type { Experience } from "./experience";

export interface User {
	id: number;
	fullName: string;
	openForCollab: boolean;
	phone: string;
	email: string;
	desc: string;
	shortDesc: string;
	county: string;
	experience: Experience[];
	genres: [];
	instruments: [];
	socials: Social[];
}
