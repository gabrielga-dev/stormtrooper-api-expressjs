import {AppError} from "./AppException.js";
export class InvalidCredentialsException extends AppError {

    constructor() {
        super('Your credentials are invalid!', 401);
    }
}