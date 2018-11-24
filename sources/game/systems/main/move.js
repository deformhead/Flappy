function move(entity) {

    const boxComponent = entity.get('box');
    const moveComponent = entity.get('move');
    const positionComponent = entity.get('position');

    moveComponent.elapsed += this.delta.update;

    while (moveComponent.elapsed >= 1000 / Math.abs(moveComponent.speed)) {

        positionComponent.x += moveComponent.speed / Math.abs(moveComponent.speed);
        moveComponent.elapsed -= 1000 / Math.abs(moveComponent.speed);
    }
}

export {move};
