export function formatFiles(): void {
	console.log("✨ formatting files...");

	const biome = Bun.spawnSync(["bun", "run", "biome"], {
		stdio: ["inherit", "inherit", "inherit"],
	});

	if (biome.exitCode !== 0) {
		console.error("\n⚠️  biome migrate failed");
		process.exit(1);
	}

	const check = Bun.spawnSync(["bun", "run", "format"], {
		stdio: ["inherit", "inherit", "inherit"],
	});

	if (check.exitCode !== 0) {
		console.error("\n⚠️  format command failed");
		process.exit(1);
	}
}
