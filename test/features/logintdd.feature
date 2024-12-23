@Regression
Feature: KasirAja Login Testing with TDD

    @all @positive @smoke @tdd
    Scenario: Login successfully with valid credentials
        Given I open KasirAja website
        When I login with valid credentials
        Then I should be on the Dashboard page

    @all @negative @tdd
    Scenario: login with invalid credentials
        Given I open KasirAja website
        When I login with <email> and <password>
        Then I should see an error message

    Examples:
        | email                 | password         |
        | invalid_email         | 12345678         |
        | indahsitorus100@gmail.com | invalid_password |
