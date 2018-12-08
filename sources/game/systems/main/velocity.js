function velocity(entity) {

    const velocityComponent = entity.get('velocity');
    const positionComponent = entity.get('position');

    velocityComponent.elapsed += this.delta.update;

    while (velocityComponent.elapsed >= 1000 / 60) {

        velocityComponent.velocity += 0.4;
        positionComponent.y += velocityComponent.velocity;
        velocityComponent.elapsed -= 1000 / 60;
    }
}

export {velocity};
