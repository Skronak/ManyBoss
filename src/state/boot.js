var Game = {};
Boot = function(game){
};

Boot.prototype = {
	init:function() {
		this.input.maxPointers = 1;
		this.stage.disableVisibilityChange = true;
	},

	preload:function() {
		this.load.image('preloaderBar','assets/preloader.png');
	},

	create:function() {
		this.state.start('preloader');
	}

}