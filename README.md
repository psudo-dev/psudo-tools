## Overview

A collection of small local CLI tools I built to automate repetitive parts of my workflow.

## Motivation

I'm always trying to optimize things and I find repetitive tasks kind of annoying. And that's the fun of programming, most of the repetitive stuff you do, you can probably learn how to automate it.

I first ran into this when I was studying at 42SP - and I dug way deeper than I should have. I ended up with a personal Makefile that could scaffold a new project, set it up, run tests, and clean up build artifacts, creating multiple commands for most of the things I needed in a project. It was a small thing, but it was fun and it made my life easier in some ways.

That's honestly how most of my personal projects go: I set out to fix one specific thing and end up down a rabbit hole, learning something new along the way.

## psudo-tools

These tools are no different, plus I get to learn more about Bun, Node.js, TypeScript, and CLI development in general. So far the tools are very specific to my needs, I thought about making them more generic and reusable to other people, but I don't know if the stripped down version would be so useful.

I don't know yet what any of this will grow into long-term — for now, it's just local packages solving my own problems. But who knows, eventually, I might end up making something worth publishing as a package so more people can benefit from it. For now, it's just a playground for me to learn and experiment.

## Requirements

- [Bun](https://bun.sh)
- [Node.js](https://nodejs.org)

## Setup

Each tool lives in its own folder with its own `package.json`. To install one globally:

```bash
cd psudo-tools/<tool-name>
bun link
```

## Tools

### Frontend Mentor

[Frontend Mentor](https://www.frontendmentor.io) is a great platform to keep studying and practicing front-end development, letting you focus on the code itself without worrying about design or UI. It offers a wide variety of projects, from challenges that only require HTML and CSS to full-stack builds.

- [Frontend Mentor Repository](https://github.com/psudo-dev/frontend-mentor)

#### Frontend Mentor Setup

Sets up a new [Frontend Mentor](https://www.frontendmentor.io) challenge. `frontend-mentor_-_project-name` is the naming convention for the folder/repository, and the command will:

- set up `Bun`, `Vite` and `TypeScript`
- install dependencies
- create folders and move `.md` files
- edit and write `tsconfig.json`, `vite.config.ts`, `package.json` and `.prettierignore`
- create `index.css`, `reset.css`, `utilities.css` and `variables.css` with Color Variables extracted from the `style-guide.md`
- clean up `index.html`, link `index.css` and `index.ts` files
- create `README.md` with the challenge description and badges
- format all files with `prettier` and `beautify`
- run `git` commands

```bash
cd <project-folder>
fm-init <challenge-difficulty> <challenge-page-url>
```

#### Frontend Mentor Update

Each Frontend Mentor project has its own repository and I keep them all organized under the `frontend-mentor` repository. This tool updates the `frontend-mentor/README.md` file with the latest project badges and links it to the project repository.

```bash
cd <project-folder>
fm-update
```

### Exercism

[Exercism](https://exercism.org) is a great platform to keep practicing coding fundamentals, good practices, and problem-solving, letting you focus on the logic itself through short, focused exercises.

- [Exercism Repository](https://github.com/psudo-dev/exercism)

#### Exercism Setup

You copy & paste the command from the Exercism TypeScript exercise, `ex-init` command will download the exercise, install the test dependencies, open VS Code with the exercise, test file and README, and make the `initial commit`.

```bash
ex-init exercism download --track=typescript --exercise=name-of-the-exercise
```

#### Exercism Test

This works basically as an `alias` for the `corepack yarn test` command, it's just faster to type.

```bash
cd <exercism/typescript/exercise-folder>
ex-test
```

#### Exercism Submit

This is also silly, it's just so I don't have to type `exercism submit name-of-the-file.ts`. The command figures out the name of the file and submits it.

```bash
cd <exercism/typescript/exercise-folder>
ex-submit
```

#### Exercism Update

`ex-update` will update the `README.md` file with the badge from the latest submission.

```bash
cd <exercism/typescript/exercise-folder>
ex-update
```

### Codewars

Codewars is a great platform to sharpen problem-solving skills through short coding challenges called katas, in a more gamified format that offers a different type of problem than what you typically deal with studying front-end development.

- [Codewars Repository](https://github.com/psudo-dev/codewars-typescript)

#### Codewars Update

`cw-update` will update the `README.md` file with the badge from the latest exercise.

```bash
cd <codewars/n-kyu/exercise-folder>
cw-update
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

[@psudo-dev](https://github.com/psudo-dev)
