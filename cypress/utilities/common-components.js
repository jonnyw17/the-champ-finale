// ********************************************
// These contain utility functions, of which may
// consist of cypress.io notation
// ********************************************

// ********************************************
// navigationButton:
// conveniently tests specific navigation buttons
// starting from the original route -
// ends by returning back to original route
// ********************************************
export const navigationButton = {
  // Top-Left Settings button
  settings: function(originalRoute, delayPeriod = 1000){
    it('.toggle() - .menu-drop-down-btn', function(){
      cy.get('.menu-drop-down-btn')
        .wait(delayPeriod)
        .click();
      cy.wait(delayPeriod)
      cy.get('.menu-drop-down-btn')
        .wait(delayPeriod)
        .click();
    });
    it('.click - .menu-drop-down-btn', function(){
      cy.get('.menu-drop-down-btn')
        .wait(delayPeriod)
        .click();
      cy.wait(delayPeriod)
    });
    // Fullscreen mode - will be tested manually - [29.12.2017 - 14:42]
    it('.click - .log-out-btn', function(){
      cy.get('.log-out-btn')
        .wait(delayPeriod)
        .click();
      cy.wait(delayPeriod);
    });
    it(`returning back to /${originalRoute}` , function() {
      cy.wait(delayPeriod)
      cy.visit(`/${originalRoute}`)
      cy.url()
        .should('include', `/${originalRoute}`)
    });
  },
  // Top-Left Settings button
  bottom: function (originalRoute, delayPeriod = 1000, isThrowAwayCode = false){
      const classDisplayed = isThrowAwayCode
        ? 'battle-display-ready-btn'
        : 'provoke-btn';
      it(`returning back to /${originalRoute}` , function() {
        cy.wait(delayPeriod)
        cy.visit(`/${originalRoute}`)
        cy.url()
          .should('include', `/${originalRoute}`)
      });
      it('.click() - .search-profile-btn', function(){
        cy.get("." + 'search-profile-btn')
          .wait(delayPeriod)
          .click();
        cy.wait(delayPeriod)
      });
      it(`returning back to /${originalRoute}` , function() {
        cy.wait(delayPeriod)
        cy.visit(`/${originalRoute}`)
        cy.url()
          .should('include', `/${originalRoute}`)
      });
      it('.click() - .champ-display-btn', function(){
        cy.get("." + 'champ-display-btn')
          .wait(delayPeriod)
          .click();
        cy.wait(delayPeriod)
      });
      it(`returning back to /${originalRoute}` , function() {
        cy.wait(delayPeriod)
        cy.visit(`/${originalRoute}`)
        cy.url()
          .should('include', `/${originalRoute}`)
          .wait(delayPeriod)
      });
      it('.click() - .provoke-btn', function(){
        cy.get("." + classDisplayed)
          .wait(delayPeriod)
          .click();
        cy.wait(delayPeriod)
      });
      it(`returning back to /${originalRoute}` , function() {
        cy.wait(delayPeriod)
        cy.visit(`/${originalRoute}`)
        cy.url()
          .should('include', `/${originalRoute}`)
          .wait(delayPeriod )
      });
  }
}
// ********************************************
// twitterButton:
// Toggles the twitter dialog box and sends a
// the rival a tweet
// ********************************************

export const socialMedia = {
  twitterButton:function(twitterMessage = 'Up for a Challenge', delayPeriod = 1000){
    it('.click() - .twitter-btn-container', function(){
      cy.get('.twitter-btn-container')
        .wait(delayPeriod)
        .click()
        .wait(delayPeriod);
    });
    it('.type() - .tweet-box-input', function(){
      cy.get('.tweet-box-input')
        .type(`${twitterMessage}`)
        .should('contain', `${twitterMessage}`)
        .wait(delayPeriod);
    });
    it('.click() - .submit-tweet', function(){
      cy.get('.send-tweet')
        .wait(delayPeriod)
        .click();
    });
    it('.toggle() - .twitter-btn-container', function(){
      cy.get('.twitter-btn-container')
        .wait(delayPeriod)
        .click({force: true});
      cy.wait(delayPeriod)
      cy.get('.twitter-new-position', {force: true})
        .wait(delayPeriod)
        .click({force: true});
    });
  }
}
