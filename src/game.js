var conf = {
    width: 1024,
    height: 768,
    renderer: Phaser.AUTO,
    parent: 'game',
    transparent: false,
    antialias: false,
    state: this,
    scaleMode: Phaser.ScaleManager.RESIZE
};

var game = new Phaser.Game(conf);

game.state.add('boot', Boot);
game.state.add('preloader', Preloader);
game.state.add('menu', Menu);
game.state.add('play', Play);

game.state.start('boot');
var game = new Phaser.Game(conf);
var game2 = new Phaser.Game(conf);
var master1 = new Phaser.Game(conf);
var master2 = new Phaser.Game(conf);
