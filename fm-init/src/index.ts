#!/usr/bin/env bun

import { formatFiles } from "./format-files";
import { gitCommands } from "./git-commands";
import { installDependencies } from "./install-dependencies";
import { moveFiles } from "./move-files";
import { createFolders } from "./utils";
import {
	writeBiomeConfig,
	writePackageJson,
	writeTsConfig,
	writeViteConfig,
} from "./write-config";
import {
	writeAgentsMd,
	writeCSS,
	writeIndexHtml,
	writeReadme,
} from "./write-files";

gitCommands("initial commit");
installDependencies();
createFolders();
moveFiles();
writeTsConfig();
writeBiomeConfig();
writeViteConfig();
writePackageJson();
writeAgentsMd();
writeIndexHtml();
writeCSS();
writeReadme();
formatFiles();
gitCommands("initial setup");

console.log(`\n✅ setup completed!`);
