// path: src/pages/SomePage.js

const BasePage = require('./BasePage.js');

class SomePage extends BasePage {
  constructor(page) {
    super(page);
    this.button = this.page.locator('.btn-primary');
    this.input = this.page.locator('[data-testid="input-field"]');
    this.textElement = this.page.locator('#display-text');
  }

  async clickButton() {
    await this.button.click();
  }

  async fillInput(value) {
    await this.input.fill(value);
  }

  async getText() {
    return await this.textElement.textContent();
  }
}

module.exports = SomePage;