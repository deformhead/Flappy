function update() {

    // console.log('update main scene');

    this.systems.animate.update.call(this, this.world.entities);
    this.systems.move.update.call(this, this.world.entities);
    this.systems.loop.update.call(this, this.world.entities);
}

export {update};
