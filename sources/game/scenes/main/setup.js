import {World, System} from 'modules/world.js';

import {animate, images, loop, move} from 'systems/index.js';

function setup() {

    console.log('setup main scene');

    this.world = new World();
    this.systems = {

        'images': new System(['box', 'images', 'position'], images.bind(this)),
        'animate': new System(['images'], animate.bind(this)),
        'move': new System(['move', 'box', 'position'], move.bind(this)),
        'loop': new System(['loop', 'box', 'position'], loop.bind(this))
    };
}

export {setup};
