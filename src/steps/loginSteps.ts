import { When, Then } from "@cucumber/cucumber";
import { expect } from "chai";
import { CustomWorld } from "../support/customWorld";
import { CommonFunctions } from "../support/commonFunctions";

When(
    'I send post request to {string} to verify login details with email:{string} and password:{string}',
    async function (
        this: CustomWorld,
        url: string,
        email: string,
        password: string
    ) {
        await this.initRequestContext();

        const resolvedURL = CommonFunctions.getURL(url);
        const payload: Record<string, string> = {};

        if (email.trim() != "") {
            payload.email = CommonFunctions.getUserData(email);
        }

        if (password.trim() != "") {
            payload.password = CommonFunctions.getUserData(password);
        }

        this.response = await this.requestContext.post(resolvedURL, {
            form: payload,
        });
    }
);
When('I send delete request to {string}', async function (this: CustomWorld, url: string) {
    await this.initRequestContext();
    const resolvedURL = CommonFunctions.getURL(url);
    this.response = await this.requestContext.delete(resolvedURL);

})

Then('The response code should be {int}', async function (this: CustomWorld, responseCode: number) {
    const body = await this.response?.json();
    expect(body.responseCode).to.equal(responseCode);

})

Then('The response message should be {string}', async function (this: CustomWorld, message: string) {
    const body = await this.response?.json();
    expect(body.message).to.equal(message);
})