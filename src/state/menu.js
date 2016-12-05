Menu = function(game){};

Menu.prototype= {

	preload:function() {
		this.stage.backgroundColor ='#3A5963';
	},
	
	create:function() {
		var titleLabel = this.game.add.text(80,80,'Many Boss',
			{font: '50px Arial', fill:'#ffffff'});
		var subtitleLabel = this.game.add.text(80,80,'Press w to start',
			{font: '50px Arial', fill:'#ffffff'});
		this.start();
	},

	start:function() {
		this.state.start('play');
	}

}