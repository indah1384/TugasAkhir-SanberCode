Feature: Produk menu testing

  @all @positive
  Scenario: Successfully add a new produk
    Given I navigate to the produk menu
    When I create a new produk
    Then I should see a success message

  @all @Negative
  Scenario: Invalid add category with blank 'name'
    Given I navigate to the produk menu
    When I create a new category with blank 'nama'
    Then I should see a Error message


