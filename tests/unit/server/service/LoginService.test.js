import LoginService from "../../../../server/service/LoginService.js";
import {InvalidCredentialsException} from "../../../../server/dto/exceptions/InvalidCredentialsException.js";


test('generateJwtToken - when username is not valid, then throw InvalidCredentialsException', () => {
    let hasError = false;
    let error = {};
    try {
        LoginService.generateJwtToken('invalid', 'invalid');
    } catch (err) {
        hasError = true;
        error = err;
    }

    expect(hasError).toEqual(true);
    expect(error instanceof InvalidCredentialsException).toBe(true);
});