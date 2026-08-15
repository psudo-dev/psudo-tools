import { BadgeConfig } from "./types";
import { createBadge } from "./utils";
import {
	difficulty,
	difficultyColors,
	projectNameCapitalized,
	projectUrl,
	stackColors,
} from "./project-variables";

const frontendmentor: BadgeConfig = {
	text: `Frontend Mentor-${projectNameCapitalized}`,
	color: `${difficultyColors[difficulty]}`,
	url: `${projectUrl}`,
	logo: "frontendmentor",
};

const html5: BadgeConfig = {
	text: `HTML5`,
	color: `${stackColors["html"]}`,
	url: "",
	logo: "html5",
	logoColor: "white",
};

const semanticHtml: BadgeConfig = {
	text: `Semantic HTML`,
	color: `${stackColors["html"]}`,
	url: "",
	logo: "html5",
	logoColor: "white",
};

const darkMode: BadgeConfig = {
	text: `Dark Mode`,
	color: `${stackColors["darkmode"]}`,
	url: "",
};

const accessibility: BadgeConfig = {
	text: `Accessibility`,
	color: `${stackColors["html"]}`,
	url: "",
};

const css: BadgeConfig = {
	text: `CSS3`,
	color: `${stackColors["css"]}`,
	url: "",
	logo: "css",
	logoColor: "white",
};

const fluidCSS: BadgeConfig = {
	text: `Fluid CSS`,
	color: `${stackColors["css"]}`,
	url: "",
	logo: "css",
	logoColor: "white",
};

const bem: BadgeConfig = {
	text: `BEM`,
	color: `${stackColors["css"]}`,
	url: "",
};

const cssAnimation: BadgeConfig = {
	text: `CSS Animation`,
	color: `${stackColors["css"]}`,
	url: "",
	logo: "css",
	logoColor: "white",
};

const tailwind: BadgeConfig = {
	text: `Tailwind CSS`,
	color: `${stackColors["tailwind"]}`,
	url: "",
	logo: "tailwind",
	logoColor: "white",
};

const typescript: BadgeConfig = {
	text: `TypeScript`,
	color: `${stackColors["typescript"]}`,
	url: "",
	logo: "typescript",
	logoColor: "white",
};

const vite: BadgeConfig = {
	text: `Vite`,
	color: `${stackColors["vite"]}`,
	url: "",
	logo: "vite",
	logoColor: "white",
};

const bun: BadgeConfig = {
	text: `Bun`,
	color: `${stackColors["bun"]}`,
	url: "",
	logo: "bun",
	logoColor: "white",
};

const mockApi: BadgeConfig = {
	text: `Mock API`,
	color: `${stackColors["api"]}`,
	url: "",
};

const statePersistence: BadgeConfig = {
	text: `State Persistence`,
	color: `${stackColors["api"]}`,
	url: "",
};

export const getFrontendMentorBadge = createBadge(frontendmentor);
export const getHtml5Badge = createBadge(html5);
export const getSemanticHtmlBadge = createBadge(semanticHtml);
export const getDarkModeBadge = createBadge(darkMode);
export const getAccessibilityBadge = createBadge(accessibility);
export const getCssBadge = createBadge(css);
export const getFluidCssBadge = createBadge(fluidCSS);
export const getBemBadge = createBadge(bem);
export const getCssAnimationBadge = createBadge(cssAnimation);
export const getTailwindBadge = createBadge(tailwind);
export const getTypescriptBadge = createBadge(typescript);
export const getViteBadge = createBadge(vite);
export const getBunBadge = createBadge(bun);
export const getMockApiBadge = createBadge(mockApi);
export const getStatePersistenceBadge = createBadge(statePersistence);
