import fs from "fs";

export function openFiles(exercisePath: string, exercise: string): void {
	const files = fs.readdirSync(exercisePath);
	const relevantFiles = files.filter((file) => file.includes(exercise));

	if (relevantFiles.length === 0) {
		console.error("\n❎ exercise and test files not found");
		process.exit(1);
	}

	console.log("\n📂 opening initial files...");
	const openFiles = Bun.spawnSync(
		["code", "--reuse-window", "README.md", ...relevantFiles],
		{
			cwd: exercisePath,
			stdio: ["inherit", "inherit", "inherit"],
		},
	);

	if (openFiles.exitCode !== 0) {
		console.error("\n❎ initial files failed to open on vscode");
		process.exit(1);
	}
}
