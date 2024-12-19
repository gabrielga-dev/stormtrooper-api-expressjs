import LoginService from "../../../../server/service/LoginService.js";
import {InvalidCredentialsException} from "../../../../server/dto/exceptions/InvalidCredentialsException.js";
import config from "config";
import {UserNotAuthorizedException} from "../../../../server/dto/exceptions/UserNotAuthorizedException.js";

jest.mock('config');


test('generateJwtToken - when username is not valid, then throw InvalidCredentialsException', () => {
    expect(
        () => LoginService.generateJwtToken('invalid', 'invalid')
    ).toThrow(InvalidCredentialsException);
});


test('generateJwtToken - when username is valid but password is not, then throw InvalidCredentialsException', () => {
    expect(
        () => LoginService.generateJwtToken('rebels', 'invalid')
    ).toThrow(InvalidCredentialsException);
});

test('generateJwtToken - when username and password are valid, then generate token', () => {
    config.get.mockImplementation((key) => {
        if (key === 'jwtTokenExpireAmount') return 7;
        if (key === 'jwtTokenExpireAmountUnit') return 'days';
        if (key === 'jwtTokenSecret') return 'mockedSecret';
        return undefined;
    });

    let returnedObject = LoginService.generateJwtToken('rebels', '1138');

    expect(returnedObject.token).not.toBeNull();
    expect(returnedObject.expireIn).not.toBeNull();
});

test('verifyJwtToken - when token value is null, then throw UserNotAuthorizedException', () => {
    expect(
        () => LoginService.verifyJwtToken(null)
    ).toThrow(UserNotAuthorizedException);
});

test('verifyJwtToken - when token value is empty, then throw UserNotAuthorizedException', () => {
    expect(
        () => LoginService.verifyJwtToken('')
    ).toThrow(UserNotAuthorizedException);
});

test('verifyJwtToken - when token value is undefined, then throw UserNotAuthorizedException', () => {
    expect(
        () => LoginService.verifyJwtToken(undefined)
    ).toThrow(UserNotAuthorizedException);
});

test('verifyJwtToken - when token is not made by two parts, then throw InvalidCredentialsException', () => {
    expect(
        () => LoginService.verifyJwtToken('Bearer')
    ).toThrow(InvalidCredentialsException);
});

test('verifyJwtToken - when second token part is empty, then throw InvalidCredentialsException', () => {
    expect(
        () => LoginService.verifyJwtToken('Bearer ')
    ).toThrow(InvalidCredentialsException);
});

test('verifyJwtToken - when lib fails to decode, then throw InvalidCredentialsException', () => {
    expect(
        () => LoginService.verifyJwtToken('Bearer 123')
    ).toThrow(InvalidCredentialsException);
});

test('verifyJwtToken - when token is expired, then throw UserNotAuthorizedException', () => {
    config.get.mockImplementation((key) => {
        if (key === 'jwtTokenExpireAmount') return 1;
        if (key === 'jwtTokenExpireAmountUnit') return 'ms';
        if (key === 'jwtTokenSecret') return 'mockedSecret';
        return undefined;
    });
    const bearerTokenExpired = `Bearer ${LoginService.generateJwtToken('rebels', '1138').token}`

    setTimeout(() => {
        expect(
            () => LoginService.verifyJwtToken(bearerTokenExpired)
        ).toThrow(UserNotAuthorizedException);
    }, 10)
});

test('verifyJwtToken - when token is valid and not expired, then return tokens user', () => {
    config.get.mockImplementation((key) => {
        if (key === 'jwtTokenExpireAmount') return 10;
        if (key === 'jwtTokenExpireAmountUnit') return 'seconds';
        if (key === 'jwtTokenSecret') return 'mockedSecret';
        return undefined;
    });
    const bearerTokenNotExpired = `Bearer ${LoginService.generateJwtToken('rebels', '1138').token}`
    let returnedUser = LoginService.verifyJwtToken(bearerTokenNotExpired);
    expect(returnedUser).not.toBeNull();
    expect(returnedUser).toEqual('rebels');
});