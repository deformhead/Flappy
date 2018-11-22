import {World, System} from 'modules/world.js';

import {animate, images} from 'systems/index.js';

function setup() {

    console.log('setup main scene');

    this.world = new World();
    this.systems = {

        'image': new System(['images', 'position'], images.bind(this)),
        'animate': new System(['images'], animate.bind(this))
    };
}

export {setup};
