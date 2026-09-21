import fs from "node:fs";
import { getCssVariables, getReadme } from "./templates-dynamic";
import { indexCSS, resetCSS, utilitiesCSS } from "./templates-static";
import { editAgentsMd, editIndexHtml } from "./write-utils";

export function writeAgentsMd(): void {
	console.log("📝 rewriting AGENTS.md...");

	const agents = editAgentsMd();

	fs.writeFileSync("./AGENTS.md", agents);
}

export function writeReadme(): void {
	console.log("📝 creating README.md...");

	const readme = getReadme();

	fs.writeFileSync("./README.md", readme);
}

export function writeCSS(): void {
	console.log("📝 creating CSS files...");

	const variablesCSS = getCssVariables();

	fs.writeFileSync("./css/index.css", indexCSS);
	fs.writeFileSync("./css/variables.css", variablesCSS);
	fs.writeFileSync("./css/reset.css", resetCSS);
	fs.writeFileSync("./css/utilities.css", utilitiesCSS);
}

export function writeIndexHtml(): void {
	console.log("📝 rewriting index.html...");

	const indexHtml = editIndexHtml();

	fs.writeFileSync("./index.html", indexHtml);
}
