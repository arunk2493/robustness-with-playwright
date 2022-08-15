import { devices, PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
  globalSetup: require.resolve('./helpers/sign-setup.ts'),
  use: {
    //storageState: 'storageState.json',
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
    contextOptions: {
      recordVideo: {
        dir: './videosAll' // Or wherever you want the videos to be saved.
      }
    },
    browserName:'chromium',
    screenshot:'only-on-failure'
  },
  reporter: [
    ['line'], 
    ['allure-playwright']
  ]
};
export default config;
