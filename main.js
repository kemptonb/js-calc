const screen = document.getElementById("screen");
screen.textContent = 0;

let a = 0;
let b = 0;





//button functions
const one = document.querySelector('#one');
one.addEventListener('click', () => {
    screen.textContent = 1;

});

const two = document.querySelector('#two');
two.addEventListener('click', () => {
    screen.textContent = 2;
});

const three = document.querySelector('#three');
three.addEventListener('click', () => {
    screen.textContent = 3;
});

const four = document.querySelector('#four');
four.addEventListener('click', () => {
    screen.textContent = 4;
});

const five = document.querySelector('#five');
five.addEventListener('click', () => {
    screen.textContent = 5;
});

const six = document.querySelector('#six');
six.addEventListener('click', () => {
    screen.textContent = 6;
});

const seven = document.querySelector('#seven');
seven.addEventListener('click', () => {
    screen.textContent = 7;
});

const eight = document.querySelector('#eight');
eight.addEventListener('click', () => {
    screen.textContent = 8;
});

const nine = document.querySelector('#nine');
nine.addEventListener('click', () => {
    screen.textContent = 9;
});

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    screen.textContent = 0;
});




//operate function
function operate (x, operator, y){
//make switch for opperator execute?

    //math operators
    function mult(a, b) {
        return a * b;
    }

    function div(a, b) {
        return a / b;
    }

    function add(a, b) {
        return a + b;
    }

    function sub(a, b) {
        return a - b;
    }

}//end operate

