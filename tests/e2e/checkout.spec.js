// path: tests/e2e/checkout.spec.js

import { test, expect } from '@playwright/test';
import SearchPage from '../../src/pages/SearchPage.js';
import ProductPage from '../../src/pages/ProductPage.js';
import CartPage from '../../src/pages/CartPage.js';
import CheckoutPage from '../../src/pages/CheckoutPage.js';
import Header from '../../src/components/Header.js';
import { products, expectedTotal } from '../../src/fixtures/testData.js';

test.describe('Checkout Flow Tests', () => {
  test('Complete checkout process', async ({ page }) => {
    // Initialization
    const searchPage = new SearchPage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const header = new Header(page);
    await searchPage.navigateTo('https://example.com/search');

    // User actions
    await searchPage.queryInput(products[0]);
    await searchPage.submit();
    await searchPage.productResult(products[0]);
    await productPage.addToCart();

    // Verification
    await expect(header.cartBadge()).toHaveText('1');

    // User actions
    await cartPage.open();
    await cartPage.proceedToCheckout();

    // Verification
    const total = await checkoutPage.total();
    expect(total).toBe(expectedTotal);
  });
});