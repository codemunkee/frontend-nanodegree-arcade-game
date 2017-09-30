class Entity {
    constructor(sprite, x, y, height) {
        this.sprite = sprite;
        this.x = x;
        this.y = y;
        this.height = height;
        console.log(this.sprite, this.x, this.y);
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

class Enemy extends Entity {
    constructor(sprite, x, y, height, speed) {
        super(sprite, x, y, height);
        this.speed = speed;
    }

    update(dt) {
        // dt  // Parameter: dt, a time delta between ticks
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
        if (this.x > 505) {
            this.x = -1 * this.speed;
        } else {
            this.x += 1 * this.speed;
        }
    }
}
class Player extends Entity {
    constructor(sprite, x, y, height) {
        super(sprite, x, y, height);
    }

    update(dt) {
    }

    handleInput(keyCode) {
        switch (keyCode) {
            case 'down':
                this.y = (this.y < 405) ? this.y += 83 : this.y;
                break;
            case 'up':
                this.y = (this.y > -10) ? this.y -= 83 : this.y;
                break;
            case 'left':
                this.x = (this.x > -2) ? this.x -= 101: this.x;
                break;
            case 'right':
                this.x = (this.x < 302) ? this.x += 101: this.x;
                break;
        }
    }
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

let en1 = new Enemy('images/enemy-bug.png', -10, 145, 100, 2);
//let en2 = new Enemy('images/enemy-bug.png', -10, 230, 1.2);
//let en3 = new Enemy('images/enemy-bug.png', -10, 180, 4);
//let en4 = new Enemy('images/enemy-monster.png', -10, 130, 6);
let allEnemies = [en1];

let player = new Player('images/char-boy.png', 200, 405, 100);


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
