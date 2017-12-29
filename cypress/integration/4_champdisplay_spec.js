import {changeSubdomain} from '../utilities/traversal.js';
import {navigationButton} from '../utilities/common-components.js';

const waitPerCommand = 0;
const originalRoute = 'searchprofile';

describe('Champ Display', function() {
  context('Traversal', function(){
    return changeSubdomain(originalRoute);
  });
  context('Actions - Testing Settings Button', function(){
    return navigationButton.settings(originalRoute, waitPerCommand);
  });
  context('Actions - Testing Bottom Navigation Buttons', function(){
    return navigationButton.bottom(originalRoute, waitPerCommand);
  });
});
