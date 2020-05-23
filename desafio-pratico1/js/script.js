window.addEventListener('load', start);

function start() {
  var rangeRed = document.querySelector('#range-red');
  var rangeGreen = document.querySelector('#range-green');
  var rangeBlue = document.querySelector('#range-blue');
  
  var display = document.getElementById('display');

  // Escala das cores conectando o range com o input number
  function colorScaleRed() {
    var nRed = document.querySelector("#n-red");
    nRed.value = this.value;
    handleColor()
  }

  function colorScaleGreen() {
    var nGreen = document.querySelector("#n-green");
    nGreen.value = this.value;
    handleColor()
  }

  function colorScaleBlue() {
    var nBlue = document.querySelector("#n-blue");
    nBlue.value = this.value;
    handleColor()
    console.log(nBlue)
  }

  // Dinâmica no display
  function handleColor() {
    display.style.backgroundColor = `rgb(${rangeRed.value},${rangeGreen.value},${rangeBlue.value})`

    // Dinâmica no body
    var body = document.querySelector('#body');
    body.style.background = `rgb(${rangeRed.value},${rangeGreen.value},${rangeBlue.value})`
  }

  rangeRed.addEventListener('input', colorScaleRed);
  rangeGreen.addEventListener('input', colorScaleGreen);
  rangeBlue.addEventListener('input', colorScaleBlue);

}

