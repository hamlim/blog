import { expect, test } from '@playwright/test'

test('loads the homepage', async ({ page }) => {
  await page.goto('/')

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Matt/)
})

test('loads resume', async ({ page }) => {
  await page.goto('/resume')

  await expect(page).toHaveTitle(/Resume/)
})

test('loads blog', async ({ page }) => {
  await page.goto('/blog')

  await expect(page).toHaveTitle(/Blog/)
})

test('loads projects', async ({ page }) => {
  await page.goto('/projects')

  await expect(page).toHaveTitle(/Projects/)
})
