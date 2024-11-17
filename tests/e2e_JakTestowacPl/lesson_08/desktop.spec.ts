import { test, expect } from '@playwright/test';

test.describe('Desktop testing', () => {
  test.beforeEach(async ({ page }) => {
    const baseUrl = 'https://demo-bank.vercel.app/';
    const userId = 'testyAdi';
    const userPassword = '87654321';

    await page.goto(baseUrl);
    await page.getByTestId('login-input').fill(userId);
    await page.getByTestId('password-input').fill(userPassword);
    await page.getByTestId('login-button').click();
  });

  test('quick payment with correct data', async ({ page }) => {
    // Arrang
    const receiverId = '2';
    const transferAmount = '150';
    const transferTitle = 'Zwrot kasy';
    const expectedTransferReceiver = 'Chuck Demobankowy';

    // Act
    await page.locator('#widget_1_transfer_receiver').selectOption(receiverId);
    await page.locator('#widget_1_transfer_amount').fill(transferAmount);
    await page.locator('#widget_1_transfer_title').fill(transferTitle);
    await page.getByRole('button', { name: 'wykonaj' }).click();
    await page.getByTestId('close-button').click();

    // Assert
    await expect(page.locator('#show_messages')).toHaveText(
      `Przelew wykonany! ${expectedTransferReceiver} - ${transferAmount},00PLN - ${transferTitle}`,
    );
  });

  test('successful mobile phone top-up', async ({ page }) => {
    // Arrang
    const phoneNumber = '502 xxx xxx';
    const topUpAmount = '90';
    const expectMessage = `Doładowanie wykonane! ${topUpAmount},00PLN na numer ${phoneNumber}`;

    // Act
    await page.locator('#widget_1_topup_receiver').selectOption(phoneNumber);
    await page.locator('#widget_1_topup_amount').fill(topUpAmount);
    await page.locator('#uniform-widget_1_topup_agreement span').click();
    await page.getByRole('button', { name: 'doładuj telefon' }).click();
    await page.getByTestId('close-button').click();

    // Assert
    await expect(page.locator('#show_messages')).toHaveText(expectMessage);
  });
});

// run tests:
// npm run open:codegen:demobank
// npm test -- tests/e2e_JakTestowacPl
// npm test -- tests/e2e_JakTestowacPl/lesson_08
// npm test -- tests/e2e_JakTestowacPl/lesson_08 --project=chromium
// npm test -- tests/e2e_JakTestowacPl/lesson_08/desktop.spec.ts --project=chromium
// npm test -- tests/e2e_JakTestowacPl/lesson_08/desktop.spec.ts --project=chromium --headed
