// guss the cup game
let b1 = document.getElementById("b1");

let b2 = document.getElementById("b2");

let b3 = document.getElementById("b3");

let img1 = document.getElementById("img1");

let img2 = document.getElementById("img2");

let img3 = document.getElementById("img3");

let ball1 = document.getElementById("ball1");

let ball2 = document.getElementById("ball2");

let ball3 = document.getElementById("ball3");

let p = document.getElementById("status");

let money = document.getElementById("money");

let money_1 = document.getElementById("money_1");

let status_1 = document.getElementById("status_1");

let win_sound_effect = new Audio("Victory Sound Effect.mp3");

let moneyValue = 0;

let cups = [b1, b2, b3];


let random = Math.floor(Math.random() * cups.length);


let winningCup = cups[random];


b1.addEventListener("click", function() {

    if (winningCup === b1) {
        p.textContent = "You win!";
        moneyValue += 10;
        money.textContent = `money : ${moneyValue}`;
        
        random = Math.floor(Math.random() * cups.length);

        winningCup = cups[random];

        let position = 0;

        function move() {

            img1.style.marginTop = position + 'px';

            if (position <= -500) {
                ball1.style.fontSize = "0px";
                ball1.innerHTML = "";
                clearInterval(timer); 
                img1.style.marginTop = "0px";
            }
            position -= 10;
        }

        win_sound_effect.play();
        win_sound_effect.volume = 0.5;
        
        let timer = setInterval(move, 20); 
        ball1.style.fontSize = "100px";
        ball1.innerHTML = "⚽️";
    } else {
        moneyValue -= 5;
        money.textContent = `money : ${moneyValue}`;
        p.textContent = "Wrong cup!";
    }
});

b2.addEventListener("click", function() {
    if (winningCup === b2) {
        p.textContent = "You win!";
        moneyValue += 10;
        money.textContent = `money : ${moneyValue}`;

        random = Math.floor(Math.random() * cups.length);
        winningCup = cups[random];

        let position = 0;

        function move() {
            img2.style.marginTop = position + 'px';
            if (position <= -500) {
                ball2.style.fontSize = "0px";
                ball2.innerHTML = "";
                clearInterval(timer);
                img2.style.marginTop = "0px";
            }
            position -= 10;
        }

        win_sound_effect.play();
        win_sound_effect.volume = 0.5;
        let timer = setInterval(move, 20);
        ball2.style.fontSize = "100px";
        ball2.innerHTML = "⚽️";
    } else {
        moneyValue -= 5;
        money.textContent = `money : ${moneyValue}`;
        p.textContent = "Wrong cup!";
    }
});

b3.addEventListener("click", function() {
    if (winningCup === b3) {
        p.textContent = "You win!";
        moneyValue += 10;
        money.textContent = `money : ${moneyValue}`;
        
        random = Math.floor(Math.random() * cups.length);
        winningCup = cups[random];

        let position = 0;

        function move() {
            img3.style.marginTop = position + 'px';
            if (position <= -500) {
                ball3.style.fontSize = "0px";
                ball3.innerHTML = "";
                clearInterval(timer);
                img3.style.marginTop = "0px";
            }
            position -= 10;
        }

        win_sound_effect.play();
        win_sound_effect.volume = 0.5;
        let timer = setInterval(move, 20);
        ball3.style.fontSize = "100px";
        ball3.innerHTML = "⚽️";
    } else {
        moneyValue -= 5;
        money.textContent = `money : ${moneyValue}`;
        p.textContent = "Wrong cup!";
    }
});