describe('Sign up form', function() {
  it('Visits "/signup" ', function() {
    cy.visit('/signup')
    cy.url().should('include', '/signup')
  });
  const formElement = [
    {
      "testDescription":"Fill in fullname",
      "formClassName":"fullname-input",
      "typedInValue":"Doug Ward",
      "buttonClassName":"confirm-btn"
    },
    {
      "testDescription":"Fill in username",
      "formClassName":"username-input",
      "typedInValue":"Occam's Razor",
      "buttonClassName":"confirm-btn"
    },
    {
      "testDescription":"Fill in password",
      "formClassName":"password-input",
      "typedInValue":"Technika1",
      "buttonClassName":"confirm-btn"
    },
    {
      "testDescription":"Fill in address",
      "formClassName":[
        "address-input-1",
        "address-input-2",
        "address-input-3"
      ],
      "typedInValue":[
        "29",
        "Tib Street",
        "Manchester"
      ],
      "buttonClassName":"confirm-btn"
    },
    {
      "testDescription":"Fill in twitter handle",
      "formClassName":"twitter-handle-input",
      "typedInValue":"DougWardUK",
      "buttonClassName":"submit-btn"
    }
  ];
  for(let i = 0; i < formElement.length; i++){
    it(formElement[i].testDescription, function(){
      if(formElement[i].testDescription === "Fill in address"){
        cy.get("." + formElement[i].formClassName[0])
          .type(formElement[i].typedInValue[0])
          .should('have.value', formElement[i].typedInValue[0]);
        cy.get("." + formElement[i].formClassName[1])
          .type(formElement[i].typedInValue[1])
          .should('have.value', formElement[i].typedInValue[1]);
        cy.get("." + formElement[i].formClassName[2])
          .type(formElement[i].typedInValue[2])
          .should('have.value', formElement[i].typedInValue[2]);
      } else {
        cy.get("." + formElement[i].formClassName)
          .type(formElement[i].typedInValue)
          .should('have.value', formElement[i].typedInValue);
      }
      cy.get("." + formElement[i].buttonClassName).click();
    });
  }
  it("Tap next button", function(){
    cy.get(".next-btn").click();
  });
});
