// Função recursiva
function fibonacciRecursivo(n) {
  // Verifica se o input é válido
  if (n < 0) {
    console.log("Erro: N deve ser maior ou igual a zero.");
    return null;
  }
  // Casos base: F(0) = 0 e F(1) = 1
  if (n <= 1) {
    return n;
  }
  // Caso geral: F(n) = F(n-1) + F(n-2)
  else {
    return fibonacciRecursivo(n-1) + fibonacciRecursivo(n-2);
  }
}

// Função linear
function fibonacciLinear(n) {
  // Verifica se o input é válido
  if (n < 0) {
    console.log("Erro: N deve ser maior ou igual a zero.");
    return null;
  }
  // Casos base: F(0) = 0 e F(1) = 1
  if (n <= 1) {
    return n;
  }
  // Caso geral: F(n) = F(n-1) + F(n-2)
  else {
    // Inicializa as variáveis a e b com os dois primeiros termos
    let a = 0;
    let b = 1;
    // Repete n-1 vezes o laço
    for (let i = 2; i <= n; i++) {
      // Calcula o próximo termo da sequência
      let c = a + b;
      // Atualiza as variáveis a e b
      a = b;
      b = c;
    }
    // Retorna o último termo calculado
    return b;
  }
}

// Testa as funções com alguns valores de N
console.log(fibonacciRecursivo(0)); // Deve imprimir 0
console.log(fibonacciRecursivo(1)); // Deve imprimir 1
console.log(fibonacciRecursivo(5)); // Deve imprimir 5
console.log(fibonacciRecursivo(10)); // Deve imprimir 55
console.log(fibonacciRecursivo(-3)); // Deve imprimir "Erro: N deve ser maior ou igual a zero."

console.log(fibonacciLinear(0)); // Deve imprimir 0
console.log(fibonacciLinear(1)); // Deve imprimir 1
console.log(fibonacciLinear(5)); // Deve imprimir 5
console.log(fibonacciLinear(10)); // Deve imprimir 55
console.log(fibonacciLinear(-3)); // Deve imprimir "Erro: N deve ser maior ou igual a zero."
