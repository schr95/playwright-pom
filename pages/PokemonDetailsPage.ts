import { Page, expect, Locator } from '@playwright/test';


export class PokemonDetailsPage {
    readonly page: Page;
    readonly itemInput: Locator;
    readonly abilityInput: Locator;

    constructor(page: Page) {
        this.page = page;
        this.itemInput = page.locator('input[name="item"]');
        this.abilityInput = page.locator('input[name="ability"]');
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
  
  async verifyEvCount() {
    await expect(this.page.getByText('0', { exact: true })).toBeVisible();
  }
}