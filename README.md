# Proyecto de Automatización de Pruebas con Selenium

## Introducción

Este proyecto es la entrega del Taller 2 para la asignatura **Tópicos Avanzados de Software** El propósito de este taller es implementar pruebas automatizadas utilizando **Playwright** con patron de diseño **POM**, cubriendo la creación de un equipo Pokémon a través de un flujo de trabajo de automatización.

### Alumnos

- Sara Herrera Ramírez
- Julio Franco Ardila

## Descripción del Proyecto

Este proyecto incluye la automatización de la página web [Pokemon showdown](https://play.pokemonshowdown.com/) para crear equipos Pokémon con generación y formato específicos, además de capturar pantallas del proceso. 

## Requisitos

Para ejecutar el proyecto, necesitas tener instalados los siguientes componentes:

- **NodeJS**
- **Playwright**

## Configuración

1. **Clonar el repositorio**:

   ```bash
   git clone https://github.com/schr95/playwright-pom
   ```

## Estructura del Proyecto

El proyecto incluye las siguientes páginas y archivos de prueba:

- **HomePage.ts**: Esta página contiene la lógica para navegar a la página principal y manejar la selección del menú "Teambuilder".

- **PokemonCreationPage.ts**: En esta página se automatizan las acciones necesarias para crear un Pokémon, incluyendo la selección de movimientos, habilidades y estadísticas.

- **TeambuilderPage.ts**: Esta página maneja la creación de un equipo, seleccionando la generación y el formato.

- **teambuilderTest.spec.ts**: Archivo de prueba que implementa el flujo completo para crear un equipo Pokémon, añadiendo varios Pokémon, verificando las estadísticas, y capturando pantallas del equipo configurado.

### Captura de pantallas

Durante la ejecución de las pruebas, se generan capturas de pantalla automáticamente después de cada configuración de un Pokémon y después de la creación completa del equipo. Estas capturas se almacenan en la carpeta screenshots.

## Ejecución de las Pruebas

 PENDIENTE

