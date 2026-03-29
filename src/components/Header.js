// path: src/components/Header.js

class Header {
  constructor(page) {
    this.page = page;
    this.cartBadge = this.page.locator('.cart-badge');
  }

  async cartBadge() {
    return this.cartBadge;
  }
}

module.exports = Header;