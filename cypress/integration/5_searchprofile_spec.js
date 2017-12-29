import {changeSubdomain} from '../utilities/traversal.js';
import {navigationButton} from '../utilities/common-components.js';

const delayPeriod = 0;
const originalRoute = 'searchprofile';

describe('Search Profile', function() {
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
