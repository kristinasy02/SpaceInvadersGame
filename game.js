    let container1 = document.getElementById('container1');
    let container2 = document.getElementById('container2');
    let container3 = document.getElementById('container3');
    let container4 = document.getElementById('container4');
    let container5 = document.getElementById('container5');

    // Here you are on a good path!
    // Convert this to two phases:
    // Load them in one array, where every one has an CSS id # in the INITALISATION PART OF THE GAME
    // Then display them in a second cycle in the ACTION part of the GAME LOOP

    for(i = 0; i < 10; i++) {
        container1.innerHTML+=
        `<div class="character1"><img class="character1_spritesheet" src="img/spritesheet.png" alt="character1" width="1" height="1"></div>`;
        container2.innerHTML+=
        `<div class="character2"><img class="character2_spritesheet" src="img/spritesheet.png" alt="character2" width="1" height="1"><div>`;
        container3.innerHTML+=
        `<div class="character2"><img class="character2_spritesheet" src="img/spritesheet.png" alt="character2" width="1" height="1"><div>`;
        container4.innerHTML+=
        `<div class="character3"><img class="character3_spritesheet" src="img/spritesheet.png" alt="character3" width="1" height="1"></div>`;
        container5.innerHTML+=
        `<div class="character3"><img class="character3_spritesheet" src="img/spritesheet.png" alt="character3" width="1" height="1"></div>`;
    }

var moveX = 0;
const speed = 10;
var w = document.body.clientWidth;
console.log(w)

if (document.getElementById('hero').style.left == 0) {
    document.getElementById('hero').style.left = ((w/2) - 7.5) + "px"
}

window.addEventListener("keydown", Control);

function Control() {
    let key = event.key;
    let hero = document.getElementById('hero')
    let position = document.getElementById('position')

        if(key == "ArrowLeft") {
            if (parseFloat (hero.style.left) < 260) return;
            moveX = (parseFloat (hero.style.left) - speed);
            hero.style.left = moveX + "px";
            position.innerHTML = "X:" + moveX;
            console.log(position.innerHTML)
        }
        else if (key == "ArrowRight") {
            if (parseFloat (hero.style.left) > 830) return;
            moveX = (parseFloat (hero.style.left) + speed);
            hero.style.left = moveX + "px";
            position.innerHTML = "X: " + moveX;
        }
        else
        {
            hero.style.left = parseFloat (hero.style.left) + "px";
        }
}

// INITIALISATION
// Generate the array w/ the invaders.
//   cycle through the rows
//   cycle through the columns
//   assign an actor, coordinates and CSS id to each array element

// GAME LOOP

// STATE
// Have or get the current state of all actors.

// BULLET
// Is there a bullet?
// What are its coordinates?

// BRAINS

// BULLET
// We move it (speed).
// Collision detection.
//   Requires a full array w/ all invaders.

// ACTION
// Display everything including the movements.