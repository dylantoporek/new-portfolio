import { test, expect } from '@playwright/test'

test('home page renders all sections', async ({ page }) => {
    await page.goto('/')

    await expect(page).toHaveTitle('Dylan Toporek')
    await expect(page.getByText('Full Stack Engineer').first()).toBeVisible()
    await expect(page.locator('#about')).toBeVisible()
    await expect(page.locator('#experience')).toBeVisible()
    await expect(page.locator('#projects')).toBeVisible()
})

test('experience accordion expands and collapses', async ({ page }) => {
    await page.goto('/')

    const firstJob = page.getByRole('button', { name: /SkySlope/ })
    await firstJob.scrollIntoViewIfNeeded()

    await expect(firstJob).toHaveAttribute('aria-expanded', 'false')
    await firstJob.click()
    await expect(firstJob).toHaveAttribute('aria-expanded', 'true')
    await expect(
        page.getByText('Assisted real estate professionals').first()
    ).toBeVisible()

    await firstJob.click()
    await expect(firstJob).toHaveAttribute('aria-expanded', 'false')
})

test('section navigation scrolls the page', async ({ page }) => {
    await page.goto('/')

    await page.getByRole('button', { name: 'Projects' }).click()
    await page.waitForTimeout(1000) // allow smooth scroll to finish
    const scrollY = await page.evaluate(() => window.scrollY)
    expect(scrollY).toBeGreaterThan(0)
})

test.describe('mobile viewport', () => {
    test.use({ viewport: { width: 390, height: 844 } })

    test('menu navigation lands sections below the fixed header', async ({
        page,
    }) => {
        await page.goto('/')

        await page.getByRole('button', { name: 'Open navigation menu' }).click()
        await page.getByRole('button', { name: 'Experience' }).click()
        await page.waitForTimeout(1500) // menu close + smooth scroll

        const sectionTop = await page.evaluate(
            () =>
                document.getElementById('experience')!.getBoundingClientRect()
                    .top
        )
        // Fixed header is ~73px tall; scroll-margin-top places sections at 84px
        expect(sectionTop).toBeGreaterThan(73)
        expect(sectionTop).toBeLessThan(150)
    })
})

test('unknown routes show the custom 404 page', async ({ page }) => {
    await page.goto('/this-page-does-not-exist')

    await expect(page.getByText('404')).toBeVisible()
    await expect(page.getByRole('link', { name: 'Back to home' })).toBeVisible()
})
