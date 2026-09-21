import fs from "node:fs";
import { footerHtml, linkCSSToHtml } from "./templates-static";

export function getChallengeInstructions(): string {
	if (!fs.existsSync("./.frontend-mentor/README.md")) {
		console.error("\n⚠️  couldn't find /.frontend-mentor/README.md");
		process.exit(1);
	}

	console.log("✏️  parsing challenge instructions to README.md...");

	const readmeTemp = fs.readFileSync("./.frontend-mentor/README.md", "utf-8");

	// selects challenge instructions from the original README.md
	return readmeTemp.split("## The challenge")[1].split("\n##")[0];
}

function getStyleGuide(): string {
	if (!fs.existsSync("./.frontend-mentor/style-guide.md")) {
		console.error("\n⚠️  couldn't find /.frontend-mentor/style-guide.md");
		process.exit(1);
	}

	return fs
		.readFileSync("./.frontend-mentor/style-guide.md", "utf-8")
		.toLowerCase();
}

export function getColorVariables(): string {
	const styleGuide = getStyleGuide();
	const colorsRegexp = /-\s.[\s\S]*?:/g;
	const headingRegexp = /\n###[\s\S]*?\n-/g;

	console.log("✏️  parsing CSS color variables from style-guide.md...");

	// selects Color section from style-guide.md
	const colorVariables = styleGuide
		.split("## colors\n")[1]
		.split("\n## typography")[0]
		.replaceAll(")", ");")
		// deletes unnecessary subheadings
		.replace(headingRegexp, "-")
		// format colors to CSS variables
		.replace(colorsRegexp, (arg) => arg.replaceAll(" ", "-"));

	return colorVariables;
}

function getIndexHtml(): string {
	if (!fs.existsSync("./index.html")) {
		console.error("\n⚠️  couldn't find index.html");
		process.exit(1);
	}

	return fs.readFileSync("./index.html", "utf-8");
}

export function editIndexHtml(): string {
	const indexHTML = getIndexHtml();
	const commentRegexp = /<!--[\s\S]*?-->\r?\n/;
	const styleRegexp = /<style>[\s\S]*?<\/style>\r?\n/i;
	const footerRegexp = /<footer[\s\S]*?<\/footer>/i;

	console.log("index.html: cleaning comments...");
	console.log("index.html: linking CSS/index.css...");
	const indexWithLink = indexHTML.replace(commentRegexp, linkCSSToHtml);
	const indexWithoutComment = indexWithLink.replace(commentRegexp, "");
	console.log("index.html: deleting <style> ... </style>...");
	const indexWithoutStyle = indexWithoutComment.replace(styleRegexp, "");
	console.log("index.html: editing <footer>...");
	console.log("index.html: adding <script>...");
	const indexFinal = indexWithoutStyle.replace(footerRegexp, footerHtml);

	return indexFinal;
}

function getAgentsMd(): string {
	if (!fs.existsSync("./AGENTS.md")) {
		console.error("\n⚠️  couldn't find AGENTS.md");
		process.exit(1);
	}

	return fs.readFileSync("./AGENTS.md", "utf-8");
}

export function editAgentsMd(): string {
	const AgentsMd = getAgentsMd();

	const frontendRegexp =
		/Frontend-Specific Focus Areas[\s\S]*?(?=(?:\n##\s[\s\S])|$)/;

	console.log(
		`AGENTS.md: getting "## Frontend-Specific Focus Areas" section's content...`,
	);
	const instructions = AgentsMd.match(frontendRegexp)?.[0];

	if (!instructions) {
		console.error(
			`\n⚠️  couldn't find "## Frontend-Specific Focus Areas" section in AGENTS.md`,
		);
		process.exit(1);
	} else {
		console.log(`AGENTS.md: consolidanting relevant content...`);
		const formatted = `## ${instructions}`;
		return formatted;
	}
}
