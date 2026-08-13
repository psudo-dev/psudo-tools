#!/usr/bin/env bun

import path from "path";
import fs from "fs";

const folderName = path.basename(process.cwd());
const exerciseFile = `${folderName}.ts`;

if (!fs.existsSync(`./${exerciseFile}`)) {
	console.error(`\n❎ ${exerciseFile} file not found`);
	process.exit(1);
}

console.log(`\n🚧 running tests: ${exerciseFile}\n`);

const test = Bun.spawnSync(["corepack", "yarn", "test"], {
	stdio: ["inherit", "inherit", "inherit"],
});

if (test.exitCode !== 0) {
	console.error("\n❎ test command has failed!");
	process.exit(1);
}

console.log(`\n✅ testing completed!`);
