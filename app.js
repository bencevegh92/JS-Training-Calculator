'use strict';

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

let currentValue = "";

/* ---------- Generate Calculator HTML ---------- */

const calculatorMarkup = `
    <div class="calculator__bg">
            <div class="calculator__display">
                ${zero}
            </div>
        </div>
        <div class="calculator__keys" id="calculator__keys">
            <button id="plus" class="calculator__buttons key--operator">${plus}</button>
            <button id="minus" class="calculator__buttons key--operator">${minus}</button>
            <button id="multiple" class="calculator__buttons key--operator">${multiply}</button>
            <button id="degree" class="calculator__buttons key--operator">${degree}</button>
            <button id="seven" class="calculator__buttons">${seven}</button>
            <button id="eight" class="calculator__buttons">${eight}</button>
            <button id="nine" class="calculator__buttons">${nine}</button>
            <button id="four" class="calculator__buttons">${four}</button>
            <button id="five" class="calculator__buttons">${five}</button>
            <button id="six" class="calculator__buttons">${six}</button>
            <button id="one" class="calculator__buttons">${one}</button>
            <button id="two" class="calculator__buttons">${two}</button>
            <button id="three" class="calculator__buttons">${three}</button>
            <button id="zero" class="calculator__buttons">${zero}</button>
            <button id="decimal" class="calculator__buttons">${decimal}</button>
            <button id="restore" class="calculator__buttons">AC</button>
            <button class="calculator__buttons key--equal" data-action="calculate">=</button>
        </div>`;

document.querySelector('.calculator').innerHTML = calculatorMarkup;

/* ---------- Display Numbers ---------- */

let displayZero = () => currentValue += zero; document.querySelector(".calculator__display").innerHTML = currentValue;

document.getElementById("zero").addEventListener("click", displayZero);

let displayOne = () =>  {
    currentValue += one;
    document.querySelector(".calculator__display").innerHTML = currentValue;
};
document.getElementById("one").addEventListener("click", displayOne);


let displaytwo = ()  =>{
    currentValue += two;
    document.querySelector(".calculator__display").innerHTML = currentValue;
};
document.getElementById("two").addEventListener("click", displaytwo);

let displaythree = () => {
    currentValue += three;
    document.querySelector(".calculator__display").innerHTML = currentValue;
};
document.getElementById("three").addEventListener("click", displaythree);

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

/* ---------- Calculate ---------- */

function equal() {
    currentValue = eval(currentValue);
    document.querySelector(".calculator__display").innerHTML = currentValue;
}
document.querySelector(".key--equal").addEventListener("click", equal);

/* ---------- Default ---------- */

document.getElementById("restore").addEventListener("click", displayRestore);
function displayRestore() {
    currentValue = 0;
    document.querySelector(".calculator__display").innerHTML = currentValue;
}