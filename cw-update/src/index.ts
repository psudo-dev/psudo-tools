#!/usr/bin/env bun

import path from "node:path";
import { createBadge } from "./create-badge";
import { gitCommands } from "./git-commands";
import { updateReadme } from "./update-readme";
import { formatFile, getNames, getPath } from "./utils";

const { exerciseFolderName, exerciseCapitalized } = getNames();
const { kyuPath, codewarsPath } = getPath();
const kyuLevel = path.basename(kyuPath);
const exerciseBadge = createBadge(
	exerciseFolderName,
	exerciseCapitalized,
	kyuLevel,
);

updateReadme(codewarsPath, exerciseBadge, kyuLevel);
formatFile(codewarsPath);
gitCommands(codewarsPath, exerciseCapitalized);

console.log(`✅ codewars-typescript/README.md update completed!\n`);
