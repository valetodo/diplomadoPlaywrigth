import { test, expect } from '@playwright/test';

test('testcafe TextField and click button', async ({ page }) => {
    await page.goto('https://devexpress.github.io/testcafe/example/');
    await page.locator('#developer-name').fill("TEXTO ");
    await page.locator('#populate').click();
});

test('testcafe click on features', async ({ page }) => {
    const feature = "Support for testing on remote devices";
    const traffic = "Advanced traffic and markup analysis"
    await page.goto('https://devexpress.github.io/testcafe/example/');
    await page.locator(`//label[text()="${feature}"]/input`).click();
    await page.locator(`//label[text()="${traffic}"]/input`).click();
    await page.waitForTimeout(5000);
});

test('testcafe click on operating System', async ({ page }) => {
    const os = "MacOS";
    await page.goto('https://devexpress.github.io/testcafe/example/');
    await page.locator(`//label[text()="${os}"]/input`).click();
    await page.waitForTimeout(5000);
});

test('testcafe click on interface', async ({ page }) => {
    const interfaceUse = "MacOS";
    await page.goto('https://devexpress.github.io/testcafe/example/');
    await page.locator('#preferred-interface').selectOption('Both')
    await page.waitForTimeout(5000);
});

test('testcafe drag and drop on slide', async ({ page }) => {
    await page.goto('https://devexpress.github.io/testcafe/example/');
    const targetValue = 8;
    let slider = page.locator('//div[@id="slider"]')
    let sliderHandle  = page.locator('//div[@id="slider"]/span')
    await page.locator('#tried-test-cafe').click();
    const sliderBoundingBox = await slider.boundingBox();
    await sliderHandle.dragTo(sliderHandle, {
        force: true,
        targetPosition: {
            x: sliderBoundingBox.width * (targetValue / 10),
            y: 0,
        },
    });
    await page.waitForTimeout(5000);
});


