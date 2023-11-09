

const btnAdd = document.querySelector('[data-addition]');
const lblOutput = document.querySelector ('#output');

function add(){

let number1 =  parseInt (document.getElementById("number1").value);
let number2 =  parseInt (document.getElementById("number2").value);

let sum = number1 + number2;

lblOutput.textContent =sum
}   

btnAdd.addEventListener('click',add)