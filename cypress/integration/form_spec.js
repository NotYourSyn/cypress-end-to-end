describe("Testing our form", () => {
    const user = cy
    beforeEach(() => {
      cy.visit("/")
    })
    it("fills out the form inputs", () => {
      const name = 'Ben'
      const email = 'ben.schinn@lambdaschool.com'
      const motivation = 'I want to help the community'

      //make sure that button is disabled
      cy.get('[data-cy=submit-button]').should('be.disabled')

      //we are filling out the name input and making sure that it has the correct value
      user.get('[for="name"] > input').type(name).should("have.value", name)

      //we are filling out the email input and making sure that it has the correct value
      user.get('[for="email"] > input').type(email).should("have.value", email)

      //using the data-user attribute and checking that the textarea is filled out properly
      user.get('[data-cy=motivation]').type(motivation).should("have.value", motivation)

      //test that the select element is working properly
      user.get('select#positions').select("Tabling").should("have.value", "Tabling")
      user.get('.terms > input').check().should("be.checked")

      //make sure that button is disabled
      cy.get('[data-cy=submit-button]').should('be.not.disabled')

      //delete email value
      user.get('[for="email"] > input').clear()
      
      //check that error msg is displayed
      cy.get('[data-cy=email-error-msg]').contains('Must include email address.')
    })
  })