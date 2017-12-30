import {changeSubdomain} from '../utilities/traversal.js';
import {navigationButton, socialMedia} from '../utilities/common-components.js';

const delayPeriod = 0;
const originalRoute = 'battledisplayready';

Cypress.config({
  'defaultCommandTimeout': 7000,
  'pageLoadTimeout': 20000
});

describe('Battle Display Ready [Container]', function() {
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
  // End battle
  context('Actions - challenge Rival', function(){
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
    return changeSubdomain(originalRoute);
  });
});
