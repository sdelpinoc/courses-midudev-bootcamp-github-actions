/* global cy */

describe('Pokedex', () => {
  it('Front page can be opened', function() {
    cy.visit('http://localhost:5000')
    // Is case sensitive
    cy.contains('pikachu')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})