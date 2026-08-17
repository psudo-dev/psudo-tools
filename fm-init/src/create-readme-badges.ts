import { BadgeConfig } from "./types";
import { createBadge } from "./utils";
import {
	difficulty,
	difficultyCapitalized,
	projectNameCapitalized,
	projectUrl,
} from "./project-variables";
import { difficultyColors, stackColors } from "./constants";

const frontendmentor: BadgeConfig = {
	text: `${difficultyCapitalized}-${projectNameCapitalized}`,
	color: `${difficultyColors[difficulty]}`,
	url: `${projectUrl}`,
	logo: "frontendmentor",
};

const html5: BadgeConfig = {
	text: `HTML5`,
	color: `${stackColors["html"]}`,
	logo: "html5",
	logoColor: "white",
};

const semanticHtml: BadgeConfig = {
	text: `Semantic HTML`,
	color: `${stackColors["html"]}`,
	logo: "html5",
	logoColor: "white",
};

const darkMode: BadgeConfig = {
	text: `Dark Mode`,
	color: `${stackColors["darkmode"]}`,
};

const accessibility: BadgeConfig = {
	text: `Accessibility`,
	color: `${stackColors["html"]}`,
};

const css: BadgeConfig = {
	text: `CSS3`,
	color: `${stackColors["css"]}`,
	logo: "css",
	logoColor: "white",
};

const fluidCSS: BadgeConfig = {
	text: `Fluid CSS`,
	color: `${stackColors["css"]}`,
	logo: "css",
	logoColor: "white",
};

const bem: BadgeConfig = {
	text: `BEM`,
	color: `${stackColors["css"]}`,
};

const cssAnimation: BadgeConfig = {
	text: `CSS Animation`,
	color: `${stackColors["css"]}`,
	logo: "css",
	logoColor: "white",
};

const tailwind: BadgeConfig = {
	text: `Tailwind CSS`,
	color: `${stackColors["tailwind"]}`,
	logo: "tailwind",
	logoColor: "white",
};

const typescript: BadgeConfig = {
	text: `TypeScript`,
	color: `${stackColors["typescript"]}`,
	logo: "typescript",
	logoColor: "white",
};

const vite: BadgeConfig = {
	text: `Vite`,
	color: `${stackColors["vite"]}`,
	logo: "vite",
	logoColor: "white",
};

const bun: BadgeConfig = {
	text: `Bun`,
	color: `${stackColors["bun"]}`,
	logo: "bun",
	logoColor: "white",
};

const mockApi: BadgeConfig = {
	text: `Mock API`,
	color: `${stackColors["api"]}`,
};

const statePersistence: BadgeConfig = {
	text: `State Persistence`,
	color: `${stackColors["api"]}`,
};

export const frontendMentorBadge = createBadge(frontendmentor);
export const html5Badge = createBadge(html5);
export const semanticHtmlBadge = createBadge(semanticHtml);
export const darkModeBadge = createBadge(darkMode);
export const accessibilityBadge = createBadge(accessibility);
export const cssBadge = createBadge(css);
export const fluidCssBadge = createBadge(fluidCSS);
export const bemBadge = createBadge(bem);
export const cssAnimationBadge = createBadge(cssAnimation);
export const tailwindBadge = createBadge(tailwind);
export const typescriptBadge = createBadge(typescript);
export const viteBadge = createBadge(vite);
export const bunBadge = createBadge(bun);
export const mockApiBadge = createBadge(mockApi);
export const statePersistenceBadge = createBadge(statePersistence);
