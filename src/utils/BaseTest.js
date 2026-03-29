// path: src/utils/BaseTest.js

class BaseTest {
  constructor() {
    // Common test setup logic
  }

  async setupPage(page) {
    // Example: set viewport or other common setup
    await page.setViewportSize({ width: 1280, height: 720 });
  }
}

module.exports = BaseTest;