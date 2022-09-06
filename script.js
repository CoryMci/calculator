function add(a, b) {
    return parseInt(a) + parseInt(b);
}

function subtract(a, b) {
    return parseInt(a) - parseInt(b);
}

function multiply(a, b) {
    return parseInt(a) * parseInt(b);
}

function divide(a, b) {
    return parseInt(a) / parseInt(b);
}

function operate(target) { //logs operator pressed and first operand, then resets current number.
    operatorPressed = target.item(1);
    console.log(operatorPressed);
    firstOperand = screenNum;
    screenNum = " 0";
    console.log(firstOperand);
}

function equals() { //logs current number on screen as second operand, applies operation
    secondOperand = screenNum;
    if (operatorPressed == 'add'){
        console.log('add');
        screenNum = add(firstOperand, secondOperand);
    } else if (operatorPressed == 'subtract') {
        console.log('subtract');
        screenNum = subtract(firstOperand, secondOperand);
    } else if (operatorPressed == 'multiply') {
        console.log('multiply');
        screenNum = multiply(firstOperand, secondOperand);
    } else if (operatorPressed == 'divide') {
        console.log('divide');
        screenNum = divide(firstOperand, secondOperand);
    }
    refresh(screenNum);
    console.log("first: " + firstOperand); //debug
    console.log("second: " + secondOperand); //debug
    operatorPressed = "none";
    firstOperand = screenNum;
}

function clear() {
    screenNum = " 0";
    operatorPressed = "none"
    firstOperand = screenNum;
    secondOperand = screenNum;
    refresh(screenNum);
}

function refresh(strNum) {
    strNum = strNum.toString();
    if (strNum.length > 10) {
        strNum = strNum.substring(0,10);
    }
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
let secondOperand = screenNum;

let buttons = document.querySelectorAll('button'); //supplies functions to buttons
buttons.forEach(button => {
    button.addEventListener('click', (e)=> {

        let classes = e.target.classList;
        console.log(classes);
        if (classes.contains('num')){
            console.log('debug: num pressed!'); //debug
            digit(classes)
        } else if (classes.contains('op')){
            console.log('debug: op pressed!'); //debug
            operate(classes);
        } else if (classes.contains('equals')){
            console.log('debug: = pressed!'); //debug
            equals();
        } else if (classes.contains('clear')){
            console.log('debug: clear pressed!'); //debug
            clear();
        } else {
            console.log('debug: error, unkown class'); //debug
            console.log(classes); //debug
        }
    })
})