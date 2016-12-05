Preloader = function(game) {
	this.preloadBar = null;
};

Preloader.prototype = {
	preload:function() {
		this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
		this.preloadBar.anchor.setTo(0.5,0.5);
		this.time.advancedTiming = true;
		this.load.setPreloadSprite(this.preloadBar);
		this.loadAssets();
	},

	create:function() {
		this.state.start('menu');
	},

	loadAssets:function(){
	    this.game.load.tilemap('level1-tilesmap', 'assets/level/level1.json', null, Phaser.Tilemap.TILED_JSON);
	    this.game.load.image('level1-tileset', 'assets/sprite/tilesmap.png');
   	    this.game.load.image('level1-tileset', 'assets/sprite/BG.png');
		this.load.spritesheet('player', 'assets/sprite/dude.png',40,40);
	}
}