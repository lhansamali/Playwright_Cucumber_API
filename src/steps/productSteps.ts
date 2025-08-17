import { When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../support/customWorld";
import { expect } from "chai"
import { CommonFunctions } from "../support/commonFunctions";

When('I send get request to {string}', async function (this: CustomWorld, url: string) {

    await this.initRequestContext();
    const resolvedURL = CommonFunctions.getURL(url);
    this.response = await this.requestContext.get(resolvedURL);

})
When('I send post request to {string}', async function (this: CustomWorld, url: string) {
    await this.initRequestContext();
    const resolvedURL = CommonFunctions.getURL(url);
    this.response = await this.requestContext.post(resolvedURL);

})
When('I send put request to {string}', async function (this: CustomWorld, url: string) {
    await this.initRequestContext();
    const resolvedURL = CommonFunctions.getURL(url);
    this.response = await this.requestContext.put(resolvedURL);

})
When('I send post request to {string} to search {string}', async function (
    this: CustomWorld,
    url: string,
    searchParam: string
) {
    await this.initRequestContext();
    const resolvedURL = CommonFunctions.getURL(url);
    this.response = await this.requestContext.post(resolvedURL, {
        form: {
            search_product: searchParam
        }
    });

});

Then('The product brand should be {string}', async function (this: CustomWorld, responseBody: string) {
    const body = await this.response?.json();
    expect(body.products[0].brand).to.equal(responseBody);

})