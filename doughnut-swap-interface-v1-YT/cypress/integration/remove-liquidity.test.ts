describe('Remove Liquidity', () => {
  it('redirects', () => {
    cy.visit('/remove/0xc778417E063141139Fce010982780140Aa0cD5Ab-0xF9bA5210F91D0474bd1e1DcDAeC4C58E359AaD85')
    cy.url().should(
      'contain',
      '/remove/0xc778417E063141139Fce010982780140Aa0cD5Ab/0xF9bA5210F91D0474bd1e1DcDAeC4C58E359AaD85'
    )
  })

  it('bnb remove', () => {
    cy.visit('/remove/BNB/0x012b84c2EB8fDb3055605C0A01a3D420382f1fB4')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'BNB')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'DOUGH')
  })

  it('bnb remove swap order', () => {
    cy.visit('/remove/0x012b84c2EB8fDb3055605C0A01a3D420382f1fB4/BNB')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'DOUGH')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'BNB')
  })

  it('loads the two correct tokens', () => {
    cy.visit('/remove/0x012b84c2EB8fDb3055605C0A01a3D420382f1fB4-0xe9e7cea3dedca5984780bafc599bd69add087d56')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'DOUGH')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'BUSD')
  })

  it('does not crash if DOUGH is duplicated', () => {
    cy.visit('/remove/0x012b84c2EB8fDb3055605C0A01a3D420382f1fB4-0x012b84c2EB8fDb3055605C0A01a3D420382f1fB4')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'DOUGH')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'DOUGH')
  })

  it('token not in storage is loaded', () => {
    cy.visit('/remove/0x7083609fce4d1d8dc0c979aab8c869ea2c873402-0x2170ed0880ac9a755fd29b2688956bd959f933f8')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'DOT')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'ETH')
  })
})
