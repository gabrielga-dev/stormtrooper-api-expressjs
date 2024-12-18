import {Router} from 'express';
import stormtrooperRoutes from "./StormtrooperRoutes.js";

const routes = new Router();
routes.use('/stormtroopers', stormtrooperRoutes);

export default routes;