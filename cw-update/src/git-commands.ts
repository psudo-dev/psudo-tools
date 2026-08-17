export function gitCommands(
	codewarsPath: string,
	exerciseCapitalized: string,
): void {
	const exerciseLowerCase = exerciseCapitalized.toLowerCase();
	console.log(`🏷️  [GIT] README.md: added "${exerciseLowerCase}" badge`);

	const gitAdd = Bun.spawnSync(["git", "add", "."], {
		cwd: codewarsPath,
		stdio: ["inherit", "inherit", "inherit"],
	});

	if (gitAdd.exitCode !== 0) {
		console.error("\n❎ git add has failed");
		process.exit(1);
	}

	const gitCommit = Bun.spawnSync(
		[
			"git",
			"commit",
			"-m",
			`README.md: added "${exerciseLowerCase}" badge`,
		],
		{
			cwd: codewarsPath,
			stdio: ["inherit", "inherit", "inherit"],
		},
	);

	if (gitCommit.exitCode !== 0) {
		console.error("\n❎ git commit has failed");
		process.exit(1);
	}

	const gitPush = Bun.spawnSync(["git", "push"], {
		cwd: codewarsPath,
		stdio: ["inherit", "inherit", "inherit"],
	});

	if (gitPush.exitCode !== 0) {
		console.error("\n❎ git push has failed");
		process.exit(1);
	}
}
