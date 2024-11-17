// Math functions
function add(x, y) {
    return x + y;
}
function sub(x, y) {
    return x - y;
}
function mul(x, y) {
    return x * y;
}
function div(x, y) {
    return x / y;
}
function square(x) {
    return x * x;
}
// Determine what math function to execute
function eval(x, y, op) {
    if (op === "+") {
        return add(x, y);
    }
    if (op === "-") {
        return sub(x, y);
    }
    if (op === "*") {
        return mul(x, y);
    }
    if (op === "/") {
        return div(x, y);
    }
    if (op === "=") {
        if (y == 0)
            return x;
        else return y;
    }
    if (op == "2") { // For calculating square of a number
        return square(x);
    }
}

// Entry point
function setUp() {
    var inputNum = 0;
    var result = 0;
    var operator = "+";
    var lastKey = "0"; 
    var hasDecimal = false;
    var decimalMult = 10; 
    var decimalPlaces = 0;

    var displayBtm = document.getElementById("bottom");
    var displayTop = document.getElementById("top");

    // Gets all the number keys and sets events
    var numPads = document.getElementsByClassName("number");
    for (let i = 0; i < numPads.length; i++){
        numPads[i].addEventListener("click", () => {
            var value = parseInt(numPads[i].getAttribute("data-num"));
            
            if (hasDecimal) {
                if (value === 100) {
                    inputNum += (0 / decimalMult);
                    decimalMult *= 10;
                    value = 0;
                    decimalPlaces++;
                }
                inputNum += (value/decimalMult);
                decimalMult *= 10;
                decimalPlaces++;
            } else {
                if (value === 100) {
                    inputNum *= 10;
                    value = 0;
                }
                inputNum *= 10;
                inputNum += value;
            }
            displayBtm.innerHTML = inputNum.toFixed(decimalPlaces);
            lastKey = value;
            var clickSound = document.getElementById("myAudio");
            clickSound.currentTime = 0;
            clickSound.play();
        })
    }
    // for decimal numbers
    var decimalNum = document.getElementById("decimal");
    decimalNum.addEventListener("click", () => {
        if (hasDecimal === false) {
            hasDecimal = true;
            displayBtm.innerHTML = inputNum + ".";
        }
    });
    // Operations (using buttons) evaluation
    var addOp = document.getElementById("plus");
    addOp.addEventListener("click", () => {
        hasDecimal = false;
        decimalMult = 10;
        decimalPlaces = 0;
        if (!isNaN(lastKey)) {
            if (inputNum == 0 && operator == "/") {
                displayBtm.innerHTML = "Can not divide by zero";
            }
            else {
                result = eval(result, inputNum, operator);
                displayBtm.innerHTML = result;
                inputNum = 0;
            }
        }
        operator = "+";
        displayTop.innerHTML = result + operator;
        lastKey = operator;
    });
    var subOp = document.getElementById("sub");
    subOp.addEventListener("click", () => {
        hasDecimal = false;
        decimalMult = 10;
        decimalPlaces = 0;
        if (!isNaN(lastKey)) {
            if (inputNum == 0 && operator == "/") {
                displayBtm.innerHTML = "Can not divide by zero";
            }
            else {
                result = eval(result, inputNum, operator);
                displayBtm.innerHTML = result;
                inputNum = 0;
            }
        }
        operator = "-";
        displayTop.innerHTML = result + operator;
        lastKey = operator;
    });
    var mulOp = document.getElementById("mul");
    mulOp.addEventListener("click", () => {
        hasDecimal = false;
        decimalMult = 10;
        decimalPlaces = 0;
        if (!isNaN(lastKey)) {
            if (inputNum == 0 && operator == "/") {
                displayBtm.innerHTML = "Can not divide by zero";
            }
            else {
                result = eval(result, inputNum, operator);
                displayBtm.innerHTML = result;
                inputNum = 0;
            }
        }
        operator = "*";
        displayTop.innerHTML = result + operator;
        lastKey = operator;
    });
    var divOp = document.getElementById("div");
    divOp.addEventListener("click", () => {
        hasDecimal = false;
        decimalMult = 10;
        decimalPlaces = 0;
        if (!isNaN(lastKey)) {
            if (inputNum == 0 && operator == "/") {
                displayBtm.innerHTML = "Can not divide by zero";
            } else {
                result = eval(result, inputNum, operator);
                displayBtm.innerHTML = result;
                inputNum = 0;
            }
        }
        operator = "/";
        displayTop.innerHTML = result + operator;
        lastKey = operator;
    });
    var squareOp = document.getElementById("square");
    squareOp.addEventListener("click", () => {
        hasDecimal = false;
        decimalMult = 10;
        decimalPlaces = 0;
        if (!isNaN(lastKey)) {
            if (inputNum == 0 && operator == "/") {
                displayBtm.innerHTML = "Can not divide by zero";
            } else {
                result = eval(result, inputNum, operator);
                displayBtm.innerHTML = result;
                inputNum = 0;
            }
        }
        operator = "2";
        displayTop.innerHTML = result + "<sup>" + operator + "</sup>";
        lastKey = operator;
    });
    // CE operation
    var ceOp = document.getElementById("ce");
    ceOp.addEventListener("click", () => {
        hasDecimal = false;
        decimalMult = 10;
        decimalPlaces = 0;
        inputNum = 0;
        result = 0;
        operator = "+";
        lastKey = "0";
        displayTop.innerHTML = "";
        displayBtm.innerHTML = "";
    });
    // DEL operation
    var delOp = document.getElementById("del");
    delOp.addEventListener("click", () => {
        hasDecimal = false;
        decimalMult = 10;
        decimalPlaces = 0;
        inputNum = 0;
        lastKey = operator;
        displayBtm.innerHTML = inputNum;
    });
    // EQUAL operation
    var equalOp = document.getElementById("equal");
    equalOp.addEventListener("click", () => {
        hasDecimal = false;
        decimalMult = 10;
        decimalPlaces = 0;
        var pres = result;
        if (inputNum == 0 && operator == "/")
            displayBtm.innerHTML = "Can not divide by zero";
        else {
            result = eval(result, inputNum, operator);
            if (operator === "=")
                displayTop.innerHTML = result;
            else {
                if (operator === "2")
                    displayTop.innerHTML = pres + "<sup>" + operator + "</sup>";
                else
                    displayTop.innerHTML = pres + operator + inputNum;
            }

            displayBtm.innerHTML = result;
            operator = "=";
            inputNum = 0;
            // result = 0;
        }
    });
}

// Calling the main function to start the script
window.onload = function () {
    setUp();
}