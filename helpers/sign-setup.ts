import { Browser, chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  const loginDetails = require('../test-data/user-data.json')
  const browser = await chromium.launch();
  await storageAuth(browser,'Arun','Kumar','./test-data/auth-data.json');
  await browser.close();
}

async function storageAuth(browser:Browser,firstName:string,lastname:string,saveStoragePath:string){
  const page = await browser.newPage();
  await page.goto('http://webdriverjsdemo.github.io/auth/');
  await page.type('#firstname',firstName);
  await page.type('#surname',lastname);
  await page.click('#ok');
  await page.context().storageState({ path: saveStoragePath });
}
export default globalSetup;