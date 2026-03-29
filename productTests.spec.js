import { test, expect } from '@playwright/test';
import ProductPage from './ProductPage.js';

test.describe('Product Tests', () => {
  test('Add product to cart', async ({ page }) => {
    const productPage = new ProductPage(page);

    await page.goto('https://example.com/products');

    await productPage.addItemToCart();

    await expect(page.locator('.cart-count')).toHaveText('1');
  });

  test('View product details', async ({ page }) => {
    const productPage = new ProductPage(page);

    await page.goto('https://example.com/products');

    await productPage.viewProductDetails('Laptop');

    await expect(page.locator('.product-title')).toHaveText('Laptop');
  });

  test('Search for product and select theme', async ({ page }) => {
    // Initialization
    const productPage = new ProductPage(page);
    await page.goto('https://example.com/products');

    // User actions
    await productPage.searchForProduct('Phone');
    await productPage.selectTheme('light');

    // Verification
    await expect(page.locator('.search-results')).toBeVisible();
  });
});