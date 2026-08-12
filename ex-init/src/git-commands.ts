export function gitCommands(
	exercisePath: string,
	track: string,
	exercise: string,
): void {
	console.log(`\n🏷️  initial Commit: exercism/${track}/${exercise}\n`);
	const gitAdd = Bun.spawnSync(["git", "add", "."], {
		cwd: exercisePath,
		stdio: ["inherit", "inherit", "inherit"],
	});

	if (gitAdd.exitCode !== 0) {
		console.error("❎ git add has failed");
		process.exit(1);
	}

	const gitCommit = Bun.spawnSync(
		["git", "commit", "-m", `[${track}] ${exercise}: initial commit`],
		{ cwd: exercisePath, stdio: ["inherit", "inherit", "inherit"] },
	);

	if (gitCommit.exitCode !== 0) {
		console.error("❎ git commit has failed");
		process.exit(1);
	}

	const gitPush = Bun.spawnSync(["git", "push"], {
		cwd: exercisePath,
		stdio: ["inherit", "inherit", "inherit"],
	});

	if (gitPush.exitCode !== 0) {
		console.error("❎ git push has failed");
		process.exit(1);
	}
}
