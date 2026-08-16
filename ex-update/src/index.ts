#!/usr/bin/env bun

import { formatFile, getNames, getPath } from "./utils";
import { createBadge } from "./create-badge";
import { updateReadme } from "./update-readme";
import { gitCommands } from "./git-commands";

const { exerciseFolderName, exerciseCapitalized } = getNames();
const exercismPath = getPath();
const exerciseBadge = createBadge(exerciseFolderName, exerciseCapitalized);

updateReadme(exercismPath, exerciseBadge);
formatFile(exercismPath);
gitCommands(exercismPath, exerciseCapitalized);

console.log(`✅ exercism/README.md update completed!\n`);
