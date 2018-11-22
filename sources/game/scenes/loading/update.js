function update() {

    // console.log('update loading scene');

    if (this.preloading === false && this.state.redirect === false) {

        setTimeout(() => {

            this.load('main');

        }, 800);

        this.state.redirect = true;
    }
}

export {update};
