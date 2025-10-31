import { test, expect } from '@playwright/test';

test('Standard user can log in successfully', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  
  await expect(page.locator('.title')).toHaveText('Products');
});

test('locked user is locked out successfully', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'locked_out_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  const error = page.locator('[data-test="error"]');
  await expect(error).toBeVisible();
  await expect(error).toContainText('Epic sadface: Sorry, this user has been locked out.'); 
});

test('Should login with problem_user', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'problem_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await expect(page).toHaveURL(/inventory.html/);
});

test('glitch user can log in successfully', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'performance_glitch_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await expect(page).toHaveURL(/inventory.html/);
});

test('error user can log in successfully', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'error_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await expect(page).toHaveURL(/inventory.html/);
});

test('visual user can log in successfully', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'visual_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await expect(page).toHaveURL(/inventory.html/);
});

test('standard user wrong password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'wrong_sauce');
  await page.click('#login-button');
  const error = page.locator('[data-test="error"]');
  await expect(error).toBeVisible();
});

test('locked user wrong password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'locked_out_user');
  await page.fill('#password', 'wrong_sauce');
  await page.click('#login-button');
  const error = page.locator('[data-test="error"]');
  await expect(error).toBeVisible();
});

test('problem user wrong password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'problem_user');
  await page.fill('#password', 'wrong_sauce');
  await page.click('#login-button');
  const error = page.locator('[data-test="error"]');
  await expect(error).toBeVisible();
});

test('glitch user wrong password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'performance_glitch_user');
  await page.fill('#password', 'wrong_sauce');
  await page.click('#login-button');
  const error = page.locator('[data-test="error"]');
  await expect(error).toBeVisible();
});

test('error user wrong password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'error_user');
  await page.fill('#password', 'wrong_sauce');
  await page.click('#login-button');
  const error = page.locator('[data-test="error"]');
  await expect(error).toBeVisible();
});

test('visual user wrong password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'visual_user');
  await page.fill('#password', 'wrong_sauce');
  await page.click('#login-button');
  const error = page.locator('[data-test="error"]');
  await expect(error).toBeVisible();
});