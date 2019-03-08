import './styles.css';
console.log('Ready to Party');

const radios = document.querySelectorAll('input[type="radio"]');
console.log(radios)
radios.forEach(s => s.addEventListener('click', calculate))


const numberInput: HTMLInputElement = <HTMLInputElement>document.getElementById("bill");
const tipInput: HTMLInputElement = <HTMLInputElement>document.getElementById("option1");

const billAmount: HTMLInputElement = <HTMLInputElement>document.getElementById("billAmount");
const tipPercentage: HTMLInputElement = <HTMLInputElement>document.getElementById("tipPercentage");
const tipAmount: HTMLInputElement = <HTMLInputElement>document.getElementById("tipAmount");
const totalAmount: HTMLInputElement = <HTMLInputElement>document.getElementById("totalAmount");

function calculate() {
    const numberinputString = numberInput.value;
    const cost = parseFloat(numberinputString);
    const tip = cost * parseFloat(tipInput.value);
    const total = cost + tip;

    billAmount.innerText = billAmount.innerText + " " + numberInput.value;
    tipPercentage.innerText = tipPercentage.innerText + " " + tipInput.value;
    tipAmount.innerText = tipAmount.innerText + " " + tip.toString();
    totalAmount.innerText = totalAmount.innerText + " " + total.toString();
}