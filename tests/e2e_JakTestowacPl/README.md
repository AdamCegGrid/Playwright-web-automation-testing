[![Playwright.dev](https://img.shields.io/badge/Documentation-Playwright-45ba4b.svg?logo=playwright)](https://playwright.dev/docs/intro)
[![Playwright.dev](https://img.shields.io/badge/API%20reference-Playwright-D0422C.svg)](https://playwright.dev/docs/api/class-playwright)
[![Node.js](https://img.shields.io/badge/download-Node.js-026e00.svg?logo=node.js)](https://nodejs.org/)
[![Support badge](https://img.shields.io/badge/stackoverflow-Playwright-45ba4b.svg?logo=stackoverflow)](https://stackoverflow.com/questions/tagged/playwright) 

# Learning automatic tests in Playwright with jaktestowac.pl

- Course from the [jaktestowac.pl](https://jaktestowac.pl/course/playwright-wprowadzenie/)  
- Repository jaktestowac [GitHub](https://github.com/jaktestowac/playwright_automatyzacja_wprowadzenie)  
- Tested site [demo-bank](https://demo-bank.vercel.app/)  

## Run tests:
- `npm run open:codegen:demobank`
- `npm test tests/e2e_JakTestowacPl`
- `npm test tests/e2e_JakTestowacPl/lesson_01`
- `npm test -- tests/e2e_JakTestowacPl/lesson_01 --project=chromium`
- `npm test -- tests/e2e_JakTestowacPl/lesson_01/example.spec.ts --project=chromium`

###  Import  
```TypeScript
import { test, expect, chromium } from '@playwright/test';
```
### Test  
```TypeScript
test('Title', async ({ page }) => {
  // ...
});
```
### Describe  
```TypeScript
test.describe('Title two tests', () => {

  test('Title1', async ({ page }) => {
    // ...
  });

  test('Title2', async ({ page }) => {
    // ...
  });
});
```

## Chrome DevTools

:small_orange_diamond:  open DevTools <kbd>F12</kbd> or right click: `Inspect`  
:small_orange_diamond:  testing CSS selectors in Console: `$$('selector')`  
