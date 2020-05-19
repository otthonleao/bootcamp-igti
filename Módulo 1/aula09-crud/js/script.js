//Carregar o js depois do HTML
window.addEventListener('load', start);

var globalNames = ['Um', 'Dois', 'Três', 'Quatro'];
var inputName = null;
var currentIndex = null;
var isEditing = false;

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
    render();
  }

  function updateName(newName) {
    globalNames[currentIndex] = NewName
    render();
  }

  function handleTyping(event) {
    var hasText
    if (event.key === 'Enter') {
      if (isEditing) {
        updateName(event.target.value);
      } else {
        insertName(event.target.value);
      }
      isEditing = false;
      clearInput();
    }
  }
  inputName.addEventListener('keyup', handleTyping);
  inputName.focus(); //Coloca oc cursor de digitação piscando
}

function render() {
  function createDeleteButton(index) {
    function deleteName() {
      globalNames.splice(index, 1);
      render();
    }
    var button = document.createElement('button');
    button.classList.add('deleteButton');
    button.textContent = 'x';
    button.addEventListener('Click', deleteName);
    return button;
  }

  function createSpan(name, index) {
    function editItem() {
      inputName.value = name;
      inputName.focus();
      isEditing = true;
      currentIndex = index;
    }
    var span = document.querySelector('span');
    span.classList.add('clickable');
    span.textContent = name;
    span.addEventListener('click', editItem);
    return span;
  }

  var divNames = document.querySelector('#names');
  divNames.innerHTML = '' // Para limpar o input após o enter

  var ul = document.createElement('ul');

  for (var i = 0; i < globalNames.length; i++) {
    var currentName = globalNames[i];

    var li = document.createElement('li');
    var button = document.createElement('button');
    var span = createSpan(currentName);
    button.textContent = 'x';

    var span = document.createElement('span');
    span.textContent = currentName;
    li.textContent = currentName;
    ul.appendChild(li);
  }
  divNames.appendChild(ul);
  clearInput();
}

function clearInput(){
  inputName.value = '';
  inputName.focus();
}
