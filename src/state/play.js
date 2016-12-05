Play = function(game){};

var map;
var collisionLayer;
var backgroundLayer;
var keyboard;

Play.prototype= {
	create:function() {
		this.game.stage.backgroundColor = '#787878';
	    this.map = this.game.add.tilemap('level1-tilesmap');
	    this.map.addTilesetImage('tilesmap', 'level1-tileset');
 
	    this.backgroundLayer = this.map.createLayer('backgroundLayer');
	    this.collisionLayer = this.map.createLayer('collisionLayer');
	    this.map.setCollisionBetween(1, 100000, true, 'collisionLayer');
        //  This resizes the game world to match the layer dimensions
	    this.collisionLayer.resizeWorld();

		this.game.physics.startSystem(Phaser.Physics.ARCADE);
	    this.keyboard = this.game.input.keyboard;
	},

	update: function () {
		if (this.keyboard.isDown)
	    {
	        game.camera.x -= 8;
	    }
	    else if (this.keyboard.right.isDown)
	    {
	        game.camera.x += 8;
	    }
	    else if (this.keyboard.down.isDown)
	    {
	        game.camera.y += 8;
	    }
	}
}