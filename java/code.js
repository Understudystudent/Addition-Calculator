

const btnAdd = document.querySelector('[data-addition]');
const lblOutput = document.querySelector ('#output');

function add(){

let number1 =  document.getElementById("number1").value;
let number2 =  document.getElementById("number2").value;

let sum = eval(`${number1} + ${number2}`);

lblOutput.textContent =sum
}   

btnAdd.addEventListener('click',add)

// console.log(window);