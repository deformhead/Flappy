import {World, System} from 'modules/world.js';

import {animate} from 'systems/main/animate.js';
import {gravity} from 'systems/main/gravity.js';
import {images} from 'systems/main/images.js';
import {loop} from 'systems/main/loop.js';
import {move} from 'systems/main/move.js';

function setup() {

    console.log('setup main scene');

    this.world = new World();
    this.systems = {

        'images': new System(['box', 'images', 'position'], images.bind(this)),
        'animate': new System(['images'], animate.bind(this)),
        'move': new System(['move', 'box', 'position'], move.bind(this)),
        'loop': new System(['loop', 'box', 'position'], loop.bind(this)),
        'gravity': new System(['gravity', 'box', 'position'], gravity.bind(this))
    };
}

export {setup};
