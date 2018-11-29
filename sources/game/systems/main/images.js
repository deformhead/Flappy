function images(entity) {

    const imagesComponent = entity.get('images');
    const positionComponent = entity.get('position');

    imagesComponent.parts.forEach((image) => {

        this.context.drawImage(

            image.image,
            image.current[0] * image.size[0], image.current[1] * image.size[1], image.size[0], image.size[1],
            image.position[0] + positionComponent.x, image.position[1] + positionComponent.y, image.size[0], image.size[1]
        );
    });
}

export {images};
