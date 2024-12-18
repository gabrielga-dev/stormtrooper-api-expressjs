import express from 'express';
import routes from './routes/index.js';
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger/swagger.js";
import ExceptionHandler from "./handlers/ExceptionHandler.js";

const app = express();
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(routes);
app.use(ExceptionHandler);

export default app;