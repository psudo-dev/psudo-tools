import path from "path";
import { capitalize } from "./utils";

export function getProjectName(): {
	projectNameLowerCase: string;
	projectNameCapitalized: string;
} {
	const processPath = path.basename(process.cwd());

	if (!processPath.includes("frontend-mentor")) {
		console.error("\n❎ incorrect folder");
		process.exit(1);
	}

	const projectName = processPath.split("_-_")[1].split("-");
	const projectNameLowerCase = projectName.join(" ");
	const projectNameCapitalized = projectName
		.map((word) => capitalize(word))
		.join(" ");

	return { projectNameLowerCase, projectNameCapitalized };
}
