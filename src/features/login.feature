Feature: User Login

    Scenario: 'POST To Verify Login with valid details'
        When I send post request to "LOGIN" to verify login details with email:"EMAIL" and password:"PASSWORD"
        Then The response code should be 200
        Then The response message should be "User exists!"

    Scenario: 'POST To Verify Login without email parameter'
        When I send post request to "LOGIN" to verify login details with email:"" and password:"PASSWORD"
        Then The response code should be 400
        Then The response message should be "Bad request, email or password parameter is missing in POST request."

    Scenario: 'POST To Verify Login with invalid details'
        When I send post request to "LOGIN" to verify login details with email:"EMAIL" and password:"INVALID_PASSWORD"
        Then The response code should be 404
        Then The response message should be "User not found!"

    Scenario: ' DELETE To Verify Login'
        When I send delete request to "LOGIN"
        Then The response code should be 405
        Then The response message should be "This request method is not supported."

