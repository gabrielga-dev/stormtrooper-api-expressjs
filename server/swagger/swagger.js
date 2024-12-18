import swaggerJSDoc from 'swagger-jsdoc';
import SwaggerSchemas from "./schemas/index.js";


const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'StormtrooperController API',
        version: '1.0.0',
        description: 'API generated automatically by Swagger',
    },
    servers: [
        {
            url: 'http://localhost:3000', // URL base do servidor
        },
    ],
    components: {
        schemas: SwaggerSchemas,
    }
};

const options = {
    swaggerDefinition,
    apis: ['server/routes/StormtrooperRoutes.js'],
};
const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;