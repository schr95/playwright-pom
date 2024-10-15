import { Page, expect, Locator } from '@playwright/test';

export class PokemonCreationPage {
  readonly page: Page;
  readonly addPokemonButton: Locator;
  readonly pokemonSearchBox: Locator;
  readonly backButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addPokemonButton = page.getByRole('button', { name: ' Add Pokémon' });
    this.pokemonSearchBox = page.locator('input[name="pokemon"]');
    this.backButton = page.locator('button[name="back"]');
  }

  async clickAddPokemon() {
    await this.addPokemonButton.waitFor({ state: 'visible' });
    await this.addPokemonButton.click();
  }

  async searchAndSelectPokemon(pokemonName: string) {
    await expect(this.pokemonSearchBox).toBeEnabled();
    await this.pokemonSearchBox.click();
    await this.pokemonSearchBox.pressSequentially(pokemonName); 
    await this.page.getByText(`${pokemonName}`).click(); 
  }


  async goBackToTeamBuilder() {
    await this.backButton.click(); 
  }
}
