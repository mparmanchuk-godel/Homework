// path: src/pages/ResultsPage.js

const BasePage = require('./BasePage.js');

class ResultsPage extends BasePage {
  constructor(page) {
    super(page);
    this.results = this.page.locator('[data-testid="results"]');
  }

  async items() {
    return this.results.locator('[data-testid="result-item"]');
  }

  async titleOf(index) {
    return await this.results.locator('[data-testid="result-item"]').nth(index).locator('.title').textContent();
  }

  async priceOf(index) {
    return await this.results.locator('[data-testid="result-item"]').nth(index).locator('.price').textContent();
  }
}

module.exports = ResultsPage;