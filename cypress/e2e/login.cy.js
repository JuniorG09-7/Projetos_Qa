describe('Formulário de Login', () => {

  it('Deve preencher o campo de email corretamente', () => {
    cy.visit('https://example.cypress.io/commands/actions')

    cy.get('#email1')
      .type('teste@exemplo.com')
      .should('have.value', 'teste@exemplo.com')
  })

  it('Deve exibir erro ao tentar enviar sem preencher o campo', () => {
    cy.visit('https://example.cypress.io/commands/actions')
    cy.get('#email1').clear()
    cy.get('.action-btn').click()

    cy.get('#email1').then(($input) => {
      const valor = $input.val()
      expect(valor).to.equal('', 'Campo deve estar vazio')
    })
  })

})

