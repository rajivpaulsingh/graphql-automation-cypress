
//Custom command for graphql
Cypress.Commands.add('graphqlRequest', actionName => {
    cy.request({
        url: '/',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            query: actionName
        },
        failOnStatusCode: false
    }).then(response => {
        console.log(response.body)
        const countryName = response.body.data.continent.countries[2].name
        return countryName
    })
})
