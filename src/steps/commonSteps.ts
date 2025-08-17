import { Then } from "@cucumber/cucumber";
import { expect } from "chai";
import { CustomWorld } from "../support/customWorld";


Then('The response code should be {int}', async function (this: CustomWorld, responseCode: number) {
    const body = await this.response?.json();
    expect(body.responseCode).to.equal(responseCode);
});

Then('The response message should be {string}', async function (this: CustomWorld, message: string) {
    const body = await this.response?.json();
    expect(body.message).to.equal(message);
});


Then('The response should be {int}', async function (this: CustomWorld, statusCode: number) {
    expect(this.response?.status()).to.equal(statusCode);
})

Then('The response body should contain {int}', async function (this: CustomWorld, productsCount: number) {
    const body = await this.response?.json();
    expect(body.products.length).to.equal(productsCount);

})