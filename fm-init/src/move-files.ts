import fs from "node:fs";
import { indexTS } from "./templates-static";

export function moveFiles(): void {
	console.log("📂 transfering files...");

	if (fs.existsSync("./data.json")) {
		fs.renameSync("./data.json", "./public/data.json");
	}

	if (fs.existsSync("./README.md")) {
		fs.renameSync("./README.md", "./.frontend-mentor/README.md");
	}

	if (fs.existsSync("./README-template.md")) {
		fs.renameSync(
			"./README-template.md",
			"./.frontend-mentor/README-template.md",
		);
	}

	if (fs.existsSync("./style-guide.md")) {
		fs.renameSync("./style-guide.md", "./.frontend-mentor/style-guide.md");
	}

	if (fs.existsSync("./index.ts")) {
		fs.renameSync("./index.ts", "./src/index.ts");
	}

	fs.writeFileSync("./src/index.ts", indexTS);
}
