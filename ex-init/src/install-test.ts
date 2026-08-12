export function installTest(exercisePath: string): void {
	console.log("\n📦️ installing test dependencies...\n");
	const install = Bun.spawnSync(["corepack", "yarn", "install"], {
		cwd: exercisePath,
		stdio: ["inherit", "inherit", "inherit"],
	});

	if (install.exitCode !== 0) {
		console.error("❎ exercism test installation has failed");
		process.exit(1);
	}
}
