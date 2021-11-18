var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    // this.load.setBaseURL('https://labs.phaser.io');

    // this.load.image('sky', 'assets/skies/space3.png');
    this.load.image('logo', 'dogee.png');
    this.load.image('red', 'dogee.png');
    this.load.image('player', 'dog.png');
}

function create ()
{
    // this.add.image(400, 300, 'sky');

    var particles = this.add.particles('red');

    var emitter = particles.createEmitter({
        speed: 100,
        scale: { start: 1, end: 0 },
        blendMode: 'ADD'
    });

    var logo = this.physics.add.image(400, 100, 'logo');

    // logo.setVelocity(100, 200);
    // logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    emitter.startFollow(logo);
    this.add.text(50, 50, 'My first phazer gaem lul (hover over doge');
    logo.setInteractive()
    logo.on('pointerover', () => { logo.destroy(); particles.destroy(); 
    
    
    
        var player = this.add.sprite(400,600, 'player');
        cursors = this.input.keyboard.createCursorKeys();
    
    });
}

function update() {
    if(cursors.right.isDown) {
    player.position.x += 1;
    }}