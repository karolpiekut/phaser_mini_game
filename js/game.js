class Main {

    preload() {
        this.load.image('background', 'assets/background/background_true.png');
    }

    create() {
        this.add.image(480, 320, 'background');
    }

    update() {

    }

}


let game = new Phaser.Game({
    width: 960,
    height: 640,
    physics: {default: 'arcade'},
    parent: 'game'
})

game.scene.add('main', Main);
game.scene.start('main');