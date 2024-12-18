import {ErrorResponse} from "../dto/ErrorResponse.js";

const ExceptionHandler = (err, req, res, _) => {
    const statusCode = err.statusCode || 500;
    const messages = (err.message || 'Internal server error').split('\n');

    res.status(statusCode).json(new ErrorResponse(statusCode, messages));
}

export default ExceptionHandler;