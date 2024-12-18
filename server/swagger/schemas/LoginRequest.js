const LoginRequest = {
    type: 'object',
        properties: {
        username: {
            type: 'string',
                description: 'Username',
                example: 'Use: rebels',
        },
        password: {
            type: 'string',
                description: 'Password',
                example: 'Use: 1138',
        },
    },
};

export default LoginRequest