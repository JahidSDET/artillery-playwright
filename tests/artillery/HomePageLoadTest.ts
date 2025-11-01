import { Page } from '@playwright/test';

export async function HomePageloadTest(page: Page, vuContext: any, events: any) {
    await page.goto('https://automationexercise.com/', {
        waitUntil: 'domcontentloaded', // only wait for DOM ready
        timeout: 60000                // 60s timeout
    });

    const links = [
        ' Products',
        ' Cart',
        ' Signup / Login',
        ' Test Cases',
        ' API Testing',
        ' Video Tutorials'
    ];

    for (const linkName of links) {
        await page.getByRole('link', { name: linkName }).click();
    }
}
