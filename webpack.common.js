const path = require('path');

module.exports = {

    'entry': './sources/index.js',
    'mode': 'none',
    'module': {

        'rules': [

            {
                'test': /\.ogg|\.png|\.wav$/,
                'use': [

                    {
                        'loader': 'url-loader'
                    }
                ]
            }
        ]
    },
    'output': {

        'path': path.resolve(__dirname, 'docs/'),
        'filename': 'index.js'
    },
    'resolve': {

        'alias': {

            'assets': path.resolve(__dirname, 'sources/game/assets/'),
            'scenes': path.resolve(__dirname, 'sources/game/scenes/'),

            'core': path.resolve(__dirname, 'sources/theatre/core/'),
            'modules': path.resolve(__dirname, 'sources/theatre/modules/')
        }
    }
};
