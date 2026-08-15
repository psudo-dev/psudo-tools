import fs from "fs";
import { footerHtml, linkCSSToHtml } from "./templates-static";

export function getChallengeInstructions(): string {
	console.log("✏️  parsing challenge instructions to README.md...");

	if (!fs.existsSync("./.frontend-mentor/README.md")) {
		console.error("\n❎ couldn't find /.frontend-mentor/README.md");
		process.exit(1);
	}

	const readmeTemp = fs.readFileSync("./.frontend-mentor/README.md", "utf-8");

	// selects challenge instructions from the original README.md
	return readmeTemp.split("## The challenge")[1].split("\n##")[0];
}

function getStyleGuide(): string {
	if (!fs.existsSync("./.frontend-mentor/style-guide.md")) {
		console.error("\n❎ couldn't find /.frontend-mentor/style-guide.md");
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
		console.error("\n❎ couldn't find index.html");
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
