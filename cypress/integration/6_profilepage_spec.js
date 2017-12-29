import {changeSubdomain} from './utilities.js';

describe('Profile Page', function() {
  context('Traversal', function(){
    return changeSubdomain('profilepage');
  });
  context('Misc', function(){
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
    });
  });
});
