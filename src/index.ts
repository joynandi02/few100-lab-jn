import './styles.css';
console.log('Ready to Party');

const numberInput: HTMLInputElement = <HTMLInputElement>document.getElementById("bill");

const billAmount: HTMLInputElement = <HTMLInputElement>document.getElementById("billAmount");
const tipPercentage: HTMLInputElement = <HTMLInputElement>document.getElementById("tipPercentage");
const tipAmount: HTMLInputElement = <HTMLInputElement>document.getElementById("tipAmount");
const totalAmount: HTMLInputElement = <HTMLInputElement>document.getElementById("totalAmount");
const tipText: HTMLInputElement = <HTMLInputElement>document.getElementById("tip");

const radios = document.querySelectorAll('input[type="radio"]');
radios.forEach(s => s.addEventListener('click', calculate))


function calculate() {
    const label = this as HTMLInputElement;
    const tipInput: string = label.value;

    const numberinputString = numberInput.value;
    const cost = parseFloat(numberinputString);

    const tip = cost * parseFloat(tipInput);
    const total = cost + tip;

    billAmount.innerText = billAmount.innerText + " $" + numberInput.value;
    tipPercentage.innerText = tipPercentage.innerText + " " + (parseFloat(tipInput) * 100) + "%";
    tipAmount.innerText = tipAmount.innerText + " $" + tip.toString();
    totalAmount.innerText = totalAmount.innerText + " $" + total.toString();
    tipText.innerText = tipText.innerText + " " + (parseFloat(tipInput) * 100) + "%";
}