class ProductPage {
  constructor(page) {
    this.page = page;
    this.productList = page.locator('.product-list');
    this.cartButton = page.locator('#add-to-cart');
    this.searchInput = page.locator('#search');
  }

  async addItemToCart() {
    await this.cartButton.click();
  }

  async viewProductDetails(productName) {
    await this.productList.locator(`text=${productName}`).click();
  }

  async searchForProduct(query) {
    await this.searchInput.fill(query);
    await this.searchInput.press('Enter');
  }

  async selectTheme(theme) {
    const dropdown = this.page.locator('#theme-dropdown');
    await dropdown.selectOption(theme);
  }
}

module.exports = ProductPage;
