// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';


    this.x = x;
    this.y = y;

    this.speed = speed;     // Speed
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed * dt;

    // TODO: player collision
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// This is us.
var Player = function(x, y) {
    this.sprite = 'images/char-horn-girl.png';

    this.x = x;
    this.y = y;

    this.deltaX = 70
    this.deltaY = 70
};

// Handle collisions here.
Player.prototype.update = function() {
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) {
    switch(key) {
    case 'up': 
        console.log("PLayer moved up!");
        this.y -= this.deltaY;
        break;
    case 'left': 
        this.x -= this.deltaX;
        console.log("PLayer moved left!");
        break;
    case 'down': 
        this.y += this.deltaY;
        console.log("PLayer moved down!");
        break;
    case 'right': 
        this.x += this.deltaX;
        console.log("PLayer moved right!");
        break;
    default:
        break;
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var player = new Player(100, 100);

var allEnemies = [];
allEnemies.push(new Enemy(0, 60, 20));
allEnemies.push(new Enemy(0, 140, 20));
allEnemies.push(new Enemy(0, 220, 20));


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
