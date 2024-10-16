# Proyecto de Automatización de Pruebas con Playwright y POM

## Introducción

Este proyecto es la entrega del Taller 2 para la asignatura **Tópicos Avanzados de Software** El propósito de este taller es implementar pruebas automatizadas utilizando **Playwright** con patron de diseño **POM** y uso de insumo de datos por medio de Json, cubriendo la creación de un equipo Pokémon a través de un flujo de trabajo de automatización.

### Alumnos

- Sara Herrera Ramírez
- Julio Franco Ardila

## Descripción del Proyecto

Este proyecto incluye la automatización de la página web [Pokemon showdown](https://play.pokemonshowdown.com/) para crear equipos Pokémon con generación y formato específicos del equipo, además de capturar pantallas del proceso. 

El equipo se crea con 6 pokemons con sus movimientos, item, habilidad, nombre y estadisticas. Para el ejercicio de aprender Playwright usamos una assertion en donde se verifica el uso de estadisticas completo dejando en cero el disponible y otra al final verificando que el equipo queda ok para uso.

## Requisitos

Para ejecutar el proyecto, necesitas tener instalados los siguientes componentes:

- **NodeJS**
- **Playwright**

## Estructura del Proyecto

El proyecto incluye las siguientes páginas y archivos de prueba:

* **PAGES**

- **HomePage.ts**: Esta página contiene la lógica para navegar a la página principal y manejar la selección del menú "Teambuilder".

- **PokemonCreationPage.ts**: En esta página se automatizan las acciones necesarias para seleccionar un nuevo Pokémon en el equipo.

- **PokemonDetailsPage.ts**: En esta página se automatizan las acciones necesarias para añadir las características de un Pokémon, incluyendo la selección de movimientos, habilidades y estadísticas.

- **TeambuilderPage.ts**: Esta página maneja la creación de un equipo, seleccionando la generación y el formato.

* **TESTS**

- **teambuilderTest.spec.ts**: Archivo de prueba que implementa el flujo completo para crear un equipo Pokémon, añadiendo varios Pokémon, verificando las estadísticas, y capturando pantallas del equipo configurado.

* **SCREENSHOTS**

Imagenes de evidencia de cada pokemon y el equipo completo

* **DATADRIVEN**

- **teams.json**: Json con data del equipo a crear, tiene la generación, el formato y todos los pokemones con sus caracteristicas.

### Captura de pantallas

Durante la ejecución de las pruebas, se generan capturas de pantalla automáticamente después de cada configuración de un Pokémon y después de la creación completa del equipo. Estas capturas se almacenan en la carpeta screenshots.

## Ejecución de las pruebas

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/schr95/playwright-pom
   ```
2. **Abrir el proyecto**

Se recomienda el uso de visual studio code para abrir el proyecto pero puede hacerse uso del IDE de preferencia

3. **Ejecución**

Para ejecutar las pruebas se puede lanzar el siguiente comando desde la terminal

```bash
   npx playwright test teambuilderTest.spec.ts --headed
   ```

4. **Evidencias de la ejecución**   

Las evidencias de la creación de cada pokemon y del equipo completo queda en la carpeta screenshots ubicada en la raiz del proyecto y generada en cada ejecución

## Notas adicionales

* En el código se añade un beforeAll con la limpieza de la carpeta screenshots, esto con el fin de que cuando sea ejecutada desde local tengamos solo las evidencias de la última ejecución.
* Este proyecto fue desarrollado con fines educativos.

