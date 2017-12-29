import {changeSubdomain} from '../utilities/traversal.js';

describe('Sign In Test', function() {
  context('Traversal', function(){
    return changeSubdomain('signin');
  });
  context('Actions', function(){
    it('Visits "/signin" ', function() {
      cy.get('.username-signin')
        .type('J0n0than', {delay:30})
        .should('have.value', 'J0n0than');
      cy.get('.password-signin')
        .type('J0n0than', {delay:30})
        .should('have.value', 'J0n0than');
    });

    // This needs to test fake signin credentials
    //  1) Incorrect credentials
    //  2) Correct credentials
    // No need for conditional testing

    it(`Visits /champdisplay` , function() {
      cy.get('.confirm-credentials')
        .wait(1000)
        .click();
      cy.url()
        .should('include', `/champdisplay`);
    })
  });
});
