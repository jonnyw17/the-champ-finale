import {changeSubdomain} from './utilities.js';



Cypress.config({
  'defaultCommandTimeout': 7000,
  'pageLoadTimeout': 20000
});


// Route: home
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
    });
  });
});
// Route: signin
describe('Sign In Test', function() {
  context('Traversal', function(){
    return changeSubdomain('signin');
  });
  context('Actions', function(){
    it('Signing in ', function() {
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
    it(`.click() - [Submit Button] .confirm-credentials` , function() {
      cy.get('.confirm-credentials')
        .wait(1000)
        .click();
      cy.url()
        .should('include', `/champdisplay`);
    });
  });
  context('Misc', function(){
    it(`Visits /champdisplay` , function() {
      return changeSubdomain('signin');
      cy.get('.back-btn')
        .click();
    });
  });
});
// Route: signup
describe('Sign up form', function() {
  context('Traversal', function(){
    return changeSubdomain('signup');
  });
  context('Actions', function(){
    // Fullname section
    it('.type() - type into .fullname-input', function(){
      cy.get('.fullname-input')
        .type('Doug Ward', { delay: 30 })
        .should('have.value', 'Doug Ward');
      cy.get("." + 'confirm-btn')
        .click();
    });
    // Username section
    it('.type() - type into .username-input', function(){
      cy.get('.username-input')
        .type('J0n0than', { delay: 30 })
        .should('have.value', 'J0n0than');
      cy.get("." + 'confirm-btn')
        .click();
    });
    // Password section
    it('.type() - type into .password-input', function(){
      cy.get('.password-input')
        .type('Technika1', { delay: 30 })
        .should('have.value', 'Technika1');
      cy.get("." + 'confirm-btn')
        .click();
    });
    // Address section
    it('.type() - type into .address-input', function(){
      cy.get('.address-input-1')
        .type('29', { delay: 30 })
        .should('have.value', '29');
      cy.get('.address-input-2')
        .type('Tib Street', { delay: 30 })
        .should('have.value', 'Tib Street');
      cy.get('.address-input-3')
        .type('Manchester', { delay: 30 })
        .should('have.value', 'Manchester');
      cy.get("." + 'confirm-btn')
        .click();
    });
    // Twitter handle section
    it('.type() - type into .twitter-handle-input', function(){
      cy.get('.twitter-handle-input')
        .type('DougWardUK', { delay: 30 })
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
// Route: platform
describe('Platform Selection', function() {
  context('Traversal', function(){
    it(`Visits /platform` , function() {
      cy.url()
        .should('include', `/platform`)
    })
  });
  context('Misc', function(){
    it('.click() - .champ-display-link', function(){
      cy.get("." + 'champ-display-link')
        .wait(1500)
        .click({
          force:true,
          multiple: true
        });
    });
  });
});
// Route: champdisplay
describe('Champ Display', function() {
  context('Traversal', function(){
    it(`Visits /champdisplay` , function() {
      cy.url()
        .should('include', `/champdisplay`)
    })
  });
  context('Misc', function(){
    it('.click() - .search-profile', function(){
      cy.get("." + 'search-profile')
        .wait(1500)
        .click();
    });
  });
});
// Route: searchprofile
describe('Search Profile', function() {
  context('Traversal', function(){
    it(`Visits /searchprofile` , function() {
      cy.url()
        .should('include', `/searchprofile`)
    })
  });
  context('Misc', function(){
    it('.click() - .user-searched-details', function(){
      cy.get("." + 'user-searched-details')
        .wait(1500)
        .first()
        .click();
    });
  });
});
// Route: profilepage
describe('Profile Page', function() {
  context('Traversal', function(){
    it(`Visits /profilepage` , function() {
      cy.url()
        .should('include', `/profilepage`)
    })
  });
  context('Misc', function(){
    it('.click() - .challenge-btn', function(){
      cy.get("." + 'challenge-btn')
        .wait(1500)
        .first()
        .click();
    });
    it('.click() - .battle-display-ready-btn', function(){
      cy.get("." + 'battle-display-ready-btn')
        .first()
        .wait(7000)
        .click();
    });
  });
});
// Route: battledisplayready
describe('Battle Dislay Ready', function() {
  context('Cypress.config()', function () {
    it('Cypress.config() - get and set configuration options', function () {
      let myConfig = Cypress.config()
      expect(myConfig).to.have.property('defaultCommandTimeout', 7000);
      expect(myConfig).to.have.property('waitForAnimations', true);
      expect(Cypress.config('pageLoadTimeout')).to.eq(20000);
    })
  })
  context('Traversal', function(){
    it(`Visits /battledisplayready` , function() {
      cy.url()
        .should('include', `/battledisplayready`)
    })
  });
  context('Actions', function(){
    it('.click() - .challenge-btn', function(){
      cy.get("." + 'challenge-btn')
        .first()
        .wait(7000)
        .click();
    });
  });
  context('Misc', function(){
    it('.click() - .opponent-container', function(){
      cy.get("." + 'opponent-container')
        .first()
        .wait(3000)
        .click();
    });
  });
});
