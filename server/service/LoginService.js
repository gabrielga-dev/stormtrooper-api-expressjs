import jwt from "jwt-simple";
import moment from "moment";
import config from "config";
import {TokenResponse} from "../dto/TokenResponse.js";
import {InvalidCredentialsException} from "../dto/exceptions/InvalidCredentialsException.js";
import {UserNotAuthorizedException} from "../dto/exceptions/UserNotAuthorizedException.js";

const generateExpireIn = () => {
    const amount = config.get('jwtTokenExpireAmount')
    const amountUnit = config.get('jwtTokenExpireAmountUnit')
    return moment().add(amount, amountUnit).valueOf()
}

const extractTokenFromBearer = (tokenWithBearer) => {
    if (!tokenWithBearer) {
        throw new UserNotAuthorizedException();
    }
    const tokenParts = tokenWithBearer.split(' ')
    if (tokenParts.length !== 2 || !tokenParts[1]) {
        throw new InvalidCredentialsException()
    }
    return tokenParts[1];
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
    },

    verifyJwtToken(tokenWithBearer) {
        const token = extractTokenFromBearer(tokenWithBearer)
        let decoded = {};
        try{
            decoded = jwt.decode(token, config.get('jwtTokenSecret'))
        } catch (e) {
            throw new InvalidCredentialsException()
        }
        const isExpired = moment(decoded.exp).isBefore(new Date())
        if (isExpired) {
            throw new UserNotAuthorizedException()
        }
        return decoded.user
    }
}

export default LoginService;

