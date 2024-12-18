const ErrorResponse = {
    type: 'object',
    properties: {
        status: {
            type: 'integer',
            description: 'HTTP Response status',
            example: '404, 500, 422',
        },
        messages: {
            type: 'array',
            items: {
                type: 'string',
            },
            description: 'List of error messages',
            example: ['StormtrooperController not found!, Invalid data!'],
        },
    },
};

export default ErrorResponse;