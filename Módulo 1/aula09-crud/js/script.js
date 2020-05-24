//Carregar o js depois do HTML
window.addEventListener('load', start);

var globalNames = ['Um', 'Dois', 'Três', 'Quatro'];
var inputName = null; // Só declarei a variável pq não posso garantir que a página está carregada. Por isso declaro na função 'start()'

function start() {
  console.log('start')
  preventFormSubmit();
  activeInput();
  
}

// Impedir que a página recarregue após o 'enter'
function preventFormSubmit() {
  var form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit) // O evento acontece quando submeto o dado
    function handleFormSubmit(event) {
      event.preventDefault(); // preventDefault() impede que o evento padrão ocorra
  }
}

// Todas as ativações no input 
function activeInput() {
  inputName = document.querySelector('#inputName');
  inputName.focus() // Ativar o pisca de digitação no input quando a página for carregada

  // Inserção de novos nomes no vetor 'globalNames'
  inputName.addEventListener('keyup', handleTyping); // 'keyup' identifica quando soltamos o teclado após apertar uma tecla.
    function handleTyping(event) {
      if(event.key === 'Enter') { // Se a tecla identificada for 'Enter'
        insertName(event.target.value); // Inserir o valor que foi digital no alvo (no input)
          function insertName(NewName) {
            globalNames.push(NewName); // Insere um novo valor/nome na array globalNames após o Enter
            console.log(globalNames);
          }
      }
    }
}

// Após inserir o valor, manipular o #names para inserir dinamicamente dentro da div
function render() {
  
}
