let keys = document.querySelector(".keys");
let key = document.querySelectorAll(".key");
let screen = document.querySelector(".screen");

let num1 = "";
let num2 = "";
let symbol = '#';


keys.addEventListener("click", (evt) => {
    if (evt.target == keys) {
        return;
    }

    if (evt.target.innerText == "AC") {
        num1 = "";
        num2 = "";
        symbol = '#';
        screen.innerText = "0";
        return;
    }
    if (evt.target.innerText == "C") {
        num1 = "";
        num2 = "";
        symbol = '#';
        screen.innerText = "0";
        return;
    }

    if (evt.target.innerText == "=") {
        if (symbol == '#' || num2 == "") {
            screen.innerText = "NULL";
            num1 = "";
            num2 = "";
            symbol = '#';
            return;
        }

        num1 = operate(num1, num2, symbol);
        num2 = "";
        symbol = '#';
        screen.innerText = num1;
        return;
    }

    //check for symbols; 
    if (isSymbol(evt.target.innerText)) {
        if (num1 == "") {
            return;
        }
        if (num2 != "") {
            num1 = operate(num1, num2, symbol);
            num2 = "";
            symbol = evt.target.innerText;
            screen.innerText = `${num1}${symbol}`;
            return;
        }

        symbol = evt.target.innerText;
        screen.innerText = `${num1}${symbol}`;
        return;
    }

    if (symbol == '#') {
        num1 += evt.target.innerText;
        screen.innerText = num1;
    } else {
        num2 += evt.target.innerText;
        screen.innerText = `${num1}${symbol}${num2}`;
    }

});

function isSymbol(El) {
    return (El == '%' || El == '/' || El == '*' || El == '-' || El == '+');
}

function operate(num1, num2, symbol) {
    let a = parseFloat(num1);
    let b = parseFloat(num2);
    let result;

    if (symbol == '+') {
        result = a + b;
    } else if (symbol == '-') {
        result = a - b;
    } else if (symbol == '*') {
        result = a * b;
    } else if (symbol == '/') {
        if (b == 0) {
            return "awww";
        }
        result = a / b;
    } else if (symbol == '%') {
        if (b == 0) {
            return "awww";
        }
        result = a % b;
    } else {
        return "NULL";
    }

    return Math.round(result * 100) / 100;
}