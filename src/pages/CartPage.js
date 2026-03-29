// path: src/pages/CartPage.js

const BasePage = require('./BasePage.js');

class CartPage extends BasePage {
  constructor(page) {
    super(page);
    this.cartItems = this.page.locator('.cart-item');
    this.checkoutButton = this.page.locator('#proceed-checkout');
  }

  async open() {
    await this.navigateTo('https://example.com/cart');
  }

  async items() {
    return this.cartItems;
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}

module.exports = CartPage;