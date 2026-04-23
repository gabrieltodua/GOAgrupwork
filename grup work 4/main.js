let count = document.getElementById("count");

let upgradeDisplay = document.getElementById("count1");

let nextUpgrade = document.getElementById("count2");

let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");
let p4 = document.getElementById("p4");
let p5 = document.getElementById("p5");
let p6 = document.getElementById("p6");
let p7 = document.getElementById("p7");
let p8 = document.getElementById("p8");
let p9 = document.getElementById("p9");
let p10 = document.getElementById("p10");
let p11 = document.getElementById("p11");
let p12 = document.getElementById("p12");
let p13 = document.getElementById("p13");

let coinlevel = 1;
let upl = 0;

nextUpgrade.textContent = "Coins to upgrade: 100";






function plus() {
  count.textContent = Number(count.textContent) + coinlevel;
}

function minus() {
  count.textContent = Number(count.textContent) - 1;
}

function zero() {
  count.textContent = 0;
}

function upgrade() {
  if (Number(count.textContent) >= 100 && upl == 0) {
    coinlevel += 1;
    count.textContent = Number(count.textContent) - 100;
    upl++;
  } else if (Number(count.textContent) >= 500 && upl == 1) {
    coinlevel += 5;
    count.textContent = Number(count.textContent) - 500;
    upl++;
  } else if (Number(count.textContent) >= 2000 && upl == 2) {
    coinlevel += 10;
    count.textContent = Number(count.textContent) - 2000;
    upl++;
  } else if (Number(count.textContent) >= 10000 && upl == 3) {
    coinlevel += 50;
    count.textContent = Number(count.textContent) - 10000;
    upl++;
  } else if (Number(count.textContent) >= 100000 && upl == 4) {
    coinlevel += 100;
    count.textContent = Number(count.textContent) - 100000;
    upl++;
  } else if (Number(count.textContent) >= 1000000 && upl == 5) {
    coinlevel += 1000;
    count.textContent = Number(count.textContent) - 1000000;
    upl++;
  } else if (Number(count.textContent) >= 1000000000 && upl == 6) {
    coinlevel += 10000;
    count.textContent = Number(count.textContent) - 1000000000;
    upl++;
  }


  upgradeDisplay.textContent = "upgrade: " + upl;


  if (upl == 0) nextUpgrade.textContent = "Coins to upgrade: 100";
  else if (upl == 1) nextUpgrade.textContent = "Coins to upgrade: 500";
  else if (upl == 2) nextUpgrade.textContent = "Coins to upgrade: 2000";
  else if (upl == 3) nextUpgrade.textContent = "Coins to upgrade: 10000";
  else if (upl == 4) nextUpgrade.textContent = "Coins to upgrade: 100000";
  else if (upl == 5) nextUpgrade.textContent = "Coins to upgrade: 1000000";
  else if (upl == 6) nextUpgrade.textContent = "Coins to upgrade: 1000000000";
  else nextUpgrade.textContent = "Max upgrade reached!";


}


function buy1() {
  if (Number(count.textContent) >= 5) {
    count.textContent = Number(count.textContent) - 5;
    alert("You bought an average burger🍔🍔");
    p1.textContent = "with 5 coins u can buy a average burger🍔🍔 status : ✅";
    
  }
  else {
    alert("Not enough coins!");
  }
}


function buy2() {
  if (Number(count.textContent) >= 10) {
    count.textContent = Number(count.textContent) - 10;
    alert("You bought an good burger🍔🍔");
    p2.textContent = "with 10 coins u can buy a good burger🍔🍔 status : ✅";
    
  }
  else {
    alert("Not enough coins!");
  }
}

function buy3() {
  if (Number(count.textContent) >= 100) {
    count.textContent = Number(count.textContent) - 100;
    alert("You bought an watch⌚⌚");
    p3.textContent = "with 100 coins u can buy a watch⌚⌚ status : ✅";
    
  }
  else {
    alert("Not enough coins!");
  }
}


function buy4() {
  if (Number(count.textContent) >= 500) {
    count.textContent = Number(count.textContent) - 500;
    alert("You bought an average phone📱📱");
    p4.textContent = "with 500 coins u can buy a average phone📱📱 status : ✅";
    
  }
  else {
    alert("Not enough coins!");
  }
}


function buy5() {
  if (Number(count.textContent) >= 1200) {
    count.textContent = Number(count.textContent) - 1200;
    alert("You bought an new iphone📱📱📱📱📱");
    p5.textContent = "with 1,200 coins u can buy a new iphone📱📱📱 status : ✅";
    
  }
  else {
    alert("Not enough coins!");
  }
}

function buy6() {
  if (Number(count.textContent) >= 3000) {
    count.textContent = Number(count.textContent) - 3000;
    alert("You bought an good laptop💻💻");
    p6.textContent = "with 3,000 coins u can buy a good laptop💻💻 status : ✅";
  }  else {
    alert("Not enough coins!");
  }
}
function buy7() {
  if (Number(count.textContent) >= 6000) {
    count.textContent = Number(count.textContent) - 6000;
    alert("You bought an pc💻");
    p7.textContent = "with 6,000 coins u can buy a pc💻 status : ✅";
  }  else {
    alert("Not enough coins!");
  }
}
function buy8() {
  if (Number(count.textContent) >= 10000) {
    count.textContent = Number(count.textContent) - 10000;
    alert("You bought an car🚗🚗");
    p8.textContent = "with 10,000 coins u can buy a car🚗🚗 status : ✅";
  }  else {
    alert("Not enough coins!");
  }
}
function buy9() {
  if (Number(count.textContent) >= 20000) {
    count.textContent = Number(count.textContent) - 20000;
    alert("You bought an truck🛻🛻");
    p9.textContent = "with 20,000 coins u can buy a truck🛻🛻 status : ✅";
  }  else {
    alert("Not enough coins!");
  }
}
function buy10() {
  if (Number(count.textContent) >= 100000) {
    count.textContent = Number(count.textContent) - 100000;
    alert("You bought an tesla");
    p10.textContent = "with 100,000 coins u can buy a 🚗🚗🚗 status : ✅";
  }  else {
    alert("Not enough coins!");
  }
}
function buy11() {
  if (Number(count.textContent) >= 250000) {
    count.textContent = Number(count.textContent) - 250000;
    alert("You bought an average house🏠🏠");
    p11.textContent = "with 250,000 coins u can buy a average house🏠🏠 status : ✅";
  }  else {
    alert("Not enough coins!");
  }
}
function buy12() {
  if (Number(count.textContent) >= 1000000) {
    count.textContent = Number(count.textContent) - 1000000;
    alert("You bought an very good house🏠🏠");
    p12.textContent = "with 1,000,000 coins u can buy a very good house🏠🏠 status : ✅";
  }  else {
    alert("Not enough coins!");
  }
}
function buy13() {
  if (Number(count.textContent) >= 10000000) {
    count.textContent = Number(count.textContent) - 10000000;
    alert("You bought an mansion🏠🏠🏠🏠🏠");
    p13.textContent = "with 10,000,000 coins u can buy a mansion🏠🏠🏠🏠🏠 status : ✅";
  }  else {
    alert("Not enough coins!");
  }
}


