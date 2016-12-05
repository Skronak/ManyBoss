Player = function(game){};
var player_states = [
        {
            'name' : 'idle',
            'initial' : true,
            'events' :
            {
                'left' : 'walking',
                'right' : 'walking',
                'jump' : 'jumping',
                'hit' : 'stunned'
            }
        },
        {
            'name' : 'walking',
            'events' :
            {
                'stop' : 'idle',
                'jump' : 'jumping',
                'fall' : 'falling',
                'hit' : 'stunned'
            }
        },
        {
            'name' : 'jumping',
            'events' :
            {
                'land' : 'recovering',
                'hit' : 'stunned',
                'fall' : 'falling'
            }
        },
        {
            'name' : 'recovering',
            'events' :
            {
                'recover' : 'idle'
            }
        },
        {
            'name' : 'falling',
            'events' : 
            {
                'land' : 'idle',
                'hit' : 'stunned'
            }
        },
        {
            'name' : 'stunned',
            'events' :
            {
                'recover' : 'idle',
                'hit' : 'stunned'
            }
        }
    ];

    Player.prototype = {

        preload:function() {
           this.spritePlayer = this.game.load('heros','assets/sprite/dude.png',32,48);
        },

        create: function(){
            this.spritePlayer = this.game.add.sprite(32,this.game.world.height-150,'heros');
        }
    };
