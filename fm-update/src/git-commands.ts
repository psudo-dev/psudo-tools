export function gitCommands(
	indexRepoPath: string,
	projectNameLowerCase: string,
): void {
	console.log(
		`🏷️  [GIT] frontend-mentor/README.md: added "${projectNameLowerCase}" link and badges`,
	);
	const gitAdd = Bun.spawnSync(["git", "add", "."], {
		cwd: indexRepoPath,
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
			`${projectNameLowerCase}: added link and badges to README`,
		],
		{
			cwd: indexRepoPath,
			stdio: ["inherit", "inherit", "inherit"],
		},
	);

	if (gitCommit.exitCode !== 0) {
		console.error("\n❎ git commit has failed");
		process.exit(1);
	}

	const gitPush = Bun.spawnSync(["git", "push"], {
		cwd: indexRepoPath,
		stdio: ["inherit", "inherit", "inherit"],
	});

	if (gitPush.exitCode !== 0) {
		console.error("\n❎ git push has failed");
		process.exit(1);
	}
}
