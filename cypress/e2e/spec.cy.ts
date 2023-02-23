
describe('Check Vercel Preview', () => {
  it('Check Campus', () => {
    cy.visit(`https://nextjs-contentful-graphql-vercel-edges-ningxin1007-hotmailcom.vercel.app`)
    // cy.visit(`http://localhost:3000`)
    cy.get('#Montreal h1').should('have.length', 1)
    cy.get('#Vancouver h1').should('have.length', 1)
  })
})