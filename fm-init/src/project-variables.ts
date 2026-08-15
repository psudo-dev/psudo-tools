import { capitalize, getArgs, getProjectName } from "./utils";

export const { projectNameLowerCase, projectNameCapitalized } =
	getProjectName();

export const { difficulty, projectUrl } = getArgs();

export const difficultyCapitalized = capitalize(difficulty);
