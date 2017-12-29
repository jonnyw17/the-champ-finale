// ********************************************
// This spec file, allows you pick and choose
// which specific tests you would like to run.
//
// Default Option: run every integration test
// each route.
//
// Other Option:
// With Mocha you can;
//
//  1) Rule out a test by inserting an x in front
// of 'describe()', 'context()' or it().
//
//  2) Running exclusive tests it only()
//
// When to update this spec?
//
//  1) when parts of the application have passed
//     other tests
//  2) add the passed tests to this spec
//     - like a snapshot of the current test
//     state
// ********************************************

import {changeSubdomain} from '../utilities/traversal.js';
import {navigationButton, socialMedia} from '../utilities/common-components.js';

const delayPeriod = 0;
const typingDelayTime = 30;


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
        .wait(delayPeriod)
    });
    it('Visits "/signup" ', function() {
      cy.get('.sign-up-btn')
        .click();
      cy.get('.back-btn')
        .wait(delayPeriod)
        .click();
    });
    it('Visits "/signin" ', function() {
      cy.get('.sign-in-btn')
        .wait(delayPeriod)
        .click();
        cy.get('.back-btn')
          .wait(delayPeriod)
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
// Route: signin
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
// Route: platform
describe('Platform Selection', function() {
  context('Traversal', function(){
    return changeSubdomain('platform');
  });
  context('Misc', function(){
    it('.click() - .champ-display-link', function(){
      cy.get("." + 'champ-display-link')
        .wait(delayPeriod)
        .click({
          force:true,
          multiple: true
        });
    });
  });
});
// Route: champdisplay
describe('Champ Display', function() {
  const originalRoute = 'champdisplay';
  context('Traversal', function(){
    return changeSubdomain(originalRoute);
  });
  context('Actions - Testing Settings Button', function(){
    return navigationButton.settings(originalRoute, delayPeriod);
  });
  context('Actions - Testing Bottom Navigation Buttons', function(){
    return navigationButton.bottom(originalRoute, delayPeriod);
  });
});
// Route: searchprofile
describe('Search Profile', function() {
  const originalRoute = 'searchprofile';
  context('Traversal', function(){
    return changeSubdomain(originalRoute);
  });
  context('Actions - Settings Button', function(){
    return navigationButton.settings(originalRoute, delayPeriod);
  });
  context('Actions - Bottom Navigation Buttons', function(){
    return navigationButton.bottom(originalRoute, delayPeriod);
  });
  context('Actions - Toggling online and offline displays', function(){
    it('.click() - .offline-tab', function(){
      cy.get("." + 'offline-tab')
        .wait(delayPeriod)
        .click();
      cy.wait(delayPeriod)
    });
    it('.click() - .online-tab', function(){
      cy.get("." + 'online-tab')
        .wait(delayPeriod)
        .click();
      cy.wait(delayPeriod)
    });
  });
});
// Route: profilepage
describe('Profile Page', function() {
  const originalRoute = 'profilepage';
  context('Traversal', function(){
    return changeSubdomain(originalRoute);
  });
  context('Actions - Settings Button', function(){
    return navigationButton.settings(originalRoute, delayPeriod);
  });
  context('Actions - Bottom Navigation Buttons', function(){
    return navigationButton.bottom(originalRoute, delayPeriod, true);
  });
  context('Actions - Twitter Button', function(){
    return socialMedia.twitterButton();
  });
  context('Actions - Challenging Rival', function(){
    it('.click() - .challenge-btn', function(){
      cy.get("." + 'challenge-btn')
        .first()
        .click();
    });
    it('.click() - .battle-display-ready-btn', function(){
      cy.get("." + 'battle-display-ready-btn')
        .first()
        .wait(7000)
        .click();
      cy.wait(2000);
    });
    return changeSubdomain(originalRoute);
  });
});
// Route: [Throwaway Container] battledisplayready
describe('Battle Display Ready [Container]', function() {
  const originalRoute = 'battledisplayready';
  context('Cypress.config()', function () {
    it('Cypress.config() - get and set configuration options', function () {
      let myConfig = Cypress.config()
      expect(myConfig).to.have.property('defaultCommandTimeout', 7000);
      expect(myConfig).to.have.property('waitForAnimations', true);
      expect(Cypress.config('pageLoadTimeout')).to.eq(20000);
    })
  })
  context('Traversal', function(){
    return changeSubdomain(originalRoute);
  });
  context('Actions - Settings Button', function(){
    return navigationButton.settings(originalRoute, delayPeriod);
  });
  context('Actions - Bottom Navigation Buttons', function(){
    return navigationButton.bottom(originalRoute, delayPeriod, true);
  });
  // To End the current battle - between players
  context('Actions - challenge Rival', function(){
    it('.click() - .challenge-btn', function(){
      cy.get("." + 'challenge-btn')
        .first()
        .wait(7000)
        .click();
    });
  });
  // To pick Doug as the winner
  context('Misc', function(){
    it('.click() - .opponent-container', function(){
      cy.get("." + 'opponent-container')
        .first()
        .wait(3000)
        .click();
    });
    return changeSubdomain(originalRoute);
  });
});
