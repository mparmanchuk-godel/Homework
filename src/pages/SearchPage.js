// path: src/pages/SearchPage.js

const BasePage = require('./BasePage.js');

class SearchPage extends BasePage {
  constructor(page) {
    super(page);
    this.queryInput = this.page.locator('#search-input');
    this.submitButton = this.page.locator('#search-submit');
  }

  async queryInput(value) {
    await this.queryInput.fill(value);
  }

  async submit() {
    await this.submitButton.click();
  }

  async productResult(name) {
    await this.page.locator(`text=${name}`).click();
  }
}

module.exports = SearchPage;