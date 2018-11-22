import {Entity} from 'modules/world.js';

import {Images, Position} from 'components/index.js';

function start() {

    console.log('start main scene');

    this.world.add(new Entity('tree', [

        new Position(0, 7 * 32),
        new Images([

            {
                'image': this.assets.images.main['tree'],
                'position': [0, 0],
                'size': [32 * 10, 32 * 2],
                'frames': [[0, 0]]
            }
        ])
    ]));

    this.world.add(new Entity('cloud', [

        new Position(0, 32),
        new Images([

            {
                'image': this.assets.images.main['cloud'],
                'position': [0, 0],
                'size': [32 * 10, 32 * 3],
                'frames': [[0, 0]]
            }
        ])
    ]));

    this.world.add(new Entity('pipe', [

        new Position(32 * 5, 0),
        new Images([

            {
                'image': this.assets.images.main['pipe'],
                'position': [0, 0],
                'size': [32, 32],
                'frames': [[1, 0]]
            },
            {
                'image': this.assets.images.main['pipe'],
                'position': [0, 32],
                'size': [32, 32],
                'frames': [[2, 0]]
            },
            {
                'image': this.assets.images.main['pipe'],
                'position': [0, 32 * 4],
                'size': [32, 32],
                'frames': [[0, 0]]
            },
            {
                'image': this.assets.images.main['pipe'],
                'position': [0, 32 * 5],
                'size': [32, 32],
                'frames': [[1, 0]]
            },
            {
                'image': this.assets.images.main['pipe'],
                'position': [0, 32 * 6],
                'size': [32, 32],
                'frames': [[1, 0]]
            },
            {
                'image': this.assets.images.main['pipe'],
                'position': [0, 32 * 7],
                'size': [32, 32],
                'frames': [[1, 0]]
            },
            {
                'image': this.assets.images.main['pipe'],
                'position': [0, 32 * 8],
                'size': [32, 32],
                'frames': [[1, 0]]
            }
        ])
    ]));

    this.world.add(new Entity('bird', [

        new Position(32, this.size.height / 2 - 32 / 2),
        new Images([

            {
                'image': this.assets.images.main['bird'],
                'position': [0, 0],
                'size': [32, 32],
                'frames': [[0, 0], [1, 0], [2, 0]],
                'framerate': 16
            }
        ])
    ]));
}

export {start};
