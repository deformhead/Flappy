function loop(entity) {

    const boxComponent = entity.get('box');
    const positionComponent = entity.get('position');

    if (boxComponent.width >= this.size.width) {

        while (positionComponent.x + boxComponent.width / 2 <= 0) {

            positionComponent.x += boxComponent.width / 2;
        }
    }
}

export {loop};
