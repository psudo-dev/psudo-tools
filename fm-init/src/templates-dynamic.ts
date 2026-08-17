import {
	accessibilityBadge,
	bemBadge,
	bunBadge,
	fluidCssBadge,
	frontendMentorBadge,
	semanticHtmlBadge,
	typescriptBadge,
	viteBadge,
} from "./create-readme-badges";
import { projectNameCapitalized } from "./project-variables";
import { getChallengeInstructions, getColorVariables } from "./write-utils";

export function getCssVariables(): string {
	const cssColorVariables = getColorVariables();

	return `
	:root {
		--attribution: hsl(228, 45%, 44%);

		${cssColorVariables}
	}
	`;
}

export function getReadme(): string {
	const challengeInstructions = getChallengeInstructions();

	const readme = `
![project design preview image](./preview.jpg)

# Frontend Mentor - ${projectNameCapitalized}

${frontendMentorBadge} ${semanticHtmlBadge} ${accessibilityBadge} ${fluidCssBadge} ${bemBadge} ${typescriptBadge} ${viteBadge} ${bunBadge}

## Overview

[Frontend Mentor](https://www.frontendmentor.io) is a great platform to keep studying and practicing front-end development, letting you focus on the code itself without worrying about design or UI. It offers a wide variety of projects, from challenges that only require HTML and CSS to full-stack builds, spanning multiple difficulty levels from newbie to advanced.

This makes it easy to test out whatever you're currently studying — whether that's accessibility, Tailwind, TypeScript, or even React and Next.js — and you can make projects as complete and complex as you like, simulating APIs or databases along the way. It's a great playground to sharpen your skills, adaptable to whatever you need at the time.

### Live Demo

- [Live Demo](link)
- [Frontend Mentor Solution](link)

## Frontend Mentor

[Frontend Mentor](https://www.frontendmentor.io) challenges help you improve your coding skills by building realistic projects.

The challenges are pretty straight forward, you have to replicate the page or element as closely as possible as the initial image.

### The Challenge

${challengeInstructions}

## Development Notes

## Built With

- Markup: HTML5, Semantic Elements
- Styling: CSS3 (Grid, Flexbox, Fluid CSS using clamp()), BEM Architecture
- Logic & Tooling: TypeScript, Vite, Bun

## Author

- Github: [@psudo-dev](https://github.com/psudo-dev)
- Frontend Mentor: [@psudo-dev](https://www.frontendmentor.io/profile/psudo-dev)

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details
`;

	return readme;
}
