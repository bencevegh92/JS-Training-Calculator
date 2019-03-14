const zero = 0;
const one = 1;
const two = 2;
const three = 3;
const four = 4;
const five = 5;
const six = 6;
const seven = 7;
const eight = 8;
const nine = 9;

const plus = "+";
const minus = "-";
const multiply = "*";
const degree = "/";
const decimal = ".";

var currentValue = "";

/* ---------- Display Numbers ---------- */

document.getElementById("zero").addEventListener("click", storeData);
function storeData() {
    currentValue += zero;

    document.querySelector(".calculator__display").innerHTML = currentValue;
    // document.querySelector(".calculator__display").innerHTML = zero;
}
document.getElementById("one").addEventListener("click", displayOne);
function displayOne() {
    currentValue += one;
    document.querySelector(".calculator__display").innerHTML = currentValue;
}
document.getElementById("two").addEventListener("click", displaytwo);
function displaytwo() {
    currentValue += two;
    document.querySelector(".calculator__display").innerHTML = currentValue;
}
document.getElementById("three").addEventListener("click", displaythree);
function displaythree() {
    currentValue += three;
    document.querySelector(".calculator__display").innerHTML = currentValue;
}
document.getElementById("four").addEventListener("click", displayfour);
function displayfour() {
    currentValue += four;
    document.querySelector(".calculator__display").innerHTML = currentValue;
}
document.getElementById("five").addEventListener("click", displayfive);
function displayfive() {
    currentValue += five;
    document.querySelector(".calculator__display").innerHTML = currentValue;
}
document.getElementById("six").addEventListener("click", displaysix);
function displaysix() {
    currentValue += six;
    document.querySelector(".calculator__display").innerHTML = currentValue;
}
document.getElementById("seven").addEventListener("click", displayseven);
function displayseven() {
    currentValue += seven;
    document.querySelector(".calculator__display").innerHTML = currentValue;
}
document.getElementById("eight").addEventListener("click", displayeight);
function displayeight() {
    currentValue += eight;
    document.querySelector(".calculator__display").innerHTML = currentValue;
}
document.getElementById("nine").addEventListener("click", displaynine);
function displaynine() {
    currentValue += nine;
    document.querySelector(".calculator__display").innerHTML = currentValue;
}

/* ---------- Display Operators ---------- */

document.getElementById("plus").addEventListener("click", displayplus);
function displayplus() {
    currentValue += plus;
    document.querySelector(".calculator__display").innerHTML = currentValue;
}
document.getElementById("minus").addEventListener("click", displayminus);
function displayminus() {
    currentValue += minus;
    document.querySelector(".calculator__display").innerHTML = currentValue;
}
document.getElementById("multiple").addEventListener("click", displaymultiple);
function displaymultiple() {
    currentValue += multiply;
    document.querySelector(".calculator__display").innerHTML = currentValue;
}
document.getElementById("degree").addEventListener("click", displaydegree);
function displaydegree() {
    currentValue += degree;
    document.querySelector(".calculator__display").innerHTML = currentValue;
}
document.getElementById("decimal").addEventListener("click", displaydecimal);
function displaydecimal() {
    currentValue += decimal;
    document.querySelector(".calculator__display").innerHTML = currentValue;
}
document.getElementById("restore").addEventListener("click", displayrestore);
function displayrestore() {
    currentValue = 0;
    document.querySelector(".calculator__display").innerHTML = currentValue;
}

/* ---------- Calculate ---------- */

document.querySelector(".key--equal").addEventListener("click", equal);
function equal() {
    currentValue = eval(currentValue);
    document.querySelector(".calculator__display").innerHTML = currentValue;
}