let el
describe('Saucedemo Assessment', () => {
  beforeEach('User can login successfully',() => {
    cy.visit('/')
    cy.fixture('element').then((sel) => {
      el = sel
    })
  })

  it('Invalid Login',()=>{
    cy.invalidLogin()
  })

  it('User can login Successfully', () => {
    cy.Login()
    cy.Logout()
  })

  it('Check that inventory is visible and not empty', () => {
    cy.Login()
    cy.viewInventory()
    cy.Logout()
  })


})
