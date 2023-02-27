const fs = require('fs');

// Lê o arquivo JSON
const dadosJSON = fs.readFileSync('dados.json');

// Faz o parse do JSON para um objeto JavaScript
const dados = JSON.parse(dadosJSON);

// Encontra o menor valor de faturamento
let menor = Number.MAX_VALUE;
for (let i = 0; i < dados.length; i++) {
  if (dados[i].valor < menor) {
    menor = dados[i].valor;
  }
}

// Encontra o maior valor de faturamento
let maior = Number.MIN_VALUE;
for (let i = 0; i < dados.length; i++) {
  if (dados[i].valor > maior) {
    maior = dados[i].valor;
  }
}

// Calcula a média mensal
let total = 0;
for (let i = 0; i < dados.length; i++) {
  total += dados[i].valor;
}
const media = total / dados.length;

// Encontra o número de dias em que o valor diário foi superior à média
let acimaDaMedia = 0;
for (let i = 0; i < dados.length; i++) {
  if (dados[i].valor > media) {
    acimaDaMedia++;
  }
}

// Imprime os resultados
console.log(`Menor valor de faturamento: R$${menor.toFixed(2)}`);
console.log(`Maior valor de faturamento: R$${maior.toFixed(2)}`);
console.log(`Número de dias acima da média mensal: ${acimaDaMedia}`);
