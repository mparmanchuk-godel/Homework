// path: src/pages/CheckoutPage.js

const BasePage = require('./BasePage.js');

class CheckoutPage extends BasePage {
  constructor(page) {
    super(page);
    this.totalAmount = this.page.locator('.total-amount');
    this.placeOrderButton = this.page.locator('#place-order');
  }

  async total() {
    return await this.totalAmount.textContent();
  }

  async placeOrder() {
    await this.placeOrderButton.click();
  }
}

module.exports = CheckoutPage;