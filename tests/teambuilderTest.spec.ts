import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { TeambuilderPage } from '../pages/TeambuilderPage';
import { PokemonCreationPage } from '../pages/PokemonCreationPage';
import * as testData from '../data-driven/teams.json';
import * as fs from 'fs';
import * as path from 'path';

function clearScreenshotsDir() {
  const screenshotsDir = path.join(__dirname, '../screenshots');
  
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  } else {
    fs.readdirSync(screenshotsDir).forEach(file => {
      const filePath = path.join(screenshotsDir, file);
      fs.unlinkSync(filePath); 
    });
  }
}

test.beforeAll(async () => {
  clearScreenshotsDir();
});

test('Test: Creating new pokemon team', async ({ page }) => {
  test.slow()
  const homePage = new HomePage(page);
  const teambuilderPage = new TeambuilderPage(page);
  const pokemonCreationPage = new PokemonCreationPage(page);

  await homePage.navigate();
  await homePage.clickTeambuilder();
  
  await teambuilderPage.newTeam(testData.gen,testData.format);

  for(const pokemon of testData.pokemons){
    await pokemonCreationPage.clickAddPokemon(); 
    await pokemonCreationPage.searchAndSelectPokemon(pokemon.name); 
    await pokemonCreationPage.addItem(pokemon.item); 
    await pokemonCreationPage.addAbility(pokemon.ability); 
    await pokemonCreationPage.addMoves(pokemon.moves); 
    await pokemonCreationPage.addStats(pokemon.stats);

    await page.screenshot({ path: `screenshots/${pokemon.name}_configured.png` });

    await pokemonCreationPage.verifyEvCount();
    await pokemonCreationPage.goBackToTeamBuilder();
  }
  
  await page.screenshot({ path: 'screenshots/final_team.png' });

  await teambuilderPage.verifyValidTeam(testData.gen,testData.format);

});