Feature: User Registration

Scenario: Register user with all required fields
    When I send post request to createAccount API with all required fields
    Then The response code should be 201
    And The response message should be "User created!"
  
Scenario: Delete user account with valid credentials
    When I send delete request to deleteAccount API with email and password
    Then The response code should be 200
    And The response message should be "Account deleted!"



