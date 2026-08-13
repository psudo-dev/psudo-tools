#!/usr/bin/env bun

import path from "path";
import fs from "fs";

const folderName = path.basename(process.cwd());
const exerciseFile = `${folderName}.ts`;

if (!fs.existsSync(`./${exerciseFile}`)) {
	console.error(`❎ ${exerciseFile} file not found`);
	process.exit(1);
}

const blue = "#5991FF";
const terminalBlue = Bun.color(blue, "ansi");
const colorReset = "\x1b[0m";

console.log(
	`\n⬆️  submitting ${terminalBlue}${exerciseFile}${colorReset} solution...\n`,
);

const submit = Bun.spawnSync(["exercism", "submit", exerciseFile], {
	stdio: ["inherit", "inherit", "inherit"],
});

if (submit.exitCode !== 0) {
	console.error("\n❎ submission has failed!");
	process.exit(1);
}

console.log(`\n✅ submission completed!`);
