#!/usr/bin/env bun

import { gitCommands } from "./git-commands";
import { installDependencies } from "./install-dependencies";
import { createFolders } from "./utils";
import { moveFiles } from "./move-files";
import {
	writePackageJson,
	writePrettierIgnore,
	writeTsConfig,
	writeViteConfig,
} from "./write-config";
import { writeCSS, writeIndexHtml, writeReadme } from "./write-files";
import { formatFiles } from "./format-files";

gitCommands("initial commit");
installDependencies();
createFolders();
moveFiles();
writeTsConfig();
writeViteConfig();
writePackageJson();
writePrettierIgnore();
writeIndexHtml();
writeCSS();
writeReadme();
formatFiles();
gitCommands("initial setup");

console.log(`\n✅ setup completed!`);
