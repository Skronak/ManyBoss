var conf = {
    width: 1024,
    height: 768,
    renderer: Phaser.AUTO,
    parent: 'game',
    transparent: false,
    state: this,
    scaleMode: Phaser.ScaleManager.RESIZE
};

var game = new Phaser.Game(conf);

game.state.add('boot', Boot);
game.state.add('preloader', Preloader);
game.state.add('play', Play);
game.state.add('play1', Play);
game.state.add('play2', Play);

game.state.start('boot');
var game = new Phaser.Game(conf);
var game2 = new Phaser.Game(conf);
