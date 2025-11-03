describe('Teste de Formulário Local', () => {
  it('Preenche o formulário e verifica resultado', () => {
   
    cy.visit('public/form.html');

    
    cy.get('#name').type('José Gicivaldo');
    cy.get('#email').type('gicivaldo@example.com');

    
    cy.get('button[type="submit"]').click();

    
    cy.get('#result').should(
      'contain',
      'Nome: José Gicivaldo, Email: gicivaldo@example.com'
    
    );
     cy.screenshot('formulario-sucesso');
  });
});
