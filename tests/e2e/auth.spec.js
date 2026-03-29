// path: tests/e2e/auth.spec.js

import { test, expect } from '@playwright/test';
import AuthPage from '../../src/pages/AuthPage.js';
import HomePage from '../../src/pages/HomePage.js';
import { users } from '../../src/fixtures/testData.js';

test.describe('Authentication Tests', () => {
  test('Positive login scenario', async ({ page }) => {
    // Initialization
    const authPage = new AuthPage(page);
    const homePage = new HomePage(page);

    // User actions
    await authPage.open();
    await authPage.login(users.valid.username, users.valid.password);

    // Verification
    await expect(homePage.avatar()).toBeVisible();
  });

  test('Negative login scenario', async ({ page }) => {
    // Initialization
    const authPage = new AuthPage(page);

    // User actions
    await authPage.open();
    await authPage.login(users.invalid.username, users.invalid.password);

    // Verification
    await expect(authPage.errorMessage()).toBeVisible();
  });
});