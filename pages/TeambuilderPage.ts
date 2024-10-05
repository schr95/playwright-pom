import { Page, expect } from '@playwright/test';

export class TeambuilderPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Método para crear un equipo con generación y formato
  async newTeam(generation: string, format: string) {
    // Click en "New Team"
    await this.page.getByRole('button', { name: ' New Team' }).waitFor({ state: 'visible' });
    await this.page.getByRole('button', { name: ' New Team' }).click();

    // Seleccionar el formato del equipo (generación y formato)
    await this.page.getByRole('button', { name: 'Select a format ' }).waitFor({ state: 'visible' });
    await this.page.getByRole('button', { name: 'Select a format ' }).click();
    
    await this.page.getByPlaceholder('Search formats').waitFor({ state: 'visible' });
    await this.page.getByPlaceholder('Search formats').click();

    // Escribir la generación y formato, por ejemplo: '[Gen 4] NU'
    await this.page.getByPlaceholder('Search formats').pressSequentially(`[Gen ${generation}] ${format}`);
    await this.page.getByRole('button', { name: `[Gen ${generation}] ${format} ` }).click();
  }

  async veerifyValidTeam(generation: string, format: string) {
    await this.page.getByRole('button', { name: ' Team' }).click();
  await this.page.getByRole('button', { name: ' Validate' }).click();
  await expect(this.page.getByText(`Your team is valid for [${generation}]`)).toBeVisible();
  }
}
