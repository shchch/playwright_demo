import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { setAllureMetadata } from '../utils/allure-report.helper';

type Fixtures = {
  loginPage: LoginPage;
  setAllureMetadata: typeof setAllureMetadata;
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  setAllureMetadata: async ({}, use) => {
    await use(setAllureMetadata);
  },
});

export { expect } from '@playwright/test';
