let numero = prompt('Digite um numero: ');

if (numero > 0) {
  console.log('o numero digitado é positivo');
} else if (numero == 0) {
  console.log('o numero digitado é 0');
} else if (numero < 0) {
  console.log('o numero digitado é negativo');
} else {
  console.log('Valor inválido');
}
