export function capitalize(word: string): string {
	return word.charAt(0).toUpperCase() + word.slice(1);
}

export function formatFile(indexRepoPath: string): void {
	console.log(`✨ formatting frontend-mentor/README.md...`);

	const prettier = Bun.spawnSync(
		["bunx", "prettier", "--write", "README.md"],
		{
			cwd: indexRepoPath,
			stdio: ["inherit", "inherit", "inherit"],
		},
	);

	if (prettier.exitCode !== 0) {
		console.error("\n❎ prettier command failed");
		process.exit(1);
	}
}
