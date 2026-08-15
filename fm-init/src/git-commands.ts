import { projectNameLowerCase } from "./project-variables";

export function gitCommands(message: string): void {
	console.log(`\n🏷️  [GIT] ${projectNameLowerCase}: ${message}\n`);
	const gitAdd = Bun.spawnSync(["git", "add", "."], {
		stdio: ["inherit", "inherit", "inherit"],
	});

	if (gitAdd.exitCode !== 0) {
		console.error("\n❎ git add has failed");
		process.exit(1);
	}

	const gitCommit = Bun.spawnSync(
		["git", "commit", "-m", `${projectNameLowerCase}: ${message}`],
		{ stdio: ["inherit", "inherit", "inherit"] },
	);

	if (gitCommit.exitCode !== 0) {
		console.error("\n❎ git commit has failed");
		process.exit(1);
	}

	const gitPush = Bun.spawnSync(["git", "push"], {
		stdio: ["inherit", "inherit", "inherit"],
	});

	if (gitPush.exitCode !== 0) {
		console.error("\n❎ git push has failed");
		process.exit(1);
	}
}
