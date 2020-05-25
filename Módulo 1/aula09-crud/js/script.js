//Carregar o js depois do HTML
window.addEventListener('load', start);

var globalNames = ['Um', 'Dois', 'Três', 'Quatro'];
var inputName = null; // Só declarei a variável pq não posso garantir que a página está carregada. Por isso declaro na função 'start()'
var isEditing = false;
var currentIndex = null;

function start() {
  console.log('start')
  inputName = document.querySelector('#inputName');
  preventFormSubmit();
  activeInput();
  // render();
}

// Impedir que a página recarregue após o 'enter'
function preventFormSubmit() {
  var form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit) // O evento acontece quando submeto o dado
    function handleFormSubmit(event) {
      event.preventDefault(); // preventDefault() impede que o evento padrão ocorra
      render();
  }
}

// Todas as ativações no input 
function activeInput() {
  inputName = document.querySelector('#inputName');
  inputName.focus() // Ativar o pisca de digitação no input quando a página for carregada

  // Inserção de novos nomes no vetor 'globalNames'
  inputName.addEventListener('keyup', handleTyping); // 'keyup' identifica quando soltamos o teclado após apertar uma tecla.

      function handleTyping(event) {
        var hasText = !!event.target.value && event.target.value.trim() !== '';
        if (!hasText) {
          clearInput();
          return;
        }
      if(event.key === 'Enter') { // Se a tecla identificada for 'Enter'
        if(isEditing) {
          updateName(event.target.value);
        } else {
          insertName(event.target.value); // Inserir o valor que foi digital no alvo (no input)
            function insertName(NewName) {
              globalNames.push(NewName); // Insere um novo valor/nome na array globalNames após o Enter
              console.log(globalNames);
              render();
        }
        isEditing = false;
      }
      function updateName(newName) {
        globalNames[currentIndex] = newName;
        render();
      }
    
    }
}


// Após inserir o valor, manipular o #names para inserir dinamicamente dentro da div
function render() {
  // Criando o Botão de exclusão
  function createDeleteButton(index) {
    var button = document.createElement('button');
    button.classList.add('deleteButton'); // Adicionando uma classe no CSS
    button.textContent = 'x';
    //criando a ação de deletar quando clicar no botão
    button.addEventListener('click', deleteName);
      function deleteName() {
        globalNames.splice(index, 1);
        render(); // Chama o render novamente para o JS saber
      }
    return button;
  }
  // Criando a Edição
  function createSpan(name, index) {
    var span = document.createElement('span');
    span.classList.add('clickable');
    span.textContent = name;
    //Quando clicar aparecer no input para editar
    span.addEventListener('click', editItem);
      function editItem(){
        inputName.value = name;
        inputName.focus();
        isEditing = true;
        currentIndex = index;
      }
    return span
  }

  var divNames = document.querySelector('#names');
  divNames.innerHTML = ''; // Após o 'Enter' retornar o input vazio
  var ul = document.createElement('ul'); // Criando uma 'ul' dentro da div
    
  for (var i = 0; i < globalNames.length; i++) {
    var currentName = globalNames[i]; // Colocando a automatização dentro da variável para não ficar repetindo
    var li = document.createElement('li');
    var button = createDeleteButton(i);
    var span = createSpan(currentName, i);
    

    li.appendChild(button);
    li.appendChild(span);

    ul.appendChild(li); // Criando um 'li' como filho da 'ul'
  }

  divNames.appendChild(ul); // Criando uma 'ul' como filho da 'div'
  clearInput();
}

function clearInput() {
  inputName.value = '';
  inputName.focus();
}
}