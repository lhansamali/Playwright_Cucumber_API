import { API_ENDPOINTS, USER_LOGIN_DETAILS,USER_REGISTRATION_DETAILS } from "./properties";


export class CommonFunctions {

    static getURL(aliasOrURL: string): string {
        return API_ENDPOINTS[aliasOrURL as keyof typeof API_ENDPOINTS] || aliasOrURL;
    }
    static getUserData(aliasOrString: string): string {
        return USER_LOGIN_DETAILS[aliasOrString as keyof typeof USER_LOGIN_DETAILS] || aliasOrString;
    }
    static getRegistrationData(aliasOrString: string): string {
        return USER_REGISTRATION_DETAILS[aliasOrString as keyof typeof USER_REGISTRATION_DETAILS] || aliasOrString;
    }
}

