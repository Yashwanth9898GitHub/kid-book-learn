# Kid Book

Kid Book is a bright, beginner-friendly learning app for children. It brings
English, Telugu, Hindi, basic Math, and Colors into one simple experience with
short, interactive lesson views.

## Features

- Explore English, Telugu, and Hindi alphabets.
- Practice foundational Math concepts.
- Learn common colors through a visual lesson.
- Move between subjects without leaving the page.
- Responsive layout for desktop and mobile screens.

## Getting started

### Prerequisites

- Node.js 20 or newer
- npm 10 or newer

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm start
```

Open `http://localhost:4200/` in your browser. The app reloads automatically
when source files change.

## Useful commands

| Command | Purpose |
| --- | --- |
| `npm start` | Run the local development server |
| `npm run build` | Create a production build in `dist/` |
| `npm test` | Run the Angular unit tests |
| `npm run watch` | Rebuild continuously in development mode |

## Project structure

Lesson components live under `src/app/`, with one folder each for English,
Telugu, Hindi, Math, and Colors. The shared app shell and navigation are in
`src/app/app.ts`, `src/app/app.html`, and `src/app/app.css`.

## Built with

- [Angular](https://angular.dev/) 20
- TypeScript
- Jasmine and Karma for unit testing
