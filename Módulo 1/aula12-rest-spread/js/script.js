window.addEventListener('load', () => {
  doSpread();
  doRest();
  doDestructuring();
});

// Spread '...': pega as arrays espalhadas e junta em uma unica
function doSpread() {
  const marriedMen = people.results.filter(
    person => person.name.title === 'Mr' // Pegando todos que tem Mr antes do nome: array1
  );
  console.log('Todos os gêneros masculinos casados')
  console.log(marriedMen); // 53

  const marriedWomen = people.results.filter(
    person => person.name.title === 'Ms' // array2
  );
  console.log('Todos os gêneros femininos casados');
  console.log(marriedWomen); // 16

  // array3 que contém a array1 + array2 + um índice criado
  const marriedPeople = [...marriedMen, ...marriedWomen, {msg: 'Oi'}];
  console.log('Nova array contatenando a array1 + array2 + um indice criado');
  console.log(marriedPeople) // 70 = 53 + 16 + 1
}

// Soma infinita
function doRest() {
  function infiniteSum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0)
  }
  console.log(infiniteSum(1,2));
  console.log(infiniteSum(1000, 2000, 2000, 500));
}

// Destructuring pra pehar o primeiro username e password
function doDestructuring() {
  const first = people.results[0];
  // Repetitivo
  // const username = first.login.username;
  // const password = first.login.password;

  //Usando destructuring
  const {username, password} = first.login;
  console.log('Feito com destructuring');
  console.log(username);
  console.log(password);
}
