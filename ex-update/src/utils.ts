import path from "path";
import fs from "fs";

export function capitalize(word: string): string {
	return word.charAt(0).toUpperCase() + word.slice(1);
}

export function formatFile(exercismPath: string): void {
	console.log(`✨ formatting README.md...`);

	const prettier = Bun.spawnSync(
		["bunx", "prettier", "--write", "README.md"],
		{
			cwd: exercismPath,
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

export function getPath(): string {
	const typescriptPath = path.dirname(process.cwd());

	if (!fs.existsSync(typescriptPath)) {
		console.error(`\n❎ couldn't find /typescript folder`);
		process.exit(1);
	}

	const exercismPath = path.dirname(typescriptPath);

	if (!fs.existsSync(exercismPath)) {
		console.error(`\n❎ couldn't find /exercism folder`);
		process.exit(1);
	}

	return exercismPath;
}
