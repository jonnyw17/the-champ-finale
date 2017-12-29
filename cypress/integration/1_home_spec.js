import {changeSubdomain} from './utilities.js';
describe('Home Page Test', function() {
  context('Traversal', function(){
    it(`Visits /` , function() {
      cy.visit(``)
      cy.url()
        .should('include', ``)
        .wait(1000)
    });
    it('Visits "/signup" ', function() {
      cy.get('.sign-up-btn')
        .click();
      cy.get('.back-btn')
        .wait(1000)
        .click();
    });
    it('Visits "/signin" ', function() {
      cy.get('.sign-in-btn')
        .wait(1000)
        .click();
        cy.get('.back-btn')
          .wait(1000)
          .click();
    });
  });
});
// cy.get('.fullname-input')
//   .type('Doug Ward', { delay: 30 })
//   .should('have.value', 'Doug Ward');
