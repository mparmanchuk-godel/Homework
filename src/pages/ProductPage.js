// path: src/pages/ProductPage.js

const BasePage = require('./BasePage.js');

class ProductPage extends BasePage {
  constructor(page) {
    super(page);
    this.productList = this.page.locator('.product-list');
    this.cartButton = this.page.locator('#add-to-cart');
    this.searchInput = this.page.locator('#search');
  }

  async addToCart() {
    await this.cartButton.click();
  }

  async title() {
    return await this.page.locator('.product-title').textContent();
  }

  async price() {
    return await this.page.locator('.product-price').textContent();
  }
}

module.exports = ProductPage;