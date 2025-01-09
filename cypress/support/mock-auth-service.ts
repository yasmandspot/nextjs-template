Cypress.Commands.add('mockAuthService', () => {
  cy.intercept('POST', '/api/auth/login', (req) => {
    const { email, password } = req.body;

    if (email === 'test@example.com' && password === 'password123') {
      req.reply({
        statusCode: 200,
        body: {
          token: 'fake-jwt-token',
          message: 'Successfully logged in',
        },
      });
    } else {
      req.reply({
        statusCode: 401,
        body: {
          message: 'Invalid credentials',
        },
      });
    }
  }).as('loginRequest');
});
