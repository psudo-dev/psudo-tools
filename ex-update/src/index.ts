#!/usr/bin/env bun

import { createBadge } from "./create-badge";
import { gitCommands } from "./git-commands";
import { updateReadme } from "./update-readme";
import { formatFile, getNames, getPath } from "./utils";

const { exerciseFolderName, exerciseCapitalized } = getNames();
const exercismPath = getPath();
const exerciseBadge = createBadge(exerciseFolderName, exerciseCapitalized);

updateReadme(exercismPath, exerciseBadge);
formatFile(exercismPath);
gitCommands(exercismPath, exerciseCapitalized);

console.log(`✅ exercism/README.md update completed!\n`);
