function update() {

    // console.log('update main scene');

    this.systems.animate.update.call(this, this.world.entities);
}

export {update};
