class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login');
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