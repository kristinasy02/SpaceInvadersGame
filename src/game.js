let container1 = document.getElementById('container1');
    let container2 = document.getElementById('container2');
    let container3 = document.getElementById('container3');
    let container4 = document.getElementById('container4');
    let container5 = document.getElementById('container5');

    for(i = 0; i < 10; i++) {
        container1.innerHTML+=
        `<div class="character1"><img class="character1_spritesheet" src="/Users/kristinayordanova/Desktop/SpaceInvaders/img/spritesheet.png" alt="character1" width="1" height="1"></div>`;
        container2.innerHTML+=
        `<div class="character2"><img class="character2_spritesheet" src="/Users/kristinayordanova/Desktop/SpaceInvaders/img/spritesheet.png" alt="character2" width="1" height="1"><div>`;
        container3.innerHTML+=
        `<div class="character2"><img class="character2_spritesheet" src="/Users/kristinayordanova/Desktop/SpaceInvaders/img/spritesheet.png" alt="character2" width="1" height="1"><div>`;
        container4.innerHTML+=
        `<div class="character3"><img class="character3_spritesheet" src="/Users/kristinayordanova/Desktop/SpaceInvaders/img/spritesheet.png" alt="character3" width="1" height="1"></div>`;
        container5.innerHTML+=
        `<div class="character3"><img class="character3_spritesheet" src="/Users/kristinayordanova/Desktop/SpaceInvaders/img/spritesheet.png" alt="character3" width="1" height="1"></div>`;
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