import {changeSubdomain} from '../utilities/traversal.js';


const typingDelayTime = 30;

describe('Sign up form', function() {
  context('Traversal', function(){
    return changeSubdomain('signup');
  });
  context('Actions', function(){
    // Fullname section
    it('.type() - type into .fullname-input', function(){
      cy.get('.fullname-input')
        .type('Doug Ward', { delay: typingDelayTime })
        .should('have.value', 'Doug Ward');
      cy.get("." + 'confirm-btn')
        .click();
    });
    // Username section
    it('.type() - type into .username-input', function(){
      cy.get('.username-input')
        .type('J0n0than', { delay: typingDelayTime })
        .should('have.value', 'J0n0than');
      cy.get("." + 'confirm-btn')
        .click();
    });
    // Password section
    it('.type() - type into .password-input', function(){
      cy.get('.password-input')
        .type('Technika1', { delay: typingDelayTime })
        .should('have.value', 'Technika1');
      cy.get("." + 'confirm-btn')
        .click();
    });
    // Address section
    it('.type() - type into .address-input', function(){
      cy.get('.address-input-1')
        .type('29', { delay: typingDelayTime })
        .should('have.value', '29');
      cy.get('.address-input-2')
        .type('Tib Street', { delay: typingDelayTime })
        .should('have.value', 'Tib Street');
      cy.get('.address-input-3')
        .type('Manchester', { delay: typingDelayTime })
        .should('have.value', 'Manchester');
      cy.get("." + 'confirm-btn')
        .click();
    });
    // Twitter handle section
    it('.type() - type into .twitter-handle-input', function(){
      cy.get('.twitter-handle-input')
        .type('DougWardUK', { delay: typingDelayTime })
        .should('have.value', 'DougWardUK');
      cy.get("." + 'submit-btn')
        .click();
    });
  });
  context('Misc', function(){
    it('.click() - .next-btn', function(){
      cy.get("." + 'next-btn')
        .click();
    });
  });
});
