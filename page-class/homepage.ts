// playwright-dev-page.ts
import { expect, Locator, Page } from '@playwright/test';

export class PlaywrightDevPage {
  readonly page: Page;
  readonly textFirstName: Locator;
  readonly textLastName: Locator;
  readonly btnOK: Locator;
  readonly textWelcomeMessage: Locator;
  readonly textElement1: Locator;
  readonly linkHome: Locator;

  constructor(page: Page) {
    this.page = page;
    this.textFirstName = page.locator('#firstname');
    this.textLastName = page.locator('#surname');
    this.btnOK = page.locator('#ok');
    this.textWelcomeMessage = page.locator('div#welcome');
    this.textElement1 = page.locator('div#elementappearsparent');
    this.linkHome = page.locator('a#homelink');
  }

  async goto() {
    await this.page.goto('http://webdriverjsdemo.github.io/auth/');
  }

  async enterUserDetails() {
    const loginDetails = require('../test-data/user-data.json')
    console.log(loginDetails.firstName);
    await this.textFirstName.type(loginDetails.firstName);
    await this.textLastName.type(loginDetails.lastname);
    await this.btnOK.click();
  }
}