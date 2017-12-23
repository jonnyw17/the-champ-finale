describe('My First Test', function() {
  xit('Does not do much!', function() {
    expect(true).to.equal(false)
  })
})
describe('My First Test', function() {
  it('Visits "/signup" ', function() {
    cy.visit('/');
    cy.get('.sign-up-btn').click();
    // Should be on a new URL which includes '/commands/actions'
  })
});
