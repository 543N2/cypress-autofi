describe('Interaction with IFrames', () => {

  it('e2e test', () => {


    // web elements
    let url = ''
    let links = []
    let buttons = []
    let inputs = []


    // user information
    const email = '543n2.one@gmail.com'
    const password = 'TPPass2023'


    // captures IFrames
    cy.log('Capturing IFrames...')

    cy.visit('https://www.tutorialspoint.com/html/html_iframes.htm', { timeout: 240000 })

    cy.get('iframe.result')
      .as('outerIFrame')

    cy.get('@outerIFrame')
      .its('0.contentDocument.body')
      .find('iframe')
      .as('innerIFrame')

    cy.log('IFrames captured.')


    // clicks "About us" button
    cy.log('Clicking "About us" button...')
    cy.get('@innerIFrame')
      .its('0.contentDocument.body')
      .find('li>a>i.fal.fa-globe')
      .parent()
      .click({ force: true })
    cy.log('"About us" button clicked.')


    // validates "About us" page
    cy.log('Validating "About us" page...')
    cy.get('@innerIFrame')
      .its('0.contentDocument.body')
      .find('div#mainContent h1')
      .eq(0)
      .invoke('html')
      .should('equal', 'About Company')
    cy.log('"About us" page validated.')


    // gets page URL
    cy.log('Getting page URL...')
    cy.get('@innerIFrame')
      .invoke('attr', 'src')
      .then((src) => {
        url = src
        expect(src).to.equal('/html/menu.htm')
        console.log(url)
        cy.log(url)
      })
    cy.log('Page URL captured.')


    // gets all links
    cy.log('Getting all links...')
    cy.get('@innerIFrame')
      .its('0.contentDocument.body')
      .find('a')
      .each(($a) => {
        links.push($a)
      })
      .then(() => {
        expect(links).to.have.length.at.least(70)
        console.log(links)
        cy.log(links)
      })
    cy.log('All links captured.')


    // gets all buttons
    cy.log('Getting all buttons...')
    cy.get('@innerIFrame')
      .its('0.contentDocument.body')
      .find('[class*=btn]')
      .each($button => {
        buttons.push($button)
      })
      .then(() => {
        expect(buttons).to.have.length.at.least(4)
        console.log(buttons)
        cy.log(buttons)
      })
    cy.log('All buttons captured.')


    // gets all inputs
    cy.log('Getting all inputs...')
    cy.get('@innerIFrame')
      .its('0.contentDocument.body')
      .find('input')
      .each($input => {
        inputs.push($input)
      })
      .then(() => {
        expect(inputs).to.have.length(1)
        console.log(inputs)
        cy.log(inputs)
      })
    cy.log('All inputs captured.')


    // logs user in
    cy.log('Clicking login option...')
    cy.get('@innerIFrame')
      .its('0.contentDocument.body')
      .find('.nav-login>a')
      .click({ force: true })
    cy.log('Login option clicked...')


    cy.log('Validating login form...')
    cy.get('@innerIFrame')
      .its('0.contentDocument.body')
      .find('#divLogin')
      .should('be.visible')
    cy.log('Login form validated.')


    cy.log('Typing user email...')
    cy.get('@innerIFrame')
      .its('0.contentDocument.body')
      .find('#user_email')
      .type(email)
    cy.log('User email entered.')


    cy.log('Typing user password...')
    cy.get('@innerIFrame')
      .its('0.contentDocument.body')
      .find('#user_password')
      .type(password, { force: true })
    cy.log('User password entered.')


    cy.log('Clicking login button...')
    cy.get('@innerIFrame')
      .its('0.contentDocument.body')
      .find('#user_login')
      .click({ force: true })
    cy.log('Login button clicked.')


    cy.log('Skipping mobile OTP...')
    cy.get('@innerIFrame')
      .its('0.contentDocument.body')
      .find('#skipMobileOtp')
      .click({ force: true })
    cy.log('Mobile OTP skipped.')


    cy.log('Validating login...')
    cy.get('@innerIFrame')
      .its('0.contentDocument.body')
      .find('h5>span')
      .eq(0)
      .should('have.text', " Student's Dashboard")
    cy.log('Login validated.')


  })

})