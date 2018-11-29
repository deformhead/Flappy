function animate(entity) {

    const imagesComponent = entity.get('images');

    imagesComponent.parts.forEach((image) => {

        if (image.frames.length > 1) {

            image.elapsed += this.delta.update;

            const duration = 1000 / image.framerate;

            while (image.elapsed >= duration) {

                image.elapsed -= duration;
                image.frame = (image.frame === image.frames.length - 1) ? 0 : image.frame + 1;
                image.current = image.frames[image.frame];
            }
        }
    });
}

export {animate};
