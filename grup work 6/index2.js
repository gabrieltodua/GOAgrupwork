let cell1 = document.getElementById("cell-0");
let cell2 = document.getElementById("cell-1");
let cell3 = document.getElementById("cell-2");
let cell4 = document.getElementById("cell-3");
let cell5 = document.getElementById("cell-4");
let cell6 = document.getElementById("cell-5");
let cell7 = document.getElementById("cell-6");
let cell8 = document.getElementById("cell-7");
let cell9 = document.getElementById("cell-8");

let p1 = document.getElementById("p1_cell-0");
let p2 = document.getElementById("p1_cell-1");
let p3 = document.getElementById("p1_cell-2");
let p4 = document.getElementById("p1_cell-3");
let p5 = document.getElementById("p1_cell-4");
let p6 = document.getElementById("p1_cell-5");
let p7 = document.getElementById("p1_cell-6");
let p8 = document.getElementById("p1_cell-7");
let p9 = document.getElementById("p1_cell-8");

let win_sound_effect = new Audio("Victory Sound Effect.mp3");

let money_count = document.getElementById("money_1");

let turn = document.getElementById("turn");
let reset = document.getElementById("reset");

let currentPlayer = "X";
let gameActive = true;
let money = 0;

// CHECK WIN

function check() {

    let win = false;

    if (p1.textContent !== "" && p1.textContent === p2.textContent && p1.textContent === p3.textContent){
        win = true;
    } 
    if (p4.textContent !== "" && p4.textContent === p5.textContent && p4.textContent === p6.textContent){
        win = true;
    } 
    if (p7.textContent !== "" && p7.textContent === p8.textContent && p7.textContent === p9.textContent){
        win = true;
    }

    if (p1.textContent !== "" && p1.textContent === p4.textContent && p1.textContent === p7.textContent){
        win = true;
    }
    if (p2.textContent !== "" && p2.textContent === p5.textContent && p2.textContent === p8.textContent){
        win = true;
    } 
    if (p3.textContent !== "" && p3.textContent === p6.textContent && p3.textContent === p9.textContent){
        win = true;
    } 

    if (p1.textContent !== "" && p1.textContent === p5.textContent && p1.textContent === p9.textContent){
        win = true;
    } 
    if (p3.textContent !== "" && p3.textContent === p5.textContent && p3.textContent === p7.textContent){
        win = true;
    } 



    if (win === true) {
        turn.textContent = "Player " + currentPlayer + " Wins!";
            
        win_sound_effect.play();
        win_sound_effect.volume = 0.5;

        gameActive = false;

        if (currentPlayer === "X") {
            money = money + 10;
        } else {
            money = money - 5;
        }
        money_count.textContent = "Money: " + money;
    }

    if (
        p1.textContent !== "" &&
        p2.textContent !== "" &&
        p3.textContent !== "" &&
        p4.textContent !== "" &&
        p5.textContent !== "" &&
        p6.textContent !== "" &&
        p7.textContent !== "" &&
        p8.textContent !== "" &&
        p9.textContent !== "" &&
        gameActive === true
    ){
        turn.textContent = "Draw!";
        gameActive = false;
    }
}


function play(event) { 

    if (event.textContent === "" && gameActive === true) {


        event.textContent = currentPlayer;


        if (currentPlayer === "X") {

            event.style.color = "red"; 

        } else {
            event.style.color = "blue";
        }

        check();

        if (gameActive === true) {

            if (currentPlayer === "X") {
                currentPlayer = "O";
            } else {
                currentPlayer = "X";
            }

            turn.textContent = "Turn: " + currentPlayer;
        }
    }
}



cell1.addEventListener("click", function () {
    play(p1);
});

cell2.addEventListener("click", function () {
    play(p2);
});

cell3.addEventListener("click", function () {
    play(p3);
});

cell4.addEventListener("click", function () {
    play(p4);
});

cell5.addEventListener("click", function () {
    play(p5);
});

cell6.addEventListener("click", function () {
    play(p6);
});

cell7.addEventListener("click", function () {
    play(p7);
});

cell8.addEventListener("click", function () {
    play(p8);
});

cell9.addEventListener("click", function () {
    play(p9);
});



reset.addEventListener("click", function () {

    p1.textContent = "";
    p2.textContent = "";
    p3.textContent = "";
    p4.textContent = "";
    p5.textContent = "";
    p6.textContent = "";
    p7.textContent = "";
    p8.textContent = "";
    p9.textContent = "";

    currentPlayer = "X";
    gameActive = true;

    turn.textContent = "Turn: " + currentPlayer;
});

