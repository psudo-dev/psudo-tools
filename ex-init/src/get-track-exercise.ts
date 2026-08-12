export function getTrackExercise(args: string[]): {
	track: string;
	exercise: string;
} {
	let track = "";
	let exercise = "";

	for (const arg of args) {
		if (arg.startsWith("--track=")) track = arg.split("=")[1];
		if (arg.startsWith("--exercise=")) exercise = arg.split("=")[1];
	}

	if (!track || !exercise) {
		console.error("❎ --track and --exercise are required");
		process.exit(1);
	}

	return { track, exercise };
}
