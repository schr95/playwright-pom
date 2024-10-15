import { Page, expect, Locator } from '@playwright/test';

export class PokemonCreationPage {
  readonly page: Page;
  readonly addPokemonButton: Locator;
  readonly pokemonSearchBox: Locator;
  readonly itemInput: Locator;
  readonly abilityInput: Locator;
  readonly backButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addPokemonButton = page.getByRole('button', { name: ' Add Pokémon' });
    this.pokemonSearchBox = page.locator('input[name="pokemon"]');
    this.itemInput = page.locator('input[name="item"]');
    this.abilityInput = page.locator('input[name="ability"]');
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

  async addItem(item: string) {
    await this.itemInput.click();
    await this.itemInput.pressSequentially(item); 
    await this.page.getByText(item).click(); 
  }

  async addAbility(ability: string) {
    await this.abilityInput.click();
    await this.page.getByText(ability).first().click(); 
  }

  async addMoves(moves: string[]) {
    for (let i = 0; i < moves.length; i++) {
      const moveInput = this.page.locator(`input[name="move${i + 1}"]`);
      await moveInput.click();
      await moveInput.pressSequentially(moves[i].toUpperCase()); 
      await this.page.getByText(moves[i]).click(); 
    }
  }

  async addStats(stats: { [key: string]: string }) {
    for (const [stat, value] of Object.entries(stats)) {
      const statInput = this.page.locator(`input[name="stat-${stat}"]`);
      await statInput.click();
      await statInput.pressSequentially(String(value)); 
    }
  }

  async goBackToTeamBuilder() {
    await this.backButton.click(); 
  }

  async verifyEvCount() {
    await expect(this.page.getByText('0', { exact: true })).toBeVisible();
  }
}
