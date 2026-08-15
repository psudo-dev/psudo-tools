import fs from "fs";
import { packageScripts, tsconfig, viteConfig } from "./templates-static";

export function writeTsConfig(): void {
	console.log("✏️  rewriting tsconfig.json...");

	fs.writeFileSync("./tsconfig.json", tsconfig);
}

export function writeViteConfig(): void {
	console.log("📝 creating vite.config.ts...");

	fs.writeFileSync("./vite.config.ts", viteConfig);
}

export function writePackageJson(): void {
	if (!fs.existsSync("./package.json")) {
		console.error("\n❎ couldn't find package.json");
		process.exit(1);
	}

	const packageJson = fs.readFileSync("./package.json", "utf-8");
	const packageParse = JSON.parse(packageJson);
	delete packageParse.module;
	packageParse.scripts = packageScripts;
	const packageStringified = JSON.stringify(packageParse);

	console.log("✏️  adding scripts to package.json...");

	fs.writeFileSync("./package.json", packageStringified);
}

export function writePrettierIgnore(): void {
	console.log("📝 creating .prettierignore...");
	fs.writeFileSync("./.prettierignore", "*.html\n");
}
