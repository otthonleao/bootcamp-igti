window.addEventListener('load', function() {
  const timer = document.querySelector('#timer');
  let count = 0;

  const interval = setInterval(() => {
    timer.textContent = ++count;
    // Contar até 10
    if (count === 10) { 
      this.clearInterval(interval); // quando chegar em 10, para
      return; // e sai da função
    }

    if (count % 5 === 0) {
      this.setTimeout(() => { // Em espera para ser executado
        timer.textContent = count + ',5'; // quando o número for divisível por 5 acrescenta ,5
      }, 500); // o incremento do ',5' será de meio segundo
    }
  }, 1000); // contagem a cada 1s
})
