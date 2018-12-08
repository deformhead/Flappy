function ai(entity) {

    const aiComponent = entity.get('ai');
    const boxComponent = entity.get('box');
    const positionComponent = entity.get('position');
    const velocityComponent = entity.get('velocity');

    const action = aiComponent.network.predict([[

        this.world.get('pipe').get('position').x,
        this.world.get('pipe').get('position').y,
        positionComponent.y + boxComponent.height / 2,
        velocityComponent.velocity

    ]])[0];

    if (action > 0.5
    && velocityComponent.velocity >= 0) {

        velocityComponent.velocity = -4;
        velocityComponent.elapsed = 0;
    }
}

export {ai};
