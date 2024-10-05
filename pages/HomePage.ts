import { Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://play.pokemonshowdown.com/');
    const connectButton = this.page.getByRole('button', { name: 'Retry with HTTP' });
    
    if (await connectButton.isVisible()) {
      await connectButton.click();
    }
  
  }

  async clickTeambuilder() {
    await this.page.getByRole('button', { name: 'Teambuilder' }).waitFor({ state: 'visible' });
    await this.page.getByRole('button', { name: 'Teambuilder' }).click();
  }
}