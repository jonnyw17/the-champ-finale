// ********************************************
// These contain utility functions, of which may
// consist of cypress.io notation
// ********************************************

// ********************************************
// navigationButton:
// conveniently tests specific navigation buttons
// finally returns back to original route
// ********************************************
export const navigationButton = {
  // Top-Left Settings button
  settings: function(originalRoute, waitPeriod = 1000){
    it('.toggle() - .menu-drop-down-btn', function(){
      cy.get('.menu-drop-down-btn')
        .wait(waitPeriod)
        .click();
      cy.wait(waitPeriod)
      cy.get('.menu-drop-down-btn')
        .wait(waitPeriod)
        .click();
    });
    it('.click - .menu-drop-down-btn', function(){
      cy.get('.menu-drop-down-btn')
        .wait(waitPeriod)
        .click();
      cy.wait(waitPeriod)
    });
    // Fullscreen mode - will be tested manually - [29.12.2017 - 14:42]
    it('.click - .log-out-btn', function(){
      cy.get('.log-out-btn')
        .wait(waitPeriod)
        .click();
      cy.wait(waitPeriod);
    });
    it(`returning back to /${originalRoute}` , function() {
      cy.wait(waitPeriod)
      cy.visit(`/${originalRoute}`)
      cy.url()
        .should('include', `/${originalRoute}`)
    });
  },
  // Top-Left Settings button
  bottom: function (originalRoute, waitPeriod = 1000){
      it(`returning back to /${originalRoute}` , function() {
        cy.wait(waitPeriod)
        cy.visit(`/${originalRoute}`)
        cy.url()
          .should('include', `/${originalRoute}`)
      });
      it('.click() - .search-profile-btn', function(){
        cy.get("." + 'search-profile-btn')
          .wait(waitPeriod)
          .click();
        cy.wait(waitPeriod)
      });
      it(`returning back to /${originalRoute}` , function() {
        cy.wait(waitPeriod)
        cy.visit(`/${originalRoute}`)
        cy.url()
          .should('include', `/${originalRoute}`)
      });
      it('.click() - .champ-display-btn', function(){
        cy.get("." + 'champ-display-btn')
          .wait(waitPeriod)
          .click();
        cy.wait(waitPeriod)
      });
      it(`returning back to /${originalRoute}` , function() {
        cy.wait(waitPeriod)
        cy.visit(`/${originalRoute}`)
        cy.url()
          .should('include', `/${originalRoute}`)
          .wait(waitPeriod)
      });
      it('.click() - .provoke-btn', function(){
        cy.get("." + 'provoke-btn')
          .wait(waitPeriod)
          .click();
        cy.wait(waitPeriod)
      });
      it(`returning back to /${originalRoute}` , function() {
        cy.wait(waitPeriod)
        cy.visit(`/${originalRoute}`)
        cy.url()
          .should('include', `/${originalRoute}`)
          .wait(waitPeriod )
      });
  }
}
