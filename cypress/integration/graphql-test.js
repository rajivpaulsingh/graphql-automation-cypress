/// <reference types="Cypress" />

import {
    continentName,
    queryTodos
} from '../../cypress/support/graphql-queries'

describe('GraphQL API Automation with Cypress', () => {

    it('should be able run the graphql request', () => {
        cy.log('Using the non-custom comman.')
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