// path: src/pages/BasePage.js

class BasePage {
  constructor(page) {
    this.page = page;
  }

  async waitForPageLoad() {
    await this.page.waitForLoadState('networkidle');
  }

  async navigateTo(url) {
    await this.page.goto(url);
    await this.waitForPageLoad();
  }
}

module.exports = BasePage;