import { difficulties, stacks } from "./project-variables";

export type Difficulty = (typeof difficulties)[number];

export type Stack = (typeof stacks)[number];

export interface BadgeConfig {
	text: string;
	color: string;
	url: string;
	logo?: string;
	logoColor?: string;
}
