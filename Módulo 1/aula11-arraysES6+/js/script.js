window.addEventListener('load', () => {
  doMap();
  doFilter();
  doForEach();
  doReduce();
  doFind();
  doSome();
  doEvery();
  doSort();
  doSortCrescente();
})

// Transformar array em objeto com nome e email
function doMap() {
  const nameEmailArray = people.results.map(person => {
    return {
      name: person.name,
      email: person.email
    };
  })
  console.log('nameEmailArray com a função doMap()');
  console.log(nameEmailArray);
  return nameEmailArray;
}

// Filtrando os objetos que são maiores de 50 anos
function doFilter() {
  const olderThan50 = people.results.filter(person => {
    return person.dob.age > 50;
  });
  console.log('olderThan50 com a função doFilter()');
  console.log(olderThan50);
}

// Incluir nova propriedade no objeto. Atuando em cima do vetor
function doForEach() {
  const mappedPeople = doMap();
  mappedPeople.forEach(person => {
    person.nameSize =
      person.name.title.length +
      person.name.first.length +
      person.name.last.length;
  });
  console.log('mappedPeople com a função doForEach');
  console.log(mappedPeople);
}

// Somar as idades
function doReduce() {
  const totalAges = people.results.reduce((accumulator, current) => {
    return accumulator + current.dob.age;
  }, 0);
  console.log(`Somatório das idades com doReduce() é:`);
  console.log(totalAges);
}
// É a mesma coisa se tivessemos feito por repetição
// let sumAges = 0;
// for(let i = 0; i < people.results.length; i++) {
//   var current = people.results[i];
//   sumAges += current.dob.age;
// }
// console.log(`Somatório das idades com for é: ${sumAges}`);

// Retorna o objeto que está sendu buscado. Exemplo buscando o Estado Minas gerais
function doFind() {
  const found = people.results.find(person => {
    return person.location.state === 'Minas Gerais';
});
  console.log(`O primeiro usuário da lista do Estado MG é: ${found}`)
  console.log(found)
}

// Retorna True or False.Ex. buscando se há Amazonas
function doSome() {
  const found = people.results.some(person => {
    return person.location.state === 'Amazonas';
  })
  console.log('Usando o doSome() para saber se há algum obejto que tenha o Estado como Amazonas');
  console.log(found);
}

// Todos os objetos são do mesmo valor? Ex. Todos os "nat" são "BR"
function doEvery() {
  const every = people.results.every(person => {
    return person.nat === 'BR';
  })
  console.log('Usando o doEvery() pra saber se todos tem o mesmo valor');
  console.log(every);
}

// Sort = Ordenção conforme for especificado. Ex. Por ordem alfabética
function doSort() {
  const mappedNames = people.results
    .map(person => {
      return person.name.first; // Selecionando somente o firstName de todos os objetos
  })
  .filter(person => person.startsWith('A')) // Filtrar somente o que iniciar com A
  .sort(); // Ordenar todos firstName iniciados com A por ordem alfabética
  console.log('Nomes iniciados com A, ordenados por ordem alfabética por meio do doSort()');
  console.log(mappedNames);
}


// Sort = Ordenação por número de caracteres
function doSortCrescente() {
  const mappedNames = people.results
    .map(person => {
    return {
      name: person.name.first
    }; // Selecionando somente o firstName de todos os objetos
  })
  .filter(person => person.name.startsWith('A')) // Filtrar somente o que iniciar com A
  .sort((a, b) => {
    return a.name.length - b.name.length; // Ordem Crescente. Para ser descrescente é b-a
  }); // Ordenar todos firstName iniciados com A por ordem alfabética
  console.log('Nomes iniciados com A, ordenados por ordem crescente do nº de caracteres por meio do doSortCrescente(a, b)');
  console.log(mappedNames);
}

