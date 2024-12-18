import {Router} from 'express';
import stormtrooperRoutes from "./StormtrooperRoutes.js";

import loginRoutes from "./LoginRoutes.js";
import LoginService from "../service/LoginService.js";


const verifyJwt = (request, _, next) => {
    const token = request.headers.authorization;
    request.user = LoginService.verifyJwtToken(token)
    next()
}

const routes = new Router();

routes.use('/stormtroopers', verifyJwt, stormtrooperRoutes);
routes.use('/', loginRoutes);

export default routes;