describe('Basic assertions', function () {
  beforeEach(function () {
    cy.viewport(1000, 600)
    cy.visit('/')
  })

  it('Display the image and cropper with correct dimension', function () {
    cy.get('img').should('have.css', 'width', '1000px')
    cy.get('img').should('have.css', 'height', '523.546875px')
    cy.percySnapshot()
  })

  it('Display tall images and set the image and cropper with correct dimension', function () {
    cy.visit('/?img=/images/cat.jpeg')
    cy.get('img').should('have.css', 'width', '338.4375px')
    cy.get('img').should('have.css', 'height', '600px')
    cy.percySnapshot()
  })

  it('Display the image and cropper with correct dimension after window resize', function () {
    cy.viewport(600, 1000)
    cy.get('img').should('have.css', 'width', '600px')
    cy.get('img').should('have.css', 'height', '314.125px')
    cy.percySnapshot()
  })

  it('should be able to set the crop position/zoom on load', function () {
    cy.visit('/?setInitialCrop=true')
    cy.percySnapshot()
  })

  it('should be able to center through external buttons', function () {
    cy.get('[data-testid=container]').dragAndDrop({ x: -500, y: 0 })
    cy.get('#crop-area-x').contains('30')
    cy.get('#horizontal-center-button').click()
    cy.get('#crop-area-x').contains('15')
  })
})
