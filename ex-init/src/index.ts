#!/usr/bin/env bun

import path from "node:path";
import { downloadExercise } from "./download-exercise";
import { getTrackExercise } from "./get-track-exercise";
import { getExercismWorkspace } from "./get-workspace";
import { gitCommands } from "./git-commands";
import { installTest } from "./install-test";
import { openFiles } from "./open-files";

const exercismFolder = getExercismWorkspace();
const args = process.argv.slice(2);
const { track, exercise } = getTrackExercise(args);
const exercisePath = path.join(exercismFolder, track, exercise);

downloadExercise(args, exercise);
installTest(exercisePath);
gitCommands(exercisePath, track, exercise);
openFiles(exercisePath, exercise);

console.log(`\n✅ ${exercise} setup completed!`);
