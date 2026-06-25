// Name System 

let pet_name = document.getElementById("pet_name");
let dysp_pet_name = document.getElementById("dysp_pet_name");

pet_name.addEventListener("input", function() {
    dysp_pet_name.textContent = pet_name.value;
});





// Hunger system 

let hunger = 100; 
let progres_h = document.getElementById("progres_h");
let dog = document.getElementById("pet")


setInterval(function() {
    hunger = hunger - 5;

    if (hunger < 20) {
        dog.src = "cat_sad.png"
    }

    else if (hunger < 50){
        dog.src = "cat_normal.png"
    }

    else if (hunger < 100){
        dog.src = "cat_happy.png"
    }


    progres_h.style.width = hunger + "%";

}, 1000);



let steak = document.getElementById("steak");
let fish = document.getElementById("fish");
let chicken = document.getElementById("chicken");
let eggs = document.getElementById("eggs");
let ham = document.getElementById("ham");
let bread = document.getElementById("bread");
let bacon = document.getElementById("bacon");
let cheese = document.getElementById("cheese");
let pizza = document.getElementById("pizza");




function feedPet(amount) {
    let feedAmount = amount; 

    hunger = hunger + feedAmount;

    if (hunger > 100) {
        hunger = 100;
    }

    progres_h.style.width = hunger + "%";
}




steak.addEventListener("click", function() {
    feedPet(20);
});

fish.addEventListener("click", function() {
    feedPet(20);
});

chicken.addEventListener("click", function() {
    feedPet(20);
});

eggs.addEventListener("click", function() {
    feedPet(10);
});

ham.addEventListener("click", function() {
    feedPet(10);
});

bread.addEventListener("click", function() {
    feedPet(5);
});

bacon.addEventListener("click", function() {
    feedPet(15);
});

cheese.addEventListener("click", function() {
    feedPet(5);
});

pizza.addEventListener("click", function() {
    feedPet(1);
});