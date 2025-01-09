/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    loginUser(email: string, password: string): void;
    shouldShowValidationError(field: string, message: string): void;
    mockAuthService(): void;
  }
}

Cypress.Commands.add('loginUser', (email: string, password: string) => {
  cy.get('[data-testid="email-input"]').clear().type(email);
  cy.get('[data-testid="password-input"]').clear().type(password);
  cy.get('[data-testid="login-button"]').click();
});

Cypress.Commands.add('shouldShowValidationError', (field: string, message: string) => {
  cy.get(`[data-testid="${field}-input"]`).parent().should('contain', message);
});
