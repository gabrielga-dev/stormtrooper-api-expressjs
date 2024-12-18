import {Router} from 'express';
import controller from '../controller/StormtrooperController.js';
import {InvalidStormtrooperId} from "../dto/exceptions/stormtrooper/InvalidStormtrooperId.js";

const verifyId = (req, res, next) => {
    if (!/^[0-9a-fA-F]{24}$/.test(req.params.id)) {
        throw new InvalidStormtrooperId()
    }
    return next()
}

/**
 * @swagger
 * tags:
 *   name: Stormtroopers
 *   description: APIs to manage stormtroopers
 */
const stormtrooperRoutes = new Router();

/**
 * @swagger
 * /stormtroopers/:
 *   get:
 *     tags: [Stormtroopers]
 *     summary: Return all stormtroopers
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *         description: JWT token for authorization
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Stormtroopers list
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/StormtrooperResponse'
 */
stormtrooperRoutes.get('/', controller.list)

/**
 * @swagger
 * /stormtroopers/{id}:
 *   get:
 *     tags: [Stormtroopers]
 *     summary: Search for a specific stormtrooper by its ID
 *     description: Return all details of a single stormtrooper by the given ID.
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Stormtrooper's ID
 *       - in: header
 *         name: Authorization
 *         required: true
 *         description: JWT token for authorization
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Stormtrooper's data
 *         content:
 *           application/json:
 *             schema:
 *              $ref: '#/components/schemas/StormtrooperResponse'
 *       404:
 *         description: Stormtrooper not found
 *         content:
 *           application/json:
 *             schema:
 *              $ref: '#/components/schemas/ErrorResponse'
 */
stormtrooperRoutes.get('/:id', verifyId, controller.byId)

/**
 * @swagger
 * /stormtroopers/:
 *   post:
 *     tags: [Stormtroopers]
 *     summary: Create a new stormtrooper
 *     description: Create a new stormtrooper with the given data.
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/StormtrooperRequest'
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *         description: JWT token for authorization
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Stormtrooper's data
 *         content:
 *           application/json:
 *             schema:
 *              $ref: '#/components/schemas/StormtrooperResponse'
 */
stormtrooperRoutes.post('/', controller.create)

/**
 * @swagger
 * /stormtroopers/{id}:
 *   put:
 *     tags: [Stormtroopers]
 *     summary: Update a stormtrooper
 *     description: Update a stormtrooper with the given data.
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/StormtrooperRequest'
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Stormtrooper's ID
 *       - in: header
 *         name: Authorization
 *         required: true
 *         description: JWT token for authorization
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Stormtrooper's data
 *         content:
 *           application/json:
 *             schema:
 *              $ref: '#/components/schemas/StormtrooperResponse'
 *       404:
 *         description: Stormtrooper not found
 *         content:
 *           application/json:
 *             schema:
 *              $ref: '#/components/schemas/ErrorResponse'
 */
stormtrooperRoutes.put('/:id', verifyId, controller.update)

/**
 * @swagger
 * /stormtroopers/{id}:
 *   delete:
 *     tags: [Stormtroopers]
 *     summary: Delete a stormtrooper
 *     description: Delete a stormtrooper by the given ID.
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Stormtrooper's ID
 *     responses:
 *       201:
 *         description: Stormtrooper deleted
 *       404:
 *         description: Stormtrooper not found
 *         content:
 *           application/json:
 *             schema:
 *              $ref: '#/components/schemas/ErrorResponse'
 */
stormtrooperRoutes.delete('/:id', verifyId, controller.delete)

export default stormtrooperRoutes;