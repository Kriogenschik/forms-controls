//task1
let view = document.getElementById('view');

view.addEventListener("click", function() {
	let area = document.createElement('textarea');
	area.className = 'edit';
	area.value = view.innerHTML;

	area.addEventListener("keydown", function(e) {
		if (e.key == 'Enter') {
			this.blur();
		}
	});

	area.addEventListener("blur", function() {
		view.innerHTML = area.value;
		area.replaceWith(view);
	});

	view.replaceWith(area);
	area.focus();
})

//Task2
let table = document.getElementById('bagua-table');
let editingTd;

table.addEventListener("click", function(e) {
	let target = e.target.closest('td,.cancel,.ok');
	if(!target) return;
	console.log(target.className);
	if (target.className == 'cancel') {
		console.log(2);
    finishTdEdit(editingTd.elem, false);
  } else if (target.className == 'ok') {
		console.log(1);
    finishTdEdit(editingTd.elem, true);
		
  } else if (target.nodeName == 'TD') {
    if (editingTd) return; // уже редактируется

    makeTdEditable(target);
  }

})

function finishTdEdit(td, isOk) {
  if (isOk) {
    td.innerHTML = td.firstChild.value;
  } else {
    td.innerHTML = editingTd.data;
  }
  td.classList.remove('edit-td');
  editingTd = null;
}

function makeTdEditable(td) {
  editingTd = {
    elem: td,
    data: td.innerHTML
  };

  td.classList.add('edit-td');

  let textArea = document.createElement('textarea');
  textArea.style.width = td.clientWidth + 'px';
  textArea.style.height = td.clientHeight + 'px';
  textArea.className = 'edit-area';

  textArea.value = td.innerHTML;
  td.innerHTML = '';
  td.appendChild(textArea);
  textArea.focus();

  td.insertAdjacentHTML("beforeEnd",
    '<div class="edit-controls"><button class="cancel">CANCEL</button><button class="ok">OK</button></div>'
  );
}

//Task3

let mouse = document.getElementById('mouse');
mouse.tabIndex = 0;

mouse.addEventListener ('click', function() {
	posY = mouse.getBoundingClientRect().top;
	posX = mouse.getBoundingClientRect().left;
	mouse.style.position = "fixed";
	mouse.style.top = posY + "px";
	mouse.style.left = posX + "px";
})

mouse.addEventListener('keydown', function(e) {
	if (e.key == 'ArrowLeft') {
		mouse.style.left = mouse.getBoundingClientRect().left - 50 + 'px';
	} if (e.key == 'ArrowRight') {
		mouse.style.left = mouse.getBoundingClientRect().left + 50 + 'px';
	} if (e.key == 'ArrowUp') {
		mouse.style.top = mouse.getBoundingClientRect().top - 50 + 'px';
	} if (e.key == 'ArrowDown') {
		mouse.style.top = mouse.getBoundingClientRect().top + 50 + 'px';
	} else return;
})