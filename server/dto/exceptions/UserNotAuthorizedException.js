import {AppError} from "./AppException.js";
export class UserNotAuthorizedException extends AppError {

    constructor() {
        super('User not authorized!', 401);
    }
}