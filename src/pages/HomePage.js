// path: src/pages/HomePage.js

const BasePage = require('./BasePage.js');

class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.avatar = this.page.locator('#avatar');
  }

  async getAvatar() {
    return this.avatar;
  }
}

module.exports = HomePage;