export function getRepositoryUrl(): string {
	const result = Bun.spawnSync([
		"git",
		"config",
		"--get",
		"remote.origin.url",
	]);

	if (result.exitCode !== 0) {
		console.error("\n❎ couldn't get git remote url");
		process.exit(1);
	}

	const url = result.stdout.toString().trim();
	// in case the url ends with .git
	let repositoryUrl = url.replace(/\.git$/, "");
	// in case it's in SSH format
	if (repositoryUrl.includes("git@github.com:"))
		repositoryUrl = repositoryUrl.replace(
			"git@github.com:",
			"https://github.com/",
		);

	return repositoryUrl;
}
