// Função recursiva
function primosRecursivo(n) {
    // Verifica se o input é válido
    if (n < 2) {
      console.log("Erro: N deve ser maior que 1.");
      return null;
    }
    // Cria um array vazio para armazenar os primos
    var primos = [];
    // Define uma função auxiliar para verificar se um número é primo
    function isPrime(k) {
      // Casos base: 2 e 3 são primos
      if (k == 2 || k == 3) {
        return true;
      }
      // Caso geral: verifica se k é divisível por algum número menor que ele
      for (var i = 2; i < k; i++) {
        if (k % i == 0) {
          return false;
        }
      }
      return true;
    }
    // Define uma função auxiliar para encontrar os primos até n usando recursividade
    function findPrimes(m) {
      // Caso base: se m for menor que 2, termina a recursão
      if (m < 2) {
        return;
      }
      // Caso geral: se m for primo, adiciona ao array e chama a função novamente com m-1
      if (isPrime(m)) {
        primos.push(m);
        findPrimes(m - 1);
      } else {
        // Se m não for primo, chama a função novamente com m-1
        findPrimes(m - 1);
      }
    }
    // Chama a função auxiliar com n como argumento
    findPrimes(n);
    // Retorna o array de primos em ordem crescente
    return primos.reverse();
  }
  
  // Função linear
  function primosLinear(n) {
    // Verifica se o input é válido
    if (n < 2) {
      console.log("Erro: N deve ser maior que 1.");
      return null;
    }
    // Cria um array vazio para armazenar os primos
    var primos = [];
    // Percorre os números de 2 até n com um laço
    for (var i = 2; i <= n; i++) {
      // Assume que i é primo inicialmente
      var primo = true;
      // Verifica se i é divisível por algum número menor que ele
      for (var j = 2; j < i; j++) {
        if (i % j == 0) {
          // Se i for divisível por j, significa que não é primo e muda a variável para false
          primo = false;
          break;
        }
      }
      // Se i for primo, adiciona ao array
      if (primo) {
        primos.push(i);
      }
    }
    // Retorna o array de primos
    return primos;
  }
  
  // Testa as funções com alguns valores de N
  console.log(primosRecursivo(2)); // Deve imprimir [2]
  console.log(primosRecursivo(3)); // Deve imprimir [2,3]
  console.log(primosRecursivo(10)); // Deve imprimir [2,3,5,7]
  console.log(primosRecursivo(1)); // Deve imprimir "Erro: N deve ser maior que 1."
  
  console.log(primosLinear(2)); // Deve imprimir [2]
  console.log(primosLinear(3)); // Deve imprimir [2,3]
  console.log(primosLinear(10)); // Deve imprimir [2,3,5,7]
  console.log(primosLinear(1)); // Deve imprimir "Erro: N deve ser maior que 1."
  