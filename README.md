[![Playwright.dev](https://img.shields.io/badge/Documentation-Playwright-45ba4b.svg?logo=playwright)](https://playwright.dev/docs/intro)
<br>

# Playwright Web Automation Testing

This is my personal project to improve my skills in automated testing using Playwright with Typescript.
This project was created solely for my learning process and to showcase my testing skills.

## Installation

- Instal [Node.js](https://nodejs.org/en)

- Playwright Installation: 
```js
npm init playwright@latest
```

- ESLint Installation 
```js
npm install eslint --save-dev
```
- Configuration 
```js
npm init @eslint/config
```
- Add Prettier in `.eslintrc.json` file:
```json
"extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
],
```

- Prettier Installation 
```js
npm install --save-dev --save-exact prettier
```
- Add file `.prettierignore` :
```
package-lock.json
README.md
```
- Add Prettier rule `.prettierrc.json` :
```json
{
    "singleQuote": true
}
```
- Run formatting with Prettier `npx prettier --write .`
- Linking Prettier with ESLint `npm install --save-dev eslint-config-prettier`

## VS Code plugins installed

- [vscode-icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons) - enhances the visual experience by adding icons to files and folders, making navigation easier.
- [JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets) - provides code snippets for JavaScript ES6 syntax, speeding up coding and learning new syntax patterns.
- [ESLint](https://eslint.org/) - a powerful tool to identify and fix problems in JavaScript code, ensuring code quality and consistency.
- [Prettier - Code formatter](https://prettier.io/) - automatically formats code to maintain a consistent style, making it more readable and standardized.
- [GitLens - Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) - enhances the Git capabilities of VS Code, making it easier to visualize code and navigate through repositories.
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) - helps in catching common spelling errors, which is crucial for writing clean and professional code.
- [GitHub Actions](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-github-actions) - used for automating workflows, which can include testing, building, and deploying JavaScript applications.
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) - allows for a real-time preview of web pages, making it easier to see the effects of code changes instantly.

## Tutorials

- [Playwright: Web Automation Testing From Zero to Hero](https://www.udemy.com/course/playwright-from-zero-to-hero)
- [Automated Software Testing with Playwright](https://www.udemy.com/course/automated-software-testing-with-playwright)
- [Playwright - Zwinna Panda - pl](https://www.youtube.com/watch?v=1-u5JWFWPgw&list=PLvFBbkSgL1u7Bco8ewGnWeZpjRH-bHC_7)
- [jaktestowac.pl](https://jaktestowac.pl/course/playwright-wprowadzenie/)
- [playwright.info - Automatyzacja i testy z Playwright - pl](https://playwright.info/)

## TypeScript:

- [TypeScript - Podstawy](https://frontlive.pl/blog/typescript-podstawy)
- [TypeScript - Przeprogramowani.ts](https://www.youtube.com/watch?v=nUjl2nK0FAY&list=PLfE0DpqEANZ0CQ9pCGlxGKPvYb1Sj6ybV)