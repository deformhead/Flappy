import {Rectangle} from 'modules/shape.js';
import {collide as collision} from 'modules/collide.js';

function collide(entity) {

    const aiComponent = entity.get('ai');
    const boxComponent = entity.get('box');
    const positionComponent = entity.get('position');

    const bird = new Rectangle(positionComponent.x + 2, positionComponent.y + 2, boxComponent.width - 4, boxComponent.height - 4);
    const up = new Rectangle(this.state.pipe.get('position').x, 0, this.state.pipe.get('box').width, this.state.pipe.get('position').y - 32);
    const down = new Rectangle(this.state.pipe.get('position').x, this.state.pipe.get('position').y + 32, this.state.pipe.get('box').width, this.state.pipe.get('box').height - (this.state.pipe.get('position').y + 32));
    const screen = new Rectangle(0, 0, this.size.width, this.size.height);

    if (collision(bird, up) === true
    || collision(bird, down) === true
    || collision(bird, screen) === false) {

        if (this.state.score > this.state.bestScore) {

            this.state.best = aiComponent.network;
            this.state.bestScore = this.state.score;
            this.state.bestDistance = Math.abs((positionComponent.y + boxComponent.height / 2) - this.state.pipe.get('position').y);
        }

        else if (this.state.score === this.state.bestScore
        && Math.abs((positionComponent.y + boxComponent.height / 2) - this.state.pipe.get('position').y) < this.state.bestDistance) {

            this.state.best = aiComponent.network;
            this.state.bestDistance = Math.abs((positionComponent.y + boxComponent.height / 2) - this.state.pipe.get('position').y);
        }

        this.world.remove(entity);
    }

    if (typeof this.world.get('bird') === 'undefined') {

        this.restart();
    }
}

export {collide};
