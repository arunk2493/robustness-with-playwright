import { test, expect, Locator, chromium } from '@playwright/test';
import { PlaywrightDevPage } from '../page-class/homepage';

test.describe('Sample',()=>{
  test.use({storageState:'../test-data/auth-data.json'});
  test('Sample test',async({page})=>{
    await page.goto('http://webdriverjsdemo.github.io/auth/');
    const val = await page.textContent('div#welcome'); 
    console.log(val);
    expect(val).toEqual("Welcome name=StandardPerson2");
    await page.click('a#homelink');
    const elem = page.locator('div#elementappearsparent');
    await expect(elem).toBeVisible();
  })
  test('Sample test 2',async({page})=>{
    await page.goto('http://webdriverjsdemo.github.io/auth/');
    const val = await page.textContent('div#welcome'); 
    console.log(val);
    expect(val).toEqual("Welcome name=StandardPerson2");
    await page.click('a#homelink');
    const elem = page.locator('div#elementapearsparent');
    await expect.soft(elem).toBeVisible();
  })
  test('Sample test 3',async({page})=>{
    await page.goto('http://webdriverjsdemo.github.io/auth/');
    const val = await page.textContent('div#welcome'); 
    console.log(val);
    expect(val).toEqual("Welcome name=StandardPerson2");
    await page.click('a#homelink');
    const elem = page.locator('div#elementappearsparent');
    await expect.soft(elem).toBeVisible();
  })
})