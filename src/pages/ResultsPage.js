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

  async getAllTitles() {
    const items = await this.items();
    const count = await items.count();
    const titles = [];
    for (let i = 0; i < count; i++) {
      titles.push(await this.titleOf(i));
    }
    return titles;
  }

  async getAllPrices() {
    const items = await this.items();
    const count = await items.count();
    const prices = [];
    for (let i = 0; i < count; i++) {
      const priceStr = await this.priceOf(i);
      const priceNum = parseFloat(priceStr.replace('$', ''));
      prices.push(priceNum);
    }
    return prices;
  }
}

module.exports = ResultsPage;