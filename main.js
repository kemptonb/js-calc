const screen = document.getElementById("screen");
screen.textContent = 0;

let a;
let b;
let operator;
let num;
let digit;
let dotBool = true;
let placeNumBool = true;
let answer;

//button functions
const one = document.querySelector('#one');
one.addEventListener('click', () => {
    digit = "1";
    store(digit);
    screen.textContent = num;
});

const two = document.querySelector('#two');
two.addEventListener('click', () => {
    digit = "2";
    store(digit);
    screen.textContent = num;
});

const three = document.querySelector('#three');
three.addEventListener('click', () => {
    digit = "3";
    store(digit);
    screen.textContent = num;
});

const four = document.querySelector('#four');
four.addEventListener('click', () => {
    digit = "4";
    store(digit);
    screen.textContent = num;
});

const five = document.querySelector('#five');
five.addEventListener('click', () => {
    digit = "5";
    store(digit);
    screen.textContent = num;
});

const six = document.querySelector('#six');
six.addEventListener('click', () => {
    digit = "6";
    store(digit);
    screen.textContent = num;
});

const seven = document.querySelector('#seven');
seven.addEventListener('click', () => {
    digit = "7";
    store(digit);
    screen.textContent = num;
});

const eight = document.querySelector('#eight');
eight.addEventListener('click', () => {
    digit = "8";
    store(digit);
    screen.textContent = num;
});

const nine = document.querySelector('#nine');
nine.addEventListener('click', () => {
    digit = "9";
    store(digit);
    screen.textContent = num;
});

const zero = document.querySelector('#zero');
zero.addEventListener('click', () => {
    if (num != undefined) {
        digit = "0";
        store(digit);
        screen.textContent = num;
    }
});

const dot = document.querySelector('#dot');
dot.addEventListener('click', () => {
    if (num != undefined) {
        if (Boolean(dotBool)) {
            digit = ".";
            store(digit);
            screen.textContent = num;
            dotBool = false;
        }
    }
});

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    screen.textContent = 0;
    a = undefined;
    b = undefined;
    operator = undefined;
    num = undefined;
    digit = undefined;
    dotBool = true;
    answer = undefined;
});

const times = document.querySelector('#times');
times.addEventListener('click', () => {
    placeNum();
    operator = "*";
    console.log(operator);
    if (Boolean(placeNumBool)){
        answer = parseInt(a) * parseInt(b);
        screen.textContent = answer;
    }
    
});

const divide = document.querySelector('#divide');
divide.addEventListener('click', () => {
    placeNum();
    operator = "/";
    console.log(operator);
});

const plus = document.querySelector('#plus');
plus.addEventListener('click', () => {
    placeNum();
    operator = "+";
    console.log(operator);
});


const minus = document.querySelector('#minus');
minus.addEventListener('click', () => {
    placeNum();
    operator = "-";
    console.log(operator);
});

const equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    console.log("a: " + a);
    console.log("b: " + b);
    console.log(placeNumBool);
});





//operate function
function operate() {
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


function store(digit) {
    if (num == undefined) {
        return num = digit;

    } else {
        return num += digit;
    }
}

function placeNum(){
    if(a == undefined){
    a = num;
    num = undefined;
    screen.textContent = 0;
    placeNumBool = false;
    }else if (b == undefined){
        b = num;
        placeNumBool = true;
    }
}