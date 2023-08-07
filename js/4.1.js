//task1
let genres = document.getElementById('genres');
let choise = document.getElementById('choise');

let newOption = new Option("Классика", "classic", true, true);
genres.append(newOption);

function showChoose() {
	let selectedOption = genres.options[genres.selectedIndex];
	choise.innerHTML = "";
	choise.innerHTML = `выбран пункт(${selectedOption.value}, ${selectedOption.text})`;
}

genres.addEventListener('change', showChoose);