import { test, expect } from '@playwright/test';

test('Test: Creating new pokemon team', async ({ page }) => {
  test.setTimeout(60000);
  //home page
  await page.goto('https://play.pokemonshowdown.com/');
  await page.getByRole('button', { name: 'Teambuilder' }).waitFor({ state: 'visible' });
  await page.getByRole('button', { name: 'Teambuilder' }).click();
  //teambuilder page
  await page.getByRole('button', { name: ' New Team' }).waitFor({ state: 'visible' });
  await page.getByRole('button', { name: ' New Team' }).click();
  await page.getByRole('button', { name: 'Select a format ' }).waitFor({ state: 'visible' });
  await page.getByRole('button', { name: 'Select a format ' }).click();
  await page.getByPlaceholder('Search formats').waitFor({ state: 'visible' });
  await page.getByPlaceholder('Search formats').click();
  await page.getByPlaceholder('Search formats').pressSequentially('NU');
  await page.getByRole('button', { name: 'NU ', exact: true }).click();
  await page.getByRole('button', { name: ' Add Pokémon' }).click();
  await page.getByRole('textbox').waitFor({ state: 'visible' });

  //pokemon page
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('cinc');
  await page.getByText('NU Cinccino Cute').waitFor({ state: 'visible' });
  await page.getByText('NU Cinccino Cute').click();
  await page.locator('input[name="item"]').click();
  await page.locator('input[name="item"]').pressSequentially('AGUA');
  await page.getByText('Aguav Berry Restores 1/3 max').click();
  await page.locator('input[name="ability"]').click();
  await page.getByText('Cute Charm 30% chance of').first().click();
  await page.locator('input[name="move1"]').click();
  await page.locator('input[name="move1"]').pressSequentially('ENCORE');
  await page.getByText('Encore Accuracy100% PP8').click();
  await page.locator('input[name="move2"]').click();
  await page.locator('input[name="move2"]').pressSequentially('ENDE');
  await page.getByText('Endeavor Power— Accuracy100%').click();
  await page.locator('input[name="move3"]').click();
  await page.locator('input[name="move3"]').pressSequentially('CALM M');
  await page.getByText('Calm Mind Accuracy— PP32').click();
  await page.locator('input[name="move4"]').click();
  await page.locator('input[name="move4"]').pressSequentially('AQUA');
  await page.getByText('Aqua Tail Power90 Accuracy90').click();
  await page.locator('input[name="stat-hp"]').click();
  await page.locator('input[name="stat-hp"]').pressSequentially('31');
  await page.locator('input[name="stat-atk"]').click();
  await page.locator('input[name="stat-atk"]').pressSequentially('31');
  await page.locator('input[name="stat-def"]').click();
  await page.locator('input[name="stat-def"]').pressSequentially('200');
  await page.locator('input[name="stat-spa"]').click();
  await page.locator('input[name="stat-spa"]').pressSequentially('34');
  await page.locator('input[name="stat-spd"]').click();
  await page.locator('input[name="stat-spd"]').pressSequentially('100');
  await page.locator('input[name="stat-spe"]').click();
  await page.locator('input[name="stat-spe"]').pressSequentially('112');
  await expect(page.getByText('0', { exact: true })).toBeVisible();
  //teambuilder add new pokemon
  await page.getByRole('button', { name: 'addPokemon' }).click();
  //teambuilder last validation
  await page.getByRole('button', { name: ' Team' }).click();
  await page.getByRole('button', { name: ' Validate' }).click();
  await expect(page.getByText('Your team is valid for [Gen 9')).toBeVisible();
});