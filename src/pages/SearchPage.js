// path: src/pages/SearchPage.js

const BasePage = require('./BasePage.js');

class SearchPage extends BasePage {
  constructor(page) {
    super(page);
    this.queryInput = this.page.locator('#search-input');
    this.submitButton = this.page.locator('#search-submit');
    this.filterSelect = this.page.locator('#filter');
  }

  async queryInput(value) {
    await this.queryInput.fill(value);
  }

  async submit() {
    await this.submitButton.click();
  }

  async applyFilter(filterName) {
    await this.filterSelect.selectOption(filterName);
  }
}

module.exports = SearchPage;