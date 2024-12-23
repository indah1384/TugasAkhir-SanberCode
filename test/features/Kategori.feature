Feature: Category Management Testing

  @all @positive
  Scenario: Successfully add a new category
    Given I navigate to the Category menu
    When I create a new category
    Then I should see a success message

  @all @Negative
  Scenario: Invalid add category with blank data
    Given I navigate to the Category menu
    When I create a new category with blank data
    Then I should see a Error message


