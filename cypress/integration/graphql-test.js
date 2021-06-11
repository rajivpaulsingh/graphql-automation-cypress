/// <reference types="Cypress" />

describe('GraphQL API Automation with Cypress', () => {

    it('should be able run the graphql request', () => {
        const continentName = `
        query {
            continent(code: "EU") {
              code,
              name,
              countries {
                code,
                name,
                native
              }
            }
          }
          `

          cy.request({
              url: '/',
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: {
                  query: continentName
              },
              failOnStatusCode: false
          }).then(response => {
              expect(response.body.data.continent.countries[2].name).to.be.eq("Austria")
          })
    })
})