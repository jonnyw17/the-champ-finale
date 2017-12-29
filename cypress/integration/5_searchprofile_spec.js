import {changeSubdomain} from '../utilities/traversal.js';
import {navigationButton} from '../utilities/common-components.js';

const globalSpeed = 2000;
const originalRoute = 'searchprofile';

describe('Search Profile', function() {
  xcontext('Traversal', function(){
    return changeSubdomain('searchprofile');
  });
  xcontext('Actions - Testing Settings Button', function(){
    return navigationButton.settings(originalRoute, globalSpeed);
  });
  context('Actions - Testing Bottom Navigation Buttons', function(){
    return navigationButton.bottom(originalRoute, globalSpeed);
  });
  xcontext('Misc', function(){
    it('.click() - .user-searched-details', function(){
      cy.get("." + 'user-searched-details')
        .first()
        .click();
    });
  });
});
