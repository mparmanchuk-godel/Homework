// path: tests/e2e/search.spec.js

import { test, expect } from '@playwright/test';
import SearchPage from '../../src/pages/SearchPage.js';
import ResultsPage from '../../src/pages/ResultsPage.js';

test.describe('Search Tests', () => {
  test('Search with filter and verify results', async ({ page }) => {
    // Initialization
    const searchPage = new SearchPage(page);
    const resultsPage = new ResultsPage(page);
    await searchPage.navigateTo('https://example.com/search');

    // User actions
    await searchPage.queryInput('Laptop');
    await searchPage.applyFilter('Price < $1000');
    await searchPage.submit();

    // Verification
    const prices = await resultsPage.getAllPrices();
    for (const price of prices) {
      expect(price).toBeLessThan(1000);
    }
  });
});