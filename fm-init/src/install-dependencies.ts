export function installDependencies(): void {
	console.log("\n📦️ installing dependencies...\n");

	const bunInit = Bun.spawnSync(["bun", "init", "-y"], {
		stdio: ["inherit", "inherit", "inherit"],
	});

	if (bunInit.exitCode !== 0) {
		console.error("\n❎ bun init command failed");
		process.exit(1);
	}

	const bunAdd = Bun.spawnSync(["bun", "add", "-d", "vite", "typescript"], {
		stdio: ["inherit", "inherit", "inherit"],
	});

	if (bunAdd.exitCode !== 0) {
		console.error("\n❎ dev dependencies installation failed");
		process.exit(1);
	}
}
