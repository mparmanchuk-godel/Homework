// path: tests/e2e/auth.spec.js

import { test, expect } from '@playwright/test';
import AuthPage from '../../src/pages/AuthPage.js';
import HomePage from '../../src/pages/HomePage.js';

test.describe('Authentication Tests', () => {
  test('Positive login scenario', async ({ page }) => {
    // Initialization
    const authPage = new AuthPage(page);
    const homePage = new HomePage(page);

    // User actions
    await authPage.open();
    await authPage.username('validuser');
    await authPage.password('validpass');
    await authPage.submit();

    // Verification
    await expect(homePage.getAvatar()).toBeVisible();
  });

  test('Negative login scenario', async ({ page }) => {
    // Initialization
    const authPage = new AuthPage(page);

    // User actions
    await authPage.open();
    await authPage.username('invaliduser');
    await authPage.password('invalidpass');
    await authPage.submit();

    // Verification
    const error = await authPage.getErrorMessage();
    await expect(error).toContain('Invalid credentials');
  });
});