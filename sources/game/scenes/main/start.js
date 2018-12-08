import {Entity, World} from 'modules/world.js';
import {Network} from 'modules/network.js';
import {random} from 'modules/random.js';

import {AI} from 'components/main/ai.js';
import {Box} from 'components/main/box.js';
import {Images} from 'components/main/images.js';
import {Loop} from 'components/main/loop.js';
import {Move} from 'components/main/move.js';
import {Position} from 'components/main/position.js';
import {Velocity} from 'components/main/velocity.js';

function toto() {

    console.log(this);
}

function start() {

    console.log('start main scene');

    this.state.score = 0;
    this.state.generation += 1;

    this.world = new World();

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

    for (let bird = 0; bird < 80; bird += 1) {

        let ai = new Network({

            'network': [4, 4, 1],
            'randomize': () => 2 * Math.random() - 1,
            'biasing': 0.1,
            'activation': 'sigmoid',
            'learning': 0.1
        });

        if (this.state.best !== null) {

            ai.load(this.state.best.save());

            if (bird > 60) {
                ai.mutate(0.5, () => 2 * Math.random() - 1);
            }

            else if (bird > 40) {
                ai.mutate(0.1, (weight) => weight * -1);
            }

            else if (bird > 20) {
                ai.mutate(0.01, () =>2 * Math.random() - 1);
            }

            else if (bird > 0) {
                ai.mutate(0.01, (weight) => weight / 2);
            }
        }

        this.world.add(new Entity('bird', [

            new Box(32, 32),
            new Position(16 + random(16), 16 + random(32 * 4 - 16)),
            new Velocity(),
            new AI(ai),
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

    this.world.add(new Entity('pipe', [

        new Box(32, 32 * 10),
        new Position(32 * 10, random((this.size.height - 128) / 32) * 32 + 64),
        new Move(-128),
        new Images([

            {
                'image': this.assets.images.main['pipe'],
                'position': [0, 16 - 32 * 5 - this.size.height / 2],
                'size': [32, 32],
                'frames': [[1, 0]]
            },
            {
                'image': this.assets.images.main['pipe'],
                'position': [0, 16 - 32 * 4 - this.size.height / 2],
                'size': [32, 32],
                'frames': [[1, 0]]
            },
            {
                'image': this.assets.images.main['pipe'],
                'position': [0, 16 - 32 * 3 - this.size.height / 2],
                'size': [32, 32],
                'frames': [[1, 0]]
            },
            {
                'image': this.assets.images.main['pipe'],
                'position': [0, 16 - 32 * 2 - this.size.height / 2],
                'size': [32, 32],
                'frames': [[1, 0]]
            },
            {
                'image': this.assets.images.main['pipe'],
                'position': [0, 16 - 32 - this.size.height / 2],
                'size': [32, 32],
                'frames': [[1, 0]]
            },
            {
                'image': this.assets.images.main['pipe'],
                'position': [0, 16 + 0 - this.size.height / 2],
                'size': [32, 32],
                'frames': [[1, 0]]
            },
            {
                'image': this.assets.images.main['pipe'],
                'position': [0, 16 + 32 - this.size.height / 2],
                'size': [32, 32],
                'frames': [[1, 0]]
            },
            {
                'image': this.assets.images.main['pipe'],
                'position': [0, 16 + 32 * 2 - this.size.height / 2],
                'size': [32, 32],
                'frames': [[1, 0]]
            },
            {
                'image': this.assets.images.main['pipe'],
                'position': [0, 16 + 32 * 2 - this.size.height / 2],
                'size': [32, 32],
                'frames': [[2, 0]]
            },
            {
                'image': this.assets.images.main['pipe'],
                'position': [0, 16 + 32 * 5 - this.size.height / 2],
                'size': [32, 32],
                'frames': [[0, 0]]
            },
            {
                'image': this.assets.images.main['pipe'],
                'position': [0, 16 + 32 * 6 - this.size.height / 2],
                'size': [32, 32],
                'frames': [[1, 0]]
            },
            {
                'image': this.assets.images.main['pipe'],
                'position': [0, 16 + 32 * 7 - this.size.height / 2],
                'size': [32, 32],
                'frames': [[1, 0]]
            },
            {
                'image': this.assets.images.main['pipe'],
                'position': [0, 16 + 32 * 8 - this.size.height / 2],
                'size': [32, 32],
                'frames': [[1, 0]]
            },
            {
                'image': this.assets.images.main['pipe'],
                'position': [0, 16 + 32 * 9 - this.size.height / 2],
                'size': [32, 32],
                'frames': [[1, 0]]
            },
            {
                'image': this.assets.images.main['pipe'],
                'position': [0, 16 + 32 * 10 - this.size.height / 2],
                'size': [32, 32],
                'frames': [[1, 0]]
            },
            {
                'image': this.assets.images.main['pipe'],
                'position': [0, 16 + 32 * 11 - this.size.height / 2],
                'size': [32, 32],
                'frames': [[1, 0]]
            },
            {
                'image': this.assets.images.main['pipe'],
                'position': [0, 16 + 32 * 12 - this.size.height / 2],
                'size': [32, 32],
                'frames': [[1, 0]]
            }
        ])
    ]));

    this.state.pipe = this.world.get('pipe');
}

export {start};
