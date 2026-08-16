import fs from "fs";

export function getBadges(): string {
	if (!fs.existsSync("./README.md")) {
		console.error("\n❎ couldn't find README.md");
		process.exit(1);
	}

	console.log("\n📝 getting badges from README.md...");

	const readmeTemp = fs.readFileSync("./README.md", "utf-8");

	// positive lookahead + positive lookbehind
	// capture group = all badges minus the first badge
	const regexp = /(?<=#\sFrontend[\s\S]*\)\s!\[)([\s\S]*?)(?=\n#)/;
	const match = readmeTemp.match(regexp);

	if (match) return `![${match[1].trim()}`;
	else {
		console.error("\n❎ couldn't find badges");
		process.exit(1);
	}
}
