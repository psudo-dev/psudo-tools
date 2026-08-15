export const tsconfig = `
{
	"compilerOptions": {
		"target": "ESNext",
		"module": "ESNext",
		"moduleResolution": "bundler",
		"lib": ["ESNext", "DOM", "DOM.Iterable"],
		"allowImportingTsExtensions": true,
		"noEmit": true,
		"strict": true,
		"skipLibCheck": true,
		"forceConsistentCasingInFileNames": true,
		"types": ["vite/client"]
	},
	"include": ["src"],
	"exclude": ["node_modules", "dist"]
}
`;

export const viteConfig = `
	import { defineConfig } from "vite";

	export default defineConfig({});
	`;

export const packageScripts = {
	gitreset: "git reset --hard && git clean -fd",
	dev: "vite",
	build: "vite build",
	preview: "vite preview",
};

export const indexTS = `
	import "../css/index.css";
	`;

export const indexCSS = `
@import "./variables.css";
@import "./reset.css";
@import "./utilities.css";
`;

export const resetCSS = `
*,
*::before,
*::after {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

html,
body {
	height: 100%;
}

body {
	min-height: 100dvh;
	line-height: 1.5;
	-webkit-font-smoothing: antialiased;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	line-height: 1.1;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
	overflow-wrap: break-word;
}

img,
picture,
video,
canvas,
svg {
	display: block;
	max-width: 100%;
	height: auto;
}

input,
button,
textarea,
select {
	font: inherit;
}

button {
	background: none;
	border: none;
	padding: 0;
	margin: 0;
	color: inherit;
	cursor: pointer;
}

a {
	text-decoration: none;
	color: inherit;
}

ul,
ol {
	list-style: none;
}

dialog:not([open]) {
	display: none;
}

@media (prefers-reduced-motion: reduce) {
	*,
	*::before,
	*::after {
		transition-duration: 0s !important;
		animation-duration: 0s !important;
		scroll-behavior: auto !important;
	}
}
`;

export const utilitiesCSS = `
.sr-only {
	position: absolute;
	width: 0.0625rem;
	height: 0.0625rem;
	padding: 0;
	margin: -0.0625rem;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
	white-space: nowrap;
	border-width: 0;
}

.attribution {
	margin-block-start: 4rem;
	font-size: 0.6875rem;
	text-align: center;
}

.attribution a {
	color: var(--attribution);
	text-decoration: underline;
	text-underline-offset: 3px;
}

.attribution a:hover,
.attribution a:focus {
	text-decoration: none;
}
`;

export const linkCSSToHtml = `\n\n<link rel="stylesheet" href="./css/index.css">`;

export const footerHtml = `<footer class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
    Coded by <a href="https://github.com/psudo-dev">psudo-dev</a>.
  </footer>
  <script type="module" src="/src/index.ts"></script>`;
