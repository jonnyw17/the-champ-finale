import {changeSubdomain} from '../utilities/traversal.js';

const displayPeriod = 0;

describe('Platform Selection', function() {
  context('Traversal', function(){
    return changeSubdomain('platform');
  });
  context('Misc', function(){
    it('.click() - .champ-display-link', function(){
      cy.get("." + 'champ-display-link')
        .wait(displayPeriod)
        .click({
          force:true,
          multiple: true
        });
    });
  });
});
