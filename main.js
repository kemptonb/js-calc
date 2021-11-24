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
let equalsOp;

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
    if(num == undefined){
        num = 0;
        screen.textContent = num;
    }  else if(num[1] == "."){
        console.log(num[0]);
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

const plusMinus = document.querySelector('#plusMinus');
plusMinus.addEventListener('click', () => {
    if (num != undefined) {
        if (num[0] == "-") {
            num = num.slice(1);
            screen.textContent = num;
        } else {
            num = "-" + num;
            screen.textContent = num;
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
    let placeNumBool = true;
    answer = undefined;
    equalsOp = undefined;
});

const times = document.querySelector('#times');
times.addEventListener('click', () => {
    placeNum();
    equalsOp = "*";
    if (Boolean(placeNumBool) && b != undefined) {
        operator = "*";
        operate(operator);
    }

});

const divide = document.querySelector('#divide');
divide.addEventListener('click', () => {
    placeNum();
    equalsOp = "/";
    if (Boolean(placeNumBool) && b != undefined) {
        operator = "/";
        operate(operator);
    }
});

const plus = document.querySelector('#plus');
plus.addEventListener('click', () => {
    placeNum(); 
    equalsOp = "+";
    if (Boolean(placeNumBool) && b != undefined) {
        operator = "+";
        operate(operator);
    }
});


const minus = document.querySelector('#minus');
minus.addEventListener('click', () => {
    placeNum();
    equalsOp = "-";
    if (Boolean(placeNumBool) && b != undefined) {
        return operator = "-";
        operate(operator);
    }
});

const equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    placeNum();
    if (Boolean(placeNumBool) && b != undefined) {
        operate(equalsOp);
    }
});





//operate function
function operate(oper) {
    //make switch for opperator execute?
    switch (oper) {
        //math operators
        case '*':
            answer = parseInt(a) * parseInt(b);
            screen.textContent = answer;
            a = answer;
            b = undefined;
            num = undefined;
            break;

        case '/':
            answer = parseInt(a) / parseInt(b);
            screen.textContent = answer;
            a = answer;
            b = undefined;
            num = undefined;
            break;

        case '+':
            answer = parseInt(a) + parseInt(b);
            screen.textContent = answer;
            a = answer;
            b = undefined;
            num = undefined;
            break;

        case '-':
            answer = parseInt(a) - parseInt(b);
            screen.textContent = answer;
            a = answer;
            b = undefined;
            num = undefined;
            break;
    }//end switch

}//end operate


function store(digit) {
    if (num == undefined) {
        return num = digit;

    } else {
        return num += digit;
    }
}


function placeNum() {
    if (a == undefined) {
        a = num;
        num = undefined;
        placeNumBool = false;
    } else if (b == undefined) {
        b = num;
        placeNumBool = true;
    }
}

