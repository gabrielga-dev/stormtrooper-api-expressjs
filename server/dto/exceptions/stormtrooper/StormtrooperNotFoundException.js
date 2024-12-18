import {AppError} from "../AppException.js";
export class StormtrooperNotFoundException extends AppError {

    constructor() {
        super('Stormtrooper not found!', 404);
    }
}