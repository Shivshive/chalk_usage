// playwright.config.ts
import { type PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'], headless: false, video: 'on', baseURL: 'https://www.amazon.in', screenshot: 'on', browserName: 'chromium', colorScheme:'dark' },
            testDir:'test/pwtests',
            timeout: 30000,
            retries: 1,
        },
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'], headless: false, video: 'on', baseURL: 'https://www.amazon.in', screenshot: 'on', browserName: 'firefox', colorScheme:'dark' },
            testDir:'test/pwtests',
            timeout: 30000,
            retries: 2,
        },
        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'], headless: false, video: 'on', baseURL: 'https://www.amazon.in', screenshot: 'on', browserName: 'webkit', colorScheme:'dark' },
            testDir:'test/pwtests',
            timeout: 30000,
            retries: 2,
        },
    ],
    reporter:[
        ['list'],
        ['html',{open:true}],
        ['json', {open:true, outputFile:'reporter-json/json-reporter.json'}]
    ]
};
export default config;