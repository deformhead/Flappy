import {Entity} from 'modules/world.js';

import {Box} from 'components/main/box.js';
import {Gravity} from 'components/main/gravity.js';
import {Images} from 'components/main/images.js';
import {Loop} from 'components/main/loop.js';
import {Move} from 'components/main/move.js';
import {Position} from 'components/main/position.js';

function start() {

    console.log('start main scene');

    this.world.add(new Entity('tree', [

        new Box(32 * 10 * 2, 32 * 2),
        new Position(0, 7 * 32),
        new Move(-64),
        new Loop(),
        new Images([

            {
                'image': this.assets.images.main['tree'],
                'position': [0, 0],
                'size': [32 * 10, 32 * 2],
                'frames': [[0, 0]]
            },
            {
                'image': this.assets.images.main['tree'],
                'position': [32 * 10, 0],
                'size': [32 * 10, 32 * 2],
                'frames': [[0, 0]]
            }
        ])
    ]));

    this.world.add(new Entity('cloud', [

        new Box(32 * 10 * 2, 32 * 3),
        new Position(0, 32),
        new Move(-16),
        new Loop(),
        new Images([

            {
                'image': this.assets.images.main['cloud'],
                'position': [0, 0],
                'size': [32 * 10, 32 * 3],
                'frames': [[0, 0]]
            },
            {
                'image': this.assets.images.main['cloud'],
                'position': [32 * 10, 0],
                'size': [32 * 10, 32 * 3],
                'frames': [[0, 0]]
            }
        ])
    ]));

    this.world.add(new Entity('pipe', [

        new Box(32, 32 * 10),
        new Position(32 * 10, 0),
        new Move(-128),
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
                'frames': [[1, 0]]
            },
            {
                'image': this.assets.images.main['pipe'],
                'position': [0, 32 * 2],
                'size': [32, 32],
                'frames': [[2, 0]]
            },
            {
                'image': this.assets.images.main['pipe'],
                'position': [0, 32 * 5],
                'size': [32, 32],
                'frames': [[0, 0]]
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

        new Box(32, 32),
        new Position(32, this.size.height / 2 - 32 / 2),
        new Gravity(),
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
