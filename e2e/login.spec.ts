import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/login-page';

test('test', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.gotoLoginpage();
  await loginPage.login('tomsmith', 'SuperSecretPassword!');
  await expect(page).toHaveURL('http://the-internet.herokuapp.com/secure');
});
 
