function Images(parts) {

    this.name = 'images';

    this.parts = parts;

    this.parts.forEach((image) => {

        image.framerate = image.framerate || 8;
        image.frame = 0;
        image.current = image.frames[image.frame];
        image.elapsed = 0;
    });
}

export {Images};
