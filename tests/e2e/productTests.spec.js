// path: tests/e2e/productTests.spec.js

import { test, expect } from '@playwright/test';
import ProductPage from '../../src/pages/ProductPage.js';

test.describe('Product Tests', () => {
  test('Add product to cart', async ({ page }) => {
    const productPage = new ProductPage(page);

    await productPage.navigateTo('https://example.com/products');

    await productPage.addItemToCart();

    await expect(page.locator('.cart-count')).toHaveText('1');
  });

  test('View product details', async ({ page }) => {
    const productPage = new ProductPage(page);

    await productPage.navigateTo('https://example.com/products');

    await productPage.viewProductDetails('Laptop');

    await expect(page.locator('.product-title')).toHaveText('Laptop');
  });

  test('Search for product and select theme', async ({ page }) => {
    const productPage = new ProductPage(page);

    await productPage.navigateTo('https://example.com/products');

    await productPage.searchForProduct('Phone');
    await productPage.selectTheme('light');

    await expect(page.locator('.search-results')).toBeVisible();
  });
});