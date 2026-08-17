import path from "path";
import fs from "fs";

export function capitalize(word: string): string {
	return word.charAt(0).toUpperCase() + word.slice(1);
}

export function formatFile(codewarsPath: string): void {
	console.log(`✨ formatting README.md...`);

	const prettier = Bun.spawnSync(
		["bunx", "prettier", "--write", "README.md"],
		{
			cwd: codewarsPath,
			stdio: ["inherit", "inherit", "inherit"],
		},
	);

	if (prettier.exitCode !== 0) {
		console.error("\n❎ prettier command failed");
		process.exit(1);
	}
}

export function getNames(): {
	exerciseFolderName: string;
	exerciseCapitalized: string;
} {
	const exerciseFolderName = path.basename(process.cwd());
	const exerciseArray = exerciseFolderName.split("-");
	const exerciseCapitalized = exerciseArray
		.map((word) => capitalize(word))
		.join(" ");

	return { exerciseFolderName, exerciseCapitalized };
}

export function getPath(): {
	kyuPath: string;
	codewarsPath: string;
} {
	const kyuPath = path.dirname(process.cwd());

	if (!fs.existsSync(kyuPath)) {
		console.error(`\n❎ couldn't find level folder`);
		process.exit(1);
	}

	const codewarsPath = path.dirname(kyuPath);

	if (!fs.existsSync(codewarsPath)) {
		console.error(`\n❎ couldn't find /exercism folder`);
		process.exit(1);
	}

	return { kyuPath, codewarsPath };
}
