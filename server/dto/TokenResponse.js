export class TokenResponse {
    constructor(token, expireIn) {
        this.token = token;
        this.expireIn = expireIn;
    }
}