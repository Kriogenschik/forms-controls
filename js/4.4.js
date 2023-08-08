//Task1

let showBtn = document.getElementById('show-button');
let modal = document.getElementById('prompt-form-container');
let form = document.getElementById('prompt-form');

showBtn.addEventListener('click', function() {
	showModal(function(value) {
		alert("Вы ввели: " + value);
	});
})

function showModal(callback) {
	modal.hidden = false;
	document.body.classList.add('no-scroll');
	form.text.value = '';
	form.text.focus();

	form.addEventListener('submit', function() {
		let value = form.text.value;
		if (value == '') return;
		hideModal();
		callback(value);
	})

	form.cancel.onclick = function() {
		hideModal();
		callback(null);
	}

	document.onkeydown = function(e) {
		if (e.key == 'Escape') {
			hideModal();
			callback(null);
		}
	};
}

function hideModal() {
	modal.hidden = true;
	document.body.classList.remove('no-scroll');
}