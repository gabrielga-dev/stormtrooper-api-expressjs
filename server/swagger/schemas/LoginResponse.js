const LoginResponse = {
    type: 'object',
        properties: {
        token: {
            type: 'string',
                description: 'JWT token',
        },
        expireIn: {
            type: 'int',
                description: 'When, in epoch timestamp, the JWT token will expire.',
        },
    },
};

export default LoginResponse