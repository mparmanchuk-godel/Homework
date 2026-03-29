import { test, expect } from '@playwright/test';
import LoginPage from './LoginPage.js';

const loginUrl = 'https://example.com/login';

async function performLogin(page, loginPage, username, password) {
  await page.goto(loginUrl);
  await loginPage.fillUsername(username);
  await loginPage.fillPassword(password);
  await loginPage.clickLogin();
}

test.describe('Login Tests', () => {
  test('Successful login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await performLogin(page, loginPage, 'validuser', 'validpass');

    await expect(page).toHaveURL('https://example.com/dashboard');
  });

  test('Login and navigate to profile page', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await performLogin(page, loginPage, 'validuser', 'validpass');

    await page.click('#profile-link');
    await expect(page).toHaveURL('https://example.com/profile');
  });

  test('Failed login with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await performLogin(page, loginPage, 'invaliduser', 'invalidpass');

    await expect(page.locator('.error-message')).toBeVisible();
  });
});