const StormtrooperResponse = {
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
        _id: {
            type: 'string',
                description: 'StormtrooperController\'s ID',
                example: '675c2b6360915e15a301ad24',
        },
    },
};

export default StormtrooperResponse