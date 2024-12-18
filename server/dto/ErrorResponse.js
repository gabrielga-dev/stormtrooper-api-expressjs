export class ErrorResponse {
    status;
    messages;

    constructor(status, messages = []) {
        this.status = status;
        this.messages = messages;
    }
}