// ********************************************
// These contain utility functions, of which may
// consist of cypress.io notation
//
// ********************************************

export function changeSubdomain(subdomain){
  it(`Visits /${subdomain}` , function() {
    cy.visit(`/${subdomain}`)
    cy.url().should('include', `/${subdomain}`)
  });
}
