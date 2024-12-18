import jwt from "jwt-simple";
import moment from "moment";
import config from "config";
import {TokenResponse} from "../dto/TokenResponse.js";
import {InvalidCredentialsException} from "../dto/exceptions/InvalidCredentialsException.js";

const generateExpireIn = () => {
    const amount = config.get('jwtTokenExpireAmount')
    const amountUnit = config.get('jwtTokenExpireAmountUnit')
    return moment().add(amount, amountUnit).valueOf()
}

const LoginService = {
    generateJwtToken(username, password) {
        if (username === 'rebels' && password === '1138') {
            const expireIn = generateExpireIn();
            const token = jwt.encode(
                {
                    user: username,
                    exp: expireIn
                }, config.get('jwtTokenSecret')
            )
            return new TokenResponse(token, expireIn)
        }
        throw new InvalidCredentialsException()
    }
}

export default LoginService;

