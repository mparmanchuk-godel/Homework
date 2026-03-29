# Homework Playwright Tests

This project contains end-to-end tests for the application using Playwright and the Page Object Model.

## Structure

- `src/pages/`: Page Object classes
- `src/components/`: Reusable UI components
- `src/utils/`: Utility classes and helpers
- `src/fixtures/`: Test data and fixtures
- `tests/e2e/`: End-to-end test files

## Setup

1. Install dependencies: `npm install`
2. Run tests: `npx playwright test`
3. View report: `npx playwright show-report`

## Best Practices

- Use Page Object Model for maintainable tests
- Extend BasePage for common functionality
- Keep tests DRY with shared helpers