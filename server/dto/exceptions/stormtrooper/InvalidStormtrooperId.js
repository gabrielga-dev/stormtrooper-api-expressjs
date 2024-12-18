import {AppError} from "../AppException.js";
export class InvalidStormtrooperId extends AppError {

    constructor() {
        super('Invalid stormtrooper ID!', 422);
    }
}