export function downloadExercise(args: string[], exercise: string): void {
	console.log(`\n⬇️  downloading ${exercise} from exercism...`);
	const download = Bun.spawnSync(args, {
		stdio: ["inherit", "inherit", "inherit"],
	});

	if (download.exitCode !== 0) {
		console.error(`❎ ${exercise} download has failed`);
		process.exit(1);
	}
}
