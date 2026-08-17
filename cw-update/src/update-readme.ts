import path from "path";
import fs from "fs";

export function updateReadme(
	codewarsPath: string,
	exerciseBadge: string,
	kyuLevel: string,
) {
	const readmePath = path.join(codewarsPath, "README.md");

	if (!fs.existsSync(readmePath)) {
		console.error(`\n❎ couldn't find README.md`);
		process.exit(1);
	}

	// selects the respective kyu level section
	// and adds the new badge at the end
	const regexp = new RegExp(
		`###\\s${kyuLevel}[\\s\\S]+\\(.\\/${kyuLevel}[\\w-\\/]+README.md\\)`,
		"i",
	);
	const readmeRaw = fs.readFileSync(readmePath, "utf-8");
	const updatedReadme = readmeRaw.replace(regexp, `$& ${exerciseBadge}`);

	console.log("📝 updating README.md with new badge");

	fs.writeFileSync(readmePath, updatedReadme);
}
