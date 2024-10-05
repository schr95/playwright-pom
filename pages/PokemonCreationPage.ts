import { Page, expect } from '@playwright/test';

export class PokemonCreationPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

 // Método para añadir Pokémon con sus datos específicos
 async addPokemon(pokemonData: any) {
    // Click en "Add Pokémon"
    await this.page.getByRole('button', { name: ' Add Pokémon' }).click();

    // Buscar el Pokémon por nombre
    await this.page.getByRole('textbox').click();
    await this.page.getByRole('textbox').pressSequentially(pokemonData.name.toUpperCase()); // Nombre del Pokémon en mayúsculas
    await this.page.getByText(`${pokemonData.name}`).click(); // Seleccionar el Pokémon

    // Añadir ítem
    await this.page.locator('input[name="item"]').click();
    await this.page.locator('input[name="item"]').pressSequentially(pokemonData.item);
    await this.page.getByText(pokemonData.item).click();

    // Añadir habilidad
    await this.page.locator('input[name="ability"]').click();
    await this.page.getByText(pokemonData.ability).first().click();

    // Añadir movimientos
    for (let i = 0; i < pokemonData.moves.length; i++) {
      await this.page.locator(`input[name="move${i + 1}"]`).click();
      await this.page.locator(`input[name="move${i + 1}"]`).pressSequentially(pokemonData.moves[i].toUpperCase());
      await this.page.getByText(pokemonData.moves[i]).click();
    }

    // Añadir estadísticas
    for (const [stat, value] of Object.entries(pokemonData.stats)) {
      await this.page.locator(`input[name="stat-${stat}"]`).click();
      await this.page.locator(`input[name="stat-${stat}"]`).pressSequentially(String(value));
    }
  }

  async goBackToTeamBuilder() {
    await this.page.locator('button[name="back"]').click();
  }

  async verifyEvCount() {
    await expect(this.page.getByText('0', { exact: true })).toBeVisible();
  }
}