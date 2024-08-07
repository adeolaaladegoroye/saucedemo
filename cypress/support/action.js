Cypress.Commands.add('Login', () => {
    cy.fixture('element').then((el) => {
        cy.get(el.usernameField).should('be.visible').type(el.standardUser)
        cy.get(el.passwordField).should('be.visible').type(el.password)
        cy.get(el.loginButton).should('be.visible').click()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    })
})

Cypress.Commands.add('Logout', () => {
    cy.fixture('element').then((el) => {
        cy.get(el.burgerButton).should('be.visible').click()
        cy.get(el.logoutButton).should('be.visible').click()

    })
})

Cypress.Commands.add('viewInventory', () => {
    cy.fixture('element').then((el) => {
        cy.get(el.inventoryItems).should('have.length.greaterThan', 5).and('not.be.empty')
        cy.get(el.inventoryItems).should('be.visible').and('exist')

    })
})

Cypress.Commands.add('invalidLogin',()=>{
    cy.fixture('element').then((el)=>{
        cy.get(el.usernameField).should('be.visible').type(el.invalidUsername)
        cy.get(el.passwordField).should('be.visible').type(el.password)
        cy.get(el.loginButton).should('be.visible').click()
        cy.contains(el.errorMessage).should('be.visible')
    })
})





