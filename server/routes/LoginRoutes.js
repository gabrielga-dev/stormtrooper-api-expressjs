import {Router} from 'express';
import LoginController from "../controller/LoginController.js";

/**
 * @swagger
 * tags:
 *   name: Login
 *   description: APIs to make needed authorization
 */
const loginRoutes = new Router();

/**
 * @swagger
 * /login/:
 *   post:
 *     tags: [Login]
 *     summary: Generate a JWT token
 *     description: Create a JWT token for authorization.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginRequest'
 *     responses:
 *       200:
 *         description: Stormtrooper's data
 *         content:
 *           application/json:
 *             schema:
 *              $ref: '#/components/schemas/LoginResponse'
 */
loginRoutes.post('/login', LoginController.login);


export default loginRoutes;