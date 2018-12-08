import {System} from 'modules/world.js';

import {ai} from 'systems/main/ai.js';
import {animate} from 'systems/main/animate.js';
import {collide} from 'systems/main/collide.js';
import {images} from 'systems/main/images.js';
import {loop} from 'systems/main/loop.js';
import {move} from 'systems/main/move.js';
import {velocity} from 'systems/main/velocity.js';

function setup() {

    console.log('setup main scene');

    this.state.best = null;
    this.state.bestDistance = Infinity;
    this.state.bestScore = 0;
    this.state.generation = 0;

    this.systems = {

        'images': new System(['box', 'images', 'position'], images.bind(this)),
        'animate': new System(['images'], animate.bind(this)),
        'move': new System(['move', 'box', 'position'], move.bind(this)),
        'loop': new System(['loop', 'box', 'position'], loop.bind(this)),
        'ai': new System(['ai'], ai.bind(this)),
        'velocity': new System(['velocity'], velocity.bind(this)),
        'collide': new System(['box', 'position', 'velocity'], collide.bind(this)),
    };
}

export {setup};
