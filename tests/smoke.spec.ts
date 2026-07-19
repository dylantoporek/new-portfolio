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

test('section navigation lands headers at the top and swaps the highlight', async ({
    page,
}) => {
    await page.goto('/')

    const projectsButton = page.getByRole('button', { name: 'Projects' })
    await projectsButton.click()
    await page.waitForTimeout(1200) // allow smooth scroll to finish

    // Section header aligned near the top of the viewport
    const sectionTop = await page.evaluate(
        () => document.getElementById('projects')!.getBoundingClientRect().top
    )
    expect(sectionTop).toBeGreaterThan(-5)
    expect(sectionTop).toBeLessThan(120)

    // Highlight follows the scroll position
    await expect(projectsButton).toHaveAttribute('aria-current', 'true')
    await expect(
        page.getByRole('button', { name: 'Experience' })
    ).not.toHaveAttribute('aria-current', 'true')
})

test('theme toggle switches and persists across reloads', async ({ page }) => {
    await page.goto('/')

    const initial = await page.evaluate(
        () => document.documentElement.dataset.theme
    )
    expect(['dark', 'light']).toContain(initial)

    const other = initial === 'dark' ? 'light' : 'dark'
    await page.getByRole('button', { name: `Switch to ${other} theme` }).click()
    await expect
        .poll(() => page.evaluate(() => document.documentElement.dataset.theme))
        .toBe(other)

    await page.reload()
    await expect
        .poll(() => page.evaluate(() => document.documentElement.dataset.theme))
        .toBe(other)
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

        // Reopen the menu: the highlight should have followed the scroll
        await page.getByRole('button', { name: 'Open navigation menu' }).click()
        await expect(
            page.getByRole('button', { name: 'Experience' })
        ).toHaveAttribute('aria-current', 'true')
    })
})

test('unknown routes show the custom 404 page', async ({ page }) => {
    await page.goto('/this-page-does-not-exist')

    await expect(page.getByText('404')).toBeVisible()
    await expect(page.getByRole('link', { name: 'Back to home' })).toBeVisible()
})
