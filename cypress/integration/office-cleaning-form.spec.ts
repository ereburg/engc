/// <reference types="cypress"/>

describe('Office - Cost request form', () => {
  it('should display success page after submit', () => {
    cy.visit('/office');

    cy.findByTestId('cost-request-form').within($form => {
      cy.findByTestId('name-field').type('John Doe');
      cy.findByTestId('phone-field').type('+375331234567');
      cy.findByTestId('window-service-field').check({ force: true });
      cy.findByTestId('repair-service-field').check({ force: true });

      cy.get('button[type="submit"]').click();
    });

    cy.findByTestId('success-page').should('be.visible');
  });

  it('should display validation errors', () => {
    cy.visit('/office');

    cy.findByTestId('cost-request-form').within($form => {
      cy.get('button[type="submit"]').click();

      cy.findByTestId('name-field')
        .closest('[data-testid="field-container"]')
        .within($fieldContainer => {
          cy.get('[data-testid="field-error"]').should('be.visible');
        });

      cy.findByTestId('phone-field')
        .closest('[data-testid="field-container"]')
        .within($fieldContainer => {
          cy.get('[data-testid="field-error"]').should('be.visible');
        });
    });

    cy.findByTestId('success-page').should('not.be.visible');
  });
});
