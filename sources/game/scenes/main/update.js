import {Entity} from 'modules/world.js';
import {random} from 'modules/random.js';

import {Box} from 'components/main/box.js';
import {Images} from 'components/main/images.js';
import {Move} from 'components/main/move.js';
import {Position} from 'components/main/position.js';

function update() {

    // console.log('update main scene');

    this.systems.animate.update.call(this, this.world.entities);
    this.systems.move.update.call(this, this.world.entities);
    this.systems.loop.update.call(this, this.world.entities);
    this.systems.ai.update.call(this, this.world.entities);
    this.systems.velocity.update.call(this, this.world.entities);
    this.systems.collide.update.call(this, this.world.entities);

    if (this.state.pipe.get('position').x + this.state.pipe.get('box').width <= 32) {

        const delta = 32 - (this.state.pipe.get('position').x + this.state.pipe.get('box').width);

        this.world.get('pipe').name = 'oldpipe';
        this.state.score += 1;

        this.world.add(new Entity('pipe', [

            new Box(32, 32 * 10),
            new Position((32 * 10) - delta, random((this.size.height - 128) / 32) * 32 + 64),
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
}

export {update};
