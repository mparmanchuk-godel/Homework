// path: src/pages/LoginPage.js

const BasePage = require('./BasePage.js');

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.usernameInput = this.page.locator('#username');
    this.passwordInput = this.page.locator('#password');
    this.loginButton = this.page.locator('#login');
  }

  async fillField(fieldName, value) {
    const locator = this[fieldName + 'Input'];
    await locator.fill(value);
  }

  async fillUsername(username) {
    await this.fillField('username', username);
  }

  async fillPassword(password) {
    await this.fillField('password', password);
  }

  async clickLogin() {
    await this.loginButton.click();
  }
}

module.exports = LoginPage;