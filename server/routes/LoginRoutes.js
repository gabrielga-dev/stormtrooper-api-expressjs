import {Router} from 'express';
import LoginController from "../controller/LoginController.js";

const loginRoutes = new Router();

loginRoutes.post('/login', LoginController.login);


export default loginRoutes;