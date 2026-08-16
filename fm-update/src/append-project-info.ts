import path from "path";
import fs from "fs";
import { getBadges } from "./get-badges";
import { getRepositoryUrl } from "./get-repository-url";

export function appendProjectInfo(
	indexRepoPath: string,
	projectNameCapitalized: string,
): void {
	const badges = getBadges();
	const repositoryUrl = getRepositoryUrl();
	const indexRepoReadmePath = path.join(indexRepoPath, "README.md");

	if (!fs.existsSync(indexRepoReadmePath)) {
		console.error(`\n❎ couldn't find frontend-mentor/README.md`);
		process.exit(1);
	}

	const insert = `\n
#### [${projectNameCapitalized}](${repositoryUrl})\n
${badges}\n
`;

	const indexRepoReadme = fs.readFileSync(indexRepoReadmePath, "utf-8");

	// select the line between ## Projects and the last project
	const regex = /(?<=##\sProjects)([\s\S]*?)(?=##)/;
	// replaces the empty line with the new project link and badges
	const newReadme = indexRepoReadme.replace(regex, insert);

	console.log("✏️  adding new project to frontend-mentor/README.md");

	fs.writeFileSync(indexRepoReadmePath, newReadme);
}
