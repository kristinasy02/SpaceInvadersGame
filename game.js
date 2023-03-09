let invadersArray = document.getElementById('invadersArray');

// Here you are on a good path!
// Convert this to two phases:
// Load them in one array, where every one has an CSS id # in the INITALISATION PART OF THE GAME
// Then display them in a second cycle in the ACTION part of the GAME LOOP
let character1Array = [];
let character2Array = [];
let character2SecondArray = [];
let character3SecondArray = [];
let character3Array = [];
let y = 0;
// TODO
// See how you can get rid of this HTML
// Make it w/ JS
for (i = 0; i < 11; i++) {
    character1Array[i] = `<div class="character1"><img class="character1_spritesheet" src="img/spritesheet.png" alt="character1" width="1" height="1"><div>`;
    character2Array[i] = `<div class="character2"><img class="character2_spritesheet" src="img/spritesheet.png" alt="character2" width="1" height="1"><div>`;
    character2SecondArray[i] = `<div class="character2"><img class="character2_spritesheet" src="img/spritesheet.png" alt="character2" width="1" height="1"><div>`;
    character3Array[i] = `<div class="character3"><img class="character3_spritesheet" src="img/spritesheet.png" alt="character3" width="1" height="1"><div>`;
    character3SecondArray[i] = `<div class="character3"><img class="character3_spritesheet" src="img/spritesheet.png" alt="character3" width="1" height="1"><div>`;

}
let allInvaders = [];
allInvaders[0] = character1Array;
allInvaders[1] = character2Array;
allInvaders[2] = character2SecondArray;
allInvaders[3] = character3Array;
allInvaders[4] = character3SecondArray;
let invadersBody = document.getElementById('invadersBody');
let invaders = document.getElementById('invaders');
for (i = 0; i < allInvaders.length; i++) {
    var row = document.createElement('tr');
    row.classList.add('invadersRow');
    for (j = 0; j < allInvaders[i].length; j++) {
        var cell = document.createElement('cell');
        cell.innerHTML = allInvaders[i][j];
        row.appendChild(cell);
    }
    invadersBody.appendChild(row);
}
invaders.append(invadersBody);

let wall = document.getElementById("heroWalls3.pnf")
let wallState = [1, 2, 3, 4];
let invadersState = [
    "alive",
    "exploded",
    "destroyed"
];
let bullets = [];

var w = document.body.clientWidth;
let moveX = w/2 -7.5;
const speed = 10;

if (document.getElementById('hero').style.left == 0) {
    document.getElementById('hero').style.left = ((w / 2) - 7.5) + "px"
}


window.addEventListener("keydown", Control);
window.addEventListener("keyup", Shoot);

function Control() {
    let key = event.key;
    let hero = document.getElementById('hero')
    let position = document.getElementById('position')

    if (key == "ArrowLeft") {
        if (parseFloat(hero.style.left) < 540) return;
        moveX = (parseFloat(hero.style.left) - speed);
        hero.style.left = moveX + "px";
        position.innerHTML = "X:" + moveX;
    }
    else if (key == "ArrowRight") {
        if (parseFloat(hero.style.left) > 1090) return;
        moveX = (parseFloat(hero.style.left) + speed);
        hero.style.left = moveX + "px";
        position.innerHTML = "X: " + moveX;
    }
    else {
        hero.style.left = parseFloat(hero.style.left) + "px";
    }
}

function createBullet(x){
    let container = document.getElementById('center');
    let bullet = document.createElement('div');
    bullet.style.left=x;
    bullet.className = "bullet";
    bullet.id = "bullet";
    container.appendChild(bullet);
    bullets.push({bullet, x,y}) ;
}
function deleteBullet(bullets, bullet, $bullet){
    let container = document.getElementById('center');
    const index = bullets.indexOf(bullet);
    bullets.splice(index,1);
    container.removeChild($bullet);
  }
function updateBullet(){
    for(let bullet of bullets){
        bullet.y -= 2;
        if (bullet.y < -550){
            deleteBullet(bullets, bullet, bullet.bullet);
          }
        setPosition(bullet.bullet, bullet.x, bullet.y);
    }
}


function Shoot(){
    let key = event.key;
    if(key == " "){
        createBullet(moveX + 11.5);
    }
}

function setPosition(element, x, y) {
    element.style.transform = `translate(0px, ${y}px)`;
    element.style.left = x + 'px';
}
function update(){
    updateBullet()
    window.requestAnimationFrame(update);
  }
  update();
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