Feature: User menu testing

  @all @positive
  Scenario: Successfully add a new user
    Given I navigate to the user menu
    When I create a new user
    Then I should see a success message

  @all @Negative
  Scenario: Invalid add user with blank 'email'
    Given I navigate to the user menu
    When I create a new user with blank 'email'
    Then I should see a Error message


