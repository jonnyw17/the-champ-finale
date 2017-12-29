import {changeSubdomain} from './utilities.js';
Cypress.config({
  'defaultCommandTimeout': 7000,
  'pageLoadTimeout': 20000
});
describe('Platform Selection', function() {
  context('Cypress.config()', function () {
    it('Cypress.config() - get and set configuration options', function () {
      let myConfig = Cypress.config()
      expect(myConfig).to.have.property('defaultCommandTimeout', 7000);
      expect(myConfig).to.have.property('waitForAnimations', true);
      expect(Cypress.config('pageLoadTimeout')).to.eq(20000);
    })
  })
  context('Traversal', function(){
    return changeSubdomain('battledisplayready');
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
