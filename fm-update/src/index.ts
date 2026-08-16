#!/usr/bin/env bun

import { getProjectName } from "./get-project-name";
import { gitCommands } from "./git-commands";
import { getIndexRepository } from "./get-index-repository";
import { appendProjectInfo } from "./append-project-info";
import { formatFile } from "./utils";

const { projectNameLowerCase, projectNameCapitalized } = getProjectName();
const indexRepoPath = getIndexRepository();

appendProjectInfo(indexRepoPath, projectNameCapitalized);
formatFile(indexRepoPath);
gitCommands(indexRepoPath, projectNameLowerCase);

console.log(`✅ frontend-mentor/README.md update completed!`);
