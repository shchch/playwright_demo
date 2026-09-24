import { test, expect } from '../fixtures/base';

test('User can log into the application', async ({ page, loginPage, setAllureMetadata }) => {
  await setAllureMetadata({
    epic: 'Authentication',
  });

  await loginPage.gotoLoginpage();
  await loginPage.login('tomsmith', 'SuperSecretPassword!');
  await expect(page).toHaveURL('http://the-internet.herokuapp.com/secure');
});
 