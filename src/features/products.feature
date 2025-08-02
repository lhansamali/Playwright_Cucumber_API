Feature: Products API


Scenario: 'Verify All produts list'
   When  I send get request to "PRODUCTS_LIST"
   Then the response should be 200
   Then the response body should contain 34

Scenario: 'Verify Post to All Product list'
   When I send post request to "PRODUCTS_LIST"
   Then the response code should be 405
   Then the response message should be "This request method is not supported."

Scenario: 'Verify Put to All Product list'
   When I send put request to "PRODUCTS_LIST"
   Then the response code should be 405
   Then the response message should be "This request method is not supported."

Scenario: 'Verify Searched products'
   When I send post request to "PRODUCTS_SEARCH_LIST" to search 'Blue Top'
   Then the response code should be 200
   Then the product brand should be "Polo"