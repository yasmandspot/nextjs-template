import { Given, When, Then, Before } from '@badeball/cypress-cucumber-preprocessor';
import { TEST_USER, ROUTES, MESSAGES } from '../../config/test.config';

Before(() => {
  cy.mockAuthService();
});

Given('I am on the login page', () => {
  cy.visit(ROUTES.login);
  cy.get('[data-testid="login-form"]').should('be.visible');
});

When('I enter {string} in the email field', (email: string) => {
  cy.get('#email').clear().type(email);
});

When('I enter {string} in the password field', (password: string) => {
  cy.get('#password').clear().type(password);
});

When('I click the login button', () => {
  cy.get('[data-testid="login-button"]').click();
});

Then('I should be logged in successfully', () => {
  cy.get('[data-testid="success-message"]')
    .should('be.visible')
    .and('contain', MESSAGES.loginSuccess);
});

Then('I should see the dashboard', () => {
  cy.url().should('include', ROUTES.dashboard);
  cy.get('[data-testid="dashboard-content"]').should('be.visible');
});

Then('I should see an error message', () => {
  cy.get('[data-testid="error-message"]')
    .should('be.visible')
    .and('contain', MESSAGES.invalidCredentials);
});

Then('I should remain on the login page', () => {
  cy.url().should('include', ROUTES.login);
});

Then('I should see validation errors for required fields', () => {
  cy.get('#email-helper-text')
    .should('have.text', 'Email is required')
    .should('have.class', 'Mui-error');

  cy.get('#password-helper-text')
    .should('have.text', 'Password is required')
    .should('have.class', 'Mui-error');
});
