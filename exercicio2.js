// Definindo um número para verificar se ele pertence à sequência de Fibonacci
const numero = 8;

// Iniciando a sequência com os dois primeiros valores
let fibonacci = [0, 1];

// Adicionando novos valores à sequência até que o último valor seja maior ou igual ao número desejado
while (fibonacci[fibonacci.length - 1] < numero) {
  const ultimo = fibonacci[fibonacci.length - 1];
  const penultimo = fibonacci[fibonacci.length - 2];
  const proximo = ultimo + penultimo;
  fibonacci.push(proximo);
}

// Verificando se o número desejado está na sequência
const pertence = fibonacci.includes(numero);

// Imprimindo o resultado
if (pertence) {
  console.log(`${numero} pertence à sequência de Fibonacci: ${fibonacci}`);
} else {
  console.log(`${numero} não pertence à sequência de Fibonacci: ${fibonacci}`);
}
