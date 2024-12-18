const StormtrooperRequest = {
    type: 'object',
        properties: {
        name: {
            type: 'string',
                description: 'StormtrooperController\'s name',
                example: 'CT-1321',
        },
        divisions: {
            type: 'array',
                items: {
                type: 'string',
            },
            description: 'StormtrooperController\'s name division list',
                example: ['Fist regiment'],
        },
        patent: {
            type: 'string',
                description: 'StormtrooperController\'s patent',
                example: 'Colonel',
        },
    },
};

export default StormtrooperRequest