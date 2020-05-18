//Carregar o js depois do HTML
window.addEventListener('load', start);

var globalNames = ['Um', 'Dois', 'Três', 'Quatro'];
var inputName = null;

function start() {
  inputName = document.querySelector('#input');
  preventFormSubmit();
  activateInput();
  render();
}

function preventFormSubmit() {
  function handleFormSubmit(event) {
    event.preventDefault();
  }
  var form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
}

function activateInput() {
  function insertName(newName) {
    globalNames.push(newName);
    console.log(globalNames);
  }

  function handleTyping(event) {
    if (event.key === 'Enter') {
      insertName(event.target.value);
    }
  }
  inputName.addEventListener('keyup', handleTyping);
  inputName.focus(); //Coloca oc cursor de digitação piscando
}

function render() {
  var divNames = document.querySelector('#names');

  var ul = document.createElement('ul');

  for (var i = 0; i < globalNames.length; i++) {
    var currentName = globalNames[i];
    var li = document.createElement('li');
    li.textContent = currentName;
    ul.appendChild(li);
  }
  divNames.appendChild(ul);
}
