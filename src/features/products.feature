Feature: Products API


Scenario: 'Verify All produts list'
   When I send get request to "PRODUCTS_LIST"
   Then The response should be 200
   Then The response body should contain 34

Scenario: 'Verify Post to All Product list'
   When I send post request to "PRODUCTS_LIST"
   Then The response code should be 405
   Then The response message should be "This request method is not supported."

Scenario: 'Verify Put to All Product list'
   When I send put request to "PRODUCTS_LIST"
   Then The response code should be 405
   Then The response message should be "This request method is not supported."

Scenario: 'Verify Searched products'
   When I send post request to "PRODUCTS_SEARCH_LIST" to search 'Blue Top'
   Then The response code should be 200
   Then The product brand should be "Polo"