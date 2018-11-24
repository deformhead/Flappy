function gravity(entity) {

    const positionComponent = entity.get('position');
    const gravityComponent = entity.get('gravity');

    gravityComponent.elapsed += this.delta.update;

    positionComponent.y += 0.5 * 9.81 * Math.pow(gravityComponent.elapsed / 1000, 2);
}

export {gravity};
