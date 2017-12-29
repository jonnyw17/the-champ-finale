import {changeSubdomain} from './utilities.js';

describe('Platform Selection', function() {
  context('Traversal', function(){
    return changeSubdomain('platform');
  });
  context('Misc', function(){
    it('.click() - .champ-display-link', function(){
      cy.get("." + 'champ-display-link')
        .wait(2000)
        .click({
          force:true,
          multiple: true
        });
    });
  });
});
