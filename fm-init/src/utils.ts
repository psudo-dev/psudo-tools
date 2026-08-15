import path from "node:path";
import fs from "fs";
import { BadgeConfig, Difficulty, Stack } from "./types";
import { difficulties, folders, stacks } from "./constants";

export function capitalize(word: string): string {
	return word.charAt(0).toUpperCase() + word.slice(1);
}

export function createBadge(config: BadgeConfig): string {
	const { text, color, url } = config;
	let logo = "";
	if (config.logo) logo = `&logo=${config.logo}`;
	let logoColor = "";
	if (config.logoColor) logoColor = `&logoColor=${config.logoColor}`;
	if (url)
		return `[![${text}](https://img.shields.io/badge/${encodeURIComponent(text)}-${color}?style=flat-square${logo}${logoColor})](${url}) `;
	else
		return `![${text}](https://img.shields.io/badge/${encodeURIComponent(text)}-${color}?style=flat-square${logo}${logoColor})`;
}

export function isDifficulty(value: unknown): value is Difficulty {
	return (
		typeof value === "string" && difficulties.includes(value as Difficulty)
	);
}

export function isStack(value: unknown): value is Stack {
	return typeof value === "string" && stacks.includes(value as Stack);
}

export function getProjectName(): {
	projectNameLowerCase: string;
	projectNameCapitalized: string;
} {
	const folderName = path.basename(process.cwd());

	if (!folderName.includes("frontend-mentor")) {
		console.error("\n❎ incorrect folder");
		process.exit(1);
	}

	const projectName = folderName.split("_-_")[1].split("-");

	const projectNameLowerCase = projectName.join(" ");
	const projectNameCapitalized = projectName
		.map((word) => capitalize(word))
		.join(" ");

	return { projectNameLowerCase, projectNameCapitalized };
}

export function getArgs(): {
	difficulty: Difficulty;
	projectUrl: string;
} {
	const args = process.argv.slice(2);
	let difficulty = "";
	let projectUrl = "";

	for (const arg of args) {
		if (isDifficulty(arg)) difficulty = arg;
		if (arg.startsWith("https://www.frontendmentor.io/")) projectUrl = arg;
	}

	if (!isDifficulty(difficulty) || !projectUrl) {
		console.error("\n❎ difficulty level and project url are required");
		process.exit(1);
	}

	return { difficulty, projectUrl };
}

export function createFolders() {
	console.log("\n📂 creating folders...");

	folders.forEach((folder) => fs.mkdirSync(`./${folder}`));
}
