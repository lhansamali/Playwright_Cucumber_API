import { When,Then } from "@cucumber/cucumber";
import { CustomWorld } from "../support/customWorld";
import {expect} from "chai"
import { API_ENDPOINTS } from "../support/properties";
function getURL(aliasOrURL:string):string{
    return API_ENDPOINTS[aliasOrURL as keyof typeof API_ENDPOINTS] || aliasOrURL;
}

When('I send get request to {string}',async function (this:CustomWorld,url:string) {

    await this.initRequestContext();
    const resolvedURL=getURL(url);
    this.response= await this.requestContext.get(resolvedURL);

})
When('I send post request to {string}',async function (this:CustomWorld,url:string) {
    await this.initRequestContext();
    this.response=await this.requestContext.post(getURL(url));
    
})
When('I send put request to {string}',async function (this:CustomWorld,url:string) {
    await this.initRequestContext();
    this.response=await this.requestContext.put(getURL(url));
    
})
When('I send post request to {string} to search {string}', async function (
  this: CustomWorld,
  url: string,
  searchParam: string
) {
    await this.initRequestContext();
    this.response=await this.requestContext.post(getURL(url),{
        form:{
            search_product:searchParam
        }
    });

});
Then('the response should be {int}',async function (this:CustomWorld,statusCode:number) {
    expect(this.response?.status()).to.equal(statusCode);
})
Then('the response code should be {int}',async function (this:CustomWorld,responseCode:number) {
     const body =await this.response?.json();
     expect (body.responseCode).to.equal(responseCode);
})
Then('the response body should contain {int}',async function (this:CustomWorld,productsCount:number) {
    const body =await this.response?.json();
    expect (body.products.length).to.equal(productsCount);
    
})
Then('the response message should be {string}',async function (this:CustomWorld,message:string) {
     const body =await this.response?.json();
     expect (body.message).to.equal(message);
    
})
Then('the product brand should be {string}',async function (this:CustomWorld,responseBody:string) {
     const body =await this.response?.json();
     expect (body.products[0].brand).to.equal(responseBody);
    
})