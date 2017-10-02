class Entity {
    constructor(sprite, x, y) {
        this.sprite = sprite;
        this.x = this.startX = x;
        this.y = this.startY = y;
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    reset() {
        this.x = this.startX;
        this.y = this.startY;
    }
}

class Enemy extends Entity {
    constructor(sprite, x, y, speed) {
        super(sprite, x, y);
        this.speed = speed;
    }

    update(dt) {
        // Parameter: dt, a time delta between ticks
        // multiply any movement by the dt parameter which
        // will ensure the game runs at the same speed for
        // all computers.
        if (this.x > 505) {
            this.x = -1 * this.speed * dt;
        } else {
            this.x += 1 * this.speed * dt;
        }
    }
}

class Player extends Entity {
    constructor(sprite, x, y, height) {
        super(sprite, x, y, height);
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

let en1 = new Enemy('images/enemy-bug.png', -10, 146, 50);
let en2 = new Enemy('images/enemy-bug.png', -10, 230, 100);
let en3 = new Enemy('images/enemy-bug.png', -10, 60, 150);
let en4 = new Enemy('images/enemy-bug.png', 240, 60, 150);
let en5 = new Enemy('images/enemy-bug.png', 390, 60, 150);
let en6 = new Enemy('images/enemy-bug.png', 140, 230, 400);
let allEnemies = [en1, en2, en3, en4, en5, en6];

let player = new Player('images/char-boy.png', 200, 405);

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
