function destroy() {

    console.log('destroy main scene');

    delete this.world;
    delete this.systems;

    console.log('-------');
}

export {destroy};
