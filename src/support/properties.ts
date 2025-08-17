import { faker } from "@faker-js/faker";

const BASE_URL = 'https://automationexercise.com/api';
export const API_ENDPOINTS = {
   PRODUCTS_LIST: BASE_URL+'/productsList',
   PRODUCTS_SEARCH_LIST: BASE_URL+'/searchProduct',
   LOGIN: BASE_URL+'/verifyLogin',
   CREATE_ACCOUNT: BASE_URL+'/createAccount',
   DELETE_ACCOUNT: BASE_URL+'/deleteAccount',
   UPDATE_ACCOUNT: BASE_URL+'/updateAccount',
}

export const USER_LOGIN_DETAILS = {
   EMAIL: 'ZDU@gmail.com',
   PASSWORD: 'vkI1OO7zuV',
   INVALID_PASSWORD: 'bhdbvdp'
}
const FIRST_NAME = faker.person.firstName();
const LAST_NAME = faker.person.lastName();

export const USER_REGISTRATION_DETAILS = {
   FIRST_NAME,
   LAST_NAME,
   NAME: FIRST_NAME + " " + LAST_NAME,
   EMAIL: faker.internet.email(),
   PASSWORD: faker.internet.password(),
   TITLE: faker.person.prefix(),
   ADDRESS: faker.location.streetAddress(),
   CITY: faker.location.city(),
   STATE: faker.location.state(),  
   ZIP_CODE: faker.location.zipCode(),
   MOBILE_NUMBER: faker.phone.number(),
   COUNTRY: faker.location.country(),
   COMPANY: faker.company.name(),
   BIRTH_DATE: faker.number.int({ min: 1, max: 31 }).toString(),
   BIRTH_MONTH: faker.number.int({ min: 1, max: 12 }).toString(),
   BIRTH_YEAR: faker.number.int({ min: 1900, max: 2023 }).toString()
};