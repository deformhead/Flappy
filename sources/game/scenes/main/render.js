function render() {

    // console.log('render main scene');

    this.context.fillStyle = '#a8c0b0';
    this.context.fillRect(0, 0, this.size.width, this.size.height);

    this.systems.images.update.call(this, this.world.entities);

    this.context.fillStyle = '#183030';
    this.context.font = 'bold 16px Courier New';
    this.context.textAlign = 'right';
    this.context.fillText('generation: ' + this.state.generation, this.size.width - 8, 8);
    this.context.fillText('score: ' + this.state.score, this.size.width - 8, 8 + 24);
    this.context.fillText('best: ' + (this.state.score > this.state.bestScore ? this.state.score : this.state.bestScore), this.size.width - 8, 8 + 24 + 24);
}

export {render};
