import { test, expect } from '@playwright/test';

test.describe.parallel('API Testing 02', () => {
  const baseUrl = 'https://reqres.in/api';

  test.only('Simple API Test - Assert Response Status', async ({ request }) => {
    const response = await request.get(`${baseUrl}/users/2`);
    expect(response.status()).toBe(200);

    const responseBody = JSON.parse(await response.text());
    console.log(responseBody);
  });

  test('Simple API Test - Assert Invalid Endpoint', async ({ request }) => {
    const response = await request.get(`${baseUrl}/users/non-existing`);
    expect(response.status()).toBe(404);
  });
});

// Test run:
// npm test -- tests/api_ReqRes/GET_firstApiTest_2.spec.ts --project=chromium
