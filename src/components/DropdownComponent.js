// path: src/components/DropdownComponent.js

class DropdownComponent {
  constructor(page) {
    this.page = page;
    this.dropdown = page.locator('#theme-dropdown');
    this.selectedValue = page.locator('#selected-theme');
  }

  async selectOption(option) {
    await this.dropdown.selectOption(option);
  }

  async getSelectedValue() {
    return await this.selectedValue.textContent();
  }
}

module.exports = DropdownComponent;