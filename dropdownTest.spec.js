// path: test/Homework/dropdownTest.spec.js

import { test, expect } from '@playwright/test';
import DropdownComponent from './DropdownComponent.js';

test.describe('Dropdown Component Tests', () => {
  test('Select dropdown option and verify', async ({ page }) => {
    // Initialization
    const dropdownComponent = new DropdownComponent(page);
    await page.goto('https://example.com/settings');

    // User actions
    await dropdownComponent.selectOption('dark');

    // Verification
    const selected = await dropdownComponent.getSelectedValue();
    await expect(selected).toBe('Dark Theme');
  });
});