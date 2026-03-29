// path: src/pages/AuthPage.js

const BasePage = require('./BasePage.js');

class AuthPage extends BasePage {
  constructor(page) {
    super(page);
    this.usernameInput = this.page.locator('[data-testid="username-input"]');
    this.passwordInput = this.page.locator('[data-testid="password-input"]');
    this.submitButton = this.page.locator('[data-testid="login-button"]');
    this.errorMessage = this.page.locator('.error-message');
  }

  async open() {
    await this.navigateTo('https://example.com/login');
  }

  async username(value) {
    await this.usernameInput.fill(value);
  }

  async password(value) {
    await this.passwordInput.fill(value);
  }

  async submit() {
    await this.submitButton.click();
  }

  async getErrorMessage() {
    return await this.errorMessage.textContent();
  }

  async login(user, pass) {
    await this.username(user);
    await this.password(pass);
    await this.submit();
  }
}

module.exports = AuthPage;