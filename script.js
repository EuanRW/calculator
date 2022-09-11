//#region CALCULATOR FUNCTIONS
const add = function (a, b) {
    return Number(a) + Number(b);
};

const subtract = function (a, b) {
    return Number(a) - Number(b);
};

const multiply = function (array) {
    return array.length > 0 ? Number(array.reduce((a, b) => a * b)) : 0;
};

const power = function (a, b) {
    return a ** b;
};

const factorial = function (num) {
    {
        var rval = 1;
        for (var i = 2; i <= num; i++) rval = rval * i;
        return rval;
    }
};
//#endregion CALCULATOR FUNCTIONS

//#region OPERATION
function operate(num1, num2, operation) {
    if ((operation = "add")) {
        return add(num1, num2);
    }
}
//#endregion OPERATION

//#region DISPLAY
const screen = document.getElementById("screen");
let displayVal = "";
//#endregion DISPLAY

//#region NUMBER BUTTONS
function numberFormatter(numString) {
    //Check if number is not outside range of safest max value.
    if (numString < 2 ** 53) {
        return Number(numString)
            .toFixed(2)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
        return "ERROR";
    }
}

const zeroBtn = document.getElementById("zeroBtn");
zeroBtn.addEventListener("click", () => {
    console.log(displayVal);
    displayVal += "0";
    screen.innerText = numberFormatter(displayVal);
});

const oneBtn = document.getElementById("oneBtn");
oneBtn.addEventListener("click", () => {
    console.log(displayVal);
    displayVal += "1";
    screen.innerText = numberFormatter(displayVal);
});

const twoBtn = document.getElementById("twoBtn");
twoBtn.addEventListener("click", () => {
    console.log(displayVal);
    displayVal += "2";
    screen.innerText = numberFormatter(displayVal);
});

const threeBtn = document.getElementById("threeBtn");
threeBtn.addEventListener("click", () => {
    console.log(displayVal);
    displayVal += "3";
    screen.innerText = numberFormatter(displayVal);
});

const fourBtn = document.getElementById("fourBtn");
fourBtn.addEventListener("click", () => {
    console.log(displayVal);
    displayVal += "4";
    screen.innerText = numberFormatter(displayVal);
});

const fiveBtn = document.getElementById("fiveBtn");
fiveBtn.addEventListener("click", () => {
    console.log(displayVal);
    displayVal += "5";
    screen.innerText = numberFormatter(displayVal);
});

const sixBtn = document.getElementById("sixBtn");
sixBtn.addEventListener("click", () => {
    console.log(displayVal);
    displayVal += "6";
    screen.innerText = numberFormatter(displayVal);
});

const sevenBtn = document.getElementById("sevenBtn");
sevenBtn.addEventListener("click", () => {
    console.log(displayVal);
    displayVal += "7";
    screen.innerText = numberFormatter(displayVal);
});

const eightBtn = document.getElementById("eightBtn");
eightBtn.addEventListener("click", () => {
    console.log(displayVal);
    displayVal += "8";
    screen.innerText = numberFormatter(displayVal);
});

const nineBtn = document.getElementById("nineBtn");
nineBtn.addEventListener("click", () => {
    console.log(displayVal);
    displayVal += "9";
    screen.innerText = numberFormatter(displayVal);
});

let decimalState = false;
const pointBtn = document.getElementById("pointBtn");
pointBtn.addEventListener("click", () => {
    console.log(displayVal);
    if (decimalState == false) {
        displayVal += ".";
        screen.innerText = numberFormatter(displayVal);
        decimalState = true;
    } else {
        //Do nothing.
    }
});
//#endregion NUMBER BUTTONS

//#region ACTION BUTTONS
const ACBtn = document.getElementById("ACBtn");
ACBtn.addEventListener("click", () => {
    displayVal = "0";
    currentOperation = "";
    previousNumber = 0;
    Array.from(document.querySelectorAll(".activeAction")).forEach((el) =>
        el.classList.remove("activeAction")
    );
    screen.innerText = numberFormatter(displayVal);
});

function changeSign(numString) {
    console.log(numString);
    if (numString[0] == "-") {
        numString = numString.substring(1);
        return numString;
    } else {
        return "-" + numString;
    }
}

const signBtn = document.getElementById("signBtn");
signBtn.addEventListener("click", () => {
    displayVal = changeSign(displayVal);
    console.log(displayVal);
    screen.innerText = numberFormatter(displayVal);
});

function percentFormatter(numString) {
    //Check if number is not outside range of safest max value.
    if (numString < 2 ** 53) {
        return (Number(numString) / 100).toString();
    } else {
        return "ERROR";
    }
}
const percentBtn = document.getElementById("percentBtn");
percentBtn.addEventListener("click", () => {
    displayVal = percentFormatter(displayVal);
    console.log(displayVal);
    screen.innerText = numberFormatter(displayVal);
});
//#endregion ACTION BUTTONS

//#region OPERATION BUTTONS
let previousNumber = 0;
let currentNumber = 0;
let currentOperation = "";

const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", () => {
    if (currentOperation != "") {
        output = operate(
            previousNumber,
            numberFormatter(displayVal),
            currentOperation
        );
        displayVal = output;
        previousNumber = numberFormatter(displayVal);
        console.table({ previousNumber, displayVal, currentOperation });
        screen.innerText = numberFormatter(displayVal);
        displayVal = "";
    } else {
        previousNumber = numberFormatter(displayVal);
        displayVal = "";
    }

    addBtn.classList.add("activeAction");
    currentOperation = "add";
});

let output = 0;
const equalsBtn = document.getElementById("equalsBtn");
equalsBtn.addEventListener("click", () => {
    output = operate(
        previousNumber,
        numberFormatter(displayVal),
        currentOperation
    );

    displayVal = output;

    screen.innerText = numberFormatter(displayVal);

    Array.from(document.querySelectorAll(".activeAction")).forEach((el) =>
        el.classList.remove("activeAction")
    );

    currentOperation = "";
    console.table({ previousNumber, displayVal, currentOperation });
});
//#endregion OPERATION BUTTONS
