function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(target) { //logs operator pressed and first operand, then resets current number.
    operatorPressed = target.item(1);
    console.log(operatorPressed);
    firstOperand = screenNum;
    screenNum = " 0";
    console.log(firstOperand);
}

function refresh(strNum) {
    document.querySelector('.screen').textContent = strNum
}

function digit(target) {
    let numPressed = target.item(1);
    if (screenNum == " 0") {
        screenNum = numPressed;
    } else {
        screenNum = "" + screenNum + numPressed;
    }
    refresh(screenNum);
}

let screenNum = " 0";
let operatorPressed = "none"
let firstOperand = screenNum;

let buttons = document.querySelectorAll('button'); //supplies functions to buttons
buttons.forEach(button => {
    button.addEventListener('click', (e)=> {

        let classes = e.target.classList;
        console.log(classes);
        if (classes.contains('num')){
            console.log('debug: num pressed!');
            digit(classes)
        } else if (classes.contains('op')){
            console.log('debug: op pressed!');
            operate(classes);
        } else if (classes.contains('equals')){
            console.log('debug: = pressed!');
        } else if (classes.contains('clear')){
            console.log('debug: clear pressed!');
        } else {
            console.log('debug: error, unkown class');
            console.log(classes);
        }
    })
})

console.log('yo');