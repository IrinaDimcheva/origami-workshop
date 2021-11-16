describe('Pages scenarios', () => {
  it('Home page!', () => {
    cy.visit('http://localhost:3000')
    cy.get('h1').contains('Publications')
  })

  it('should render home page and navigate to login page', () => {
    cy.visit('http://localhost:3000')
    cy.get('header [data-test-id="link-Login"]').click()
    cy.get('h1').contains('Login')
  })

  it('Login page!', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('h1').contains('Login')
    cy.get('#username').type('irina')
    cy.get('#password').type('pass12345')
    cy.get('button').click()
    cy.get('header [data-test-id="link-Profile"]')
  })
})