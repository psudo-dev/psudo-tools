import fs from "fs";
import os from "os";
import path from "path";

export function getExercismWorkspace(): string {
	const configDir =
		process.platform === "win32"
			? process.env.APPDATA ||
				path.join(os.homedir(), "AppData", "Roaming")
			: path.join(os.homedir(), ".config");

	const configPath = path.join(configDir, "exercism", "user.json");

	if (!fs.existsSync(configPath)) {
		console.error(`\n❎ exercism config file not found: ${configPath}`);
		process.exit(1);
	}

	try {
		const rawData = fs.readFileSync(configPath, "utf-8");
		const config = JSON.parse(rawData);

		if (!config.workspace) {
			console.error(`\n❎ "workspace" property is missing in user.json`);
			process.exit(1);
		}

		if (!fs.existsSync(config.workspace)) {
			console.error(
				`\n❎ exercism workspace directory not found: ${config.workspace}`,
			);
			process.exit(1);
		}

		return config.workspace;
	} catch (error) {
		console.error(`\n❎ failed to read/parse user.json: ${error}`);
		process.exit(1);
	}
}
