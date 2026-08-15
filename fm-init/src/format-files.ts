export function formatFiles(): void {
	console.log("✨ formatting files...");

	const prettier = Bun.spawnSync(["bunx", "prettier", "--write", "."], {
		stdio: ["inherit", "inherit", "inherit"],
	});

	if (prettier.exitCode !== 0) {
		console.error("\n❎ prettier command failed");
		process.exit(1);
	}

	const beautify = Bun.spawnSync(
		[
			"bunx",
			"js-beautify",
			"--type",
			"html",
			"-r",
			"-s",
			"2",
			"./index.html",
		],
		{
			stdio: ["inherit", "inherit", "inherit"],
		},
	);

	if (beautify.exitCode !== 0) {
		console.error("\n❎ beautify command failed");
		process.exit(1);
	}
}
