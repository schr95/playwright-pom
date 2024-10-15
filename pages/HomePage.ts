import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  readonly connectButton: Locator;
  readonly teambuilderButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.connectButton = page.getByRole('button', { name: 'Retry with HTTP' });
    this.teambuilderButton = page.getByRole('button', { name: 'Teambuilder' });
  }

  async navigate() {
    await this.page.goto('https://play.pokemonshowdown.com/');
    
    if (await this.connectButton.isVisible()) {
      await this.connectButton.click();
    }
  }

  async clickTeambuilder() {
    await this.teambuilderButton.waitFor({ state: 'visible' });
    await this.teambuilderButton.click();
  }
}
