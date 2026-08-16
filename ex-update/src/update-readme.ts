import fs from "fs";
import path from "path";

export function updateReadme(
	exercismPath: string,
	exerciseBadge: string,
): void {
	const regexp = /\[!\[Exercism[\s\S]+\(.\/typescript[\w-\/]+README.md\)/;

	const readmePath = path.join(exercismPath, "README.md");

	if (!fs.existsSync(readmePath)) {
		console.error(`\n❎ couldn't find README.md`);
		process.exit(1);
	}

	const readmeRaw = fs.readFileSync(readmePath, "utf-8");
	const updatedReadme = readmeRaw.replace(regexp, `$& ${exerciseBadge}`);

	console.log("📝 updating README.md with new badge");

	fs.writeFileSync(readmePath, updatedReadme);
}
