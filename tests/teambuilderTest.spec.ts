import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { TeambuilderPage } from '../pages/TeambuilderPage';
import { PokemonCreationPage } from '../pages/PokemonCreationPage';
import * as testData from '../data-driven/teams.json';

test('Test: Creating new pokemon team', async ({ page }) => {
  test.slow()
  const homePage = new HomePage(page);
  const teambuilderPage = new TeambuilderPage(page);
  const pokemonCreationPage = new PokemonCreationPage(page);


  //home page
  await homePage.navigate();
  await homePage.clickTeambuilder();
  //teambuilder page
  await teambuilderPage.newTeam(testData.gen,testData.format);

  for(const pokemon of testData.pokemons){
    await pokemonCreationPage.addPokemon(pokemon);
    await pokemonCreationPage.verifyEvCount();
    await pokemonCreationPage.goBackToTeamBuilder();
  }

  await teambuilderPage.veerifyValidTeam(testData.gen,testData.format);
});