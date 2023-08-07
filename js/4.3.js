//task1

let form = document.forms.calculator;

let moneyBefore = document.getElementById('money-before');
let moneyAfter = document.getElementById('money-after');

form.money.oninput = calculate;
form.months.onchange = calculate;
form.interest.oninput = calculate;

function calculate () {
	moneyBefore.innerHTML = form.money.value;
	moneyAfter.innerHTML =  Math.round(form.money.value * (1 + form.months.value * 0.01) ** (form.interest.value / 12));
	document.getElementById('height-after').style.height = moneyAfter.innerHTML / form.money.value * 100 + 'px';
}

calculate();