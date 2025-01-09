Feature: Login Functionality

  Background:
    Given I am on the login page

  Scenario: User can login with valid credentials
    When I enter "test@example.com" in the email field
    And I enter "password123" in the password field
    And I click the login button
    Then I should be logged in successfully
    And I should see the dashboard

  Scenario: User cannot login with invalid credentials
    When I enter "invalid@example.com" in the email field
    And I enter "wrongpassword" in the password field
    And I click the login button
    Then I should see an error message
    And I should remain on the login page

  Scenario: User cannot login with empty fields
    When I click the login button
    Then I should see validation errors for required fields 