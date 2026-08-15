import { Difficulty, Stack } from "./types";
import { capitalize, getArgs, getProjectName } from "./utils";

export const folders = ["public", "src", "css", ".frontend-mentor"];

export const difficulties = [
	"newbie",
	"junior",
	"intermediate",
	"advanced",
	"guru",
] as const;

export const difficultyColors: Record<Difficulty, string> = {
	newbie: "47B6D4",
	junior: "2EC866",
	intermediate: "F7BF25",
	advanced: "F37317",
	guru: "E11D48",
};

export const stacks = [
	"html",
	"css",
	"tailwind",
	"typescript",
	"vite",
	"bun",
	"api",
	"darkmode",
] as const;

export const stackColors: Record<Stack, string> = {
	html: "E34F26",
	css: "2C4ADD",
	tailwind: "06B6D4",
	typescript: "3178C6",
	vite: "9135FF",
	bun: "000000",
	api: "F7BF25",
	darkmode: "2C2C2C",
};

export const { projectNameLowerCase, projectNameCapitalized } =
	getProjectName();

export const { difficulty, projectUrl } = getArgs();

export const difficultyCaptalized = capitalize(difficulty);
