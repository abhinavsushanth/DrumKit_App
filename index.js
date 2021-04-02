// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick() {
//     alert("I just got clicked!");
// }

// document.querySelector("button").addEventListener("click", function handleClick() {
//     alert("I just got clicked!");
// });

// var drumButtons = document.querySelectorAll(".drum");

// for (var i = 0; i < drumButtons.length; i++) {
//     drumButtons[i].addEventListener("click", function() {
//         alert("I just got clicked!");
//     });
// }

// function add (n1, n2) {
//     return n1 + n2;
// }

// function multiply (n1, n2) {
//     return n1*n2;
// }

// function calculator (oper, n1, n2) {
//     console.log(oper(n1, n2));
// }

// calculator(add, 4, 5);
// calculator(multiply, 3, 5);

// var drumButtons = document.querySelectorAll(".drum");

// for (var i = 0; i < drumButtons.length; i++) {
//     drumButtons[i].addEventListener("click", function() {
//         this.style.color = 'white';
//     });
// }

// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();

// function CookGenerator (name, age, yoe, cuisines) {
//     this.name = name;
//     this.age = age;
//     this.yoe = yoe;
//     this.cuisines = cuisines;
// }

// cook_1 = new CookGenerator('Sam', 22, 5, ['elvish', 'hobbiton']);
// cook_2 = new CookGenerator('Gordon', 45, 20, ['American', 'Italian', 'Chinese']);

// console.log(cook_1);
// console.log(cook_2);

// Detecting Button Click

var drumButtons = document.querySelectorAll(".drum");

for (var i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener("click", function() {

        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });

}

// Detecting Keyboard Press

document.addEventListener("keydown", function(event) {

    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound (key) {
    switch (key) {
        case 'w':
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case 'a':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case 's':
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case 'd':
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case 'j':
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;                
        case 'k':
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case 'l':
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;

        default:
            break;
    }
}

function buttonAnimation(currentKey) {
    var currentButton = document.querySelector("." + currentKey);
    currentButton.classList.add("pressed");

    setTimeout(function() {
        currentButton.classList.remove("pressed");
    }, 100);
}