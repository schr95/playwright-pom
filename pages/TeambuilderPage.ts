import { Page, expect, Locator } from '@playwright/test';

export class TeambuilderPage {
  readonly page: Page;

  readonly newTeamButton: Locator;
  readonly selectFormatButton: Locator;
  readonly searchFormatsInput: Locator;
  readonly validateButton: Locator;
  readonly backToTeamButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.newTeamButton = page.getByRole('button', { name: ' New Team' });
    this.selectFormatButton = page.getByRole('button', { name: 'Select a format ' });
    this.searchFormatsInput = page.getByPlaceholder('Search formats');
    this.validateButton = page.getByRole('button', { name: ' Validate' });
    this.backToTeamButton = page.getByRole('button', { name: ' Team' });
  }

  async newTeam(generation: string, format: string) {
    await this.newTeamButton.waitFor({ state: 'visible' });
    await this.newTeamButton.click();

    await this.selectFormatButton.click();
    
    await this.searchFormatsInput.click();

    await this.searchFormatsInput.pressSequentially(`[Gen ${generation}] ${format}`);
    await this.page.getByRole('button', { name: `[Gen ${generation}] ${format} ` }).click();
  }

  async verifyValidTeam(generation: string,format:string) {
    await this.validateButton.click();
    await expect(this.page.getByText(`Your team is valid for [GEN ${generation}] ${format}.`)).toBeVisible();
  }
}

