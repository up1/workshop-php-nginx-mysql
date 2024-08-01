describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://nginx')
    cy.get('h1').should('contain', 'Hello with Nginx + PHP + MySQL')
    cy.get('table tr').should('have.length', 6)
  })
})