import path from "path";
import fs from "fs";

export function getIndexRepository(): string {
	const parentDir = path.dirname(process.cwd());

	const indexRepoPath = path.join(parentDir, "frontend-mentor");

	if (!fs.existsSync(indexRepoPath)) {
		console.error(`\n❎ couldn't find /frontend-mentor folder`);
		process.exit(1);
	}

	return indexRepoPath;
}
