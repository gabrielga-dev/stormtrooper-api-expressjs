import LoginService from "../service/LoginService.js";

const LoginController = {
    login(req, res) {
        const {username, password} = req.body;
        const generatedJwtTokenObject = LoginService.generateJwtToken(username, password);
        return res.status(200).json(generatedJwtTokenObject)
    }
}

export default LoginController;