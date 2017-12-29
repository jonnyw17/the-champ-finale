import {changeSubdomain} from '../utilities/traversal.js';
import {navigationButton, socialMedia} from '../utilities/common-components.js';

const delayPeriod = 0;
const originalRoute = 'profilepage';

describe('Profile Page', function() {
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
