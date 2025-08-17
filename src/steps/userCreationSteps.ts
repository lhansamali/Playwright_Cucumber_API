import { When } from "@cucumber/cucumber";
import { CustomWorld } from "../support/customWorld";
import { CommonFunctions } from "../support/commonFunctions";
import { USER_LOGIN_DETAILS } from "../support/properties";

When(
    'I send post request to createAccount API with all required fields',
    async function (this: CustomWorld) {
        await this.initRequestContext();

        const url = CommonFunctions.getURL("CREATE_ACCOUNT");
        const payload = {
            name: CommonFunctions.getRegistrationData("NAME"),
            firstname: CommonFunctions.getRegistrationData("FIRST_NAME"),
            lastname: CommonFunctions.getRegistrationData("LAST_NAME"),
            email: CommonFunctions.getRegistrationData("EMAIL"),
            password: CommonFunctions.getRegistrationData("PASSWORD"),
            title: CommonFunctions.getRegistrationData("TITLE"),
            address1: CommonFunctions.getRegistrationData("ADDRESS"),
            city: CommonFunctions.getRegistrationData("CITY"),
            state: CommonFunctions.getRegistrationData("STATE"),
            zipcode: CommonFunctions.getRegistrationData("ZIP_CODE"),
            mobile_number: CommonFunctions.getRegistrationData("MOBILE_NUMBER"),
            country: CommonFunctions.getRegistrationData("COUNTRY"),
            company: CommonFunctions.getRegistrationData("COMPANY"),
            birth_date: CommonFunctions.getRegistrationData("BIRTH_DATE"),
            birth_month: CommonFunctions.getRegistrationData("BIRTH_MONTH"),
            birth_year: CommonFunctions.getRegistrationData("BIRTH_YEAR")
        };
        this.response = await this.requestContext.post(url, {
            form: payload,
        });
    }
);

When(
    'I send put request to updateAccount API with all fields',
    async function (this: CustomWorld) {
        await this.initRequestContext();
        const url = CommonFunctions.getURL("UPDATE_ACCOUNT");
        const payload = {
            name: CommonFunctions.getRegistrationData("NAME"),
            firstname: CommonFunctions.getRegistrationData("FIRST_NAME"),
            lastname: CommonFunctions.getRegistrationData("LAST_NAME"),
            email: USER_LOGIN_DETAILS.EMAIL,
            password: USER_LOGIN_DETAILS.PASSWORD,
            title: CommonFunctions.getRegistrationData("TITLE"),
            address1: CommonFunctions.getRegistrationData("ADDRESS"),
            city: CommonFunctions.getRegistrationData("CITY"),
            state: CommonFunctions.getRegistrationData("STATE"),
            zipcode: CommonFunctions.getRegistrationData("ZIP_CODE"),
            mobile_number: CommonFunctions.getRegistrationData("MOBILE_NUMBER"),
            country: CommonFunctions.getRegistrationData("COUNTRY"),
            company: CommonFunctions.getRegistrationData("COMPANY"),
            birth_date: CommonFunctions.getRegistrationData("BIRTH_DATE"),
            birth_month: CommonFunctions.getRegistrationData("BIRTH_MONTH"),
            birth_year: CommonFunctions.getRegistrationData("BIRTH_YEAR")
        };
        this.response = await this.requestContext.put(url, {
            form: payload,
        });
    }
);

When(
    'I send put request to updateAccount API with invalid email',
    async function (this: CustomWorld) {
        await this.initRequestContext();
        const url = CommonFunctions.getURL("UPDATE_ACCOUNT");
        const payload = {
            name: CommonFunctions.getRegistrationData("NAME"),
            firstname: CommonFunctions.getRegistrationData("FIRST_NAME"),
            lastname: CommonFunctions.getRegistrationData("LAST_NAME"),
            email: 'invalid@email.com',
            password: USER_LOGIN_DETAILS.PASSWORD,
            title: CommonFunctions.getRegistrationData("TITLE"),
            address1: CommonFunctions.getRegistrationData("ADDRESS"),
            city: CommonFunctions.getRegistrationData("CITY"),
            state: CommonFunctions.getRegistrationData("STATE"),
            zipcode: CommonFunctions.getRegistrationData("ZIP_CODE"),
            mobile_number: CommonFunctions.getRegistrationData("MOBILE_NUMBER"),
            country: CommonFunctions.getRegistrationData("COUNTRY"),
            company: CommonFunctions.getRegistrationData("COMPANY"),
            birth_date: CommonFunctions.getRegistrationData("BIRTH_DATE"),
            birth_month: CommonFunctions.getRegistrationData("BIRTH_MONTH"),
            birth_year: CommonFunctions.getRegistrationData("BIRTH_YEAR")
        };
        this.response = await this.requestContext.put(url, {
            form: payload,
        });
    }
);

When(
    'I send delete request to deleteAccount API with email and password',
    async function (this: CustomWorld) {
        await this.initRequestContext();
        const url = CommonFunctions.getURL("DELETE_ACCOUNT");
        const payload = {
            email: CommonFunctions.getRegistrationData("EMAIL"),
            password: CommonFunctions.getRegistrationData("PASSWORD")
        };
        console.log("Delete Payload:", payload);
        this.response = await this.requestContext.delete(url, {
            form: payload,
        });
        console.log("Delete Response:", this.response);
    }
);

