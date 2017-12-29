import {changeSubdomain} from './utilities.js';

const displayPeriod = 1000;

describe('Home Page Test', function() {
  context('Traversal', function(){
    it(`Visits /` , function() {
      cy.visit(``)
      cy.url()
        .should('include', ``)
        .wait(displayPeriod)
    });
    it('Visits "/signup" ', function() {
      cy.get('.sign-up-btn')
        .click();
      cy.get('.back-btn')
        .wait(displayPeriod)
        .click();
    });
    it('Visits "/signin" ', function() {
      cy.get('.sign-in-btn')
        .wait(displayPeriod)
        .click();
        cy.get('.back-btn')
          .wait(displayPeriod)
          .click();
    });
  });
});
