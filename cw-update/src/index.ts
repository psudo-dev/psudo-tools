#!/usr/bin/env bun

import path from "path";
import { formatFile, getNames, getPath } from "./utils";
import { createBadge } from "./create-badge";
import { updateReadme } from "./update-readme";
import { gitCommands } from "./git-commands";

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
