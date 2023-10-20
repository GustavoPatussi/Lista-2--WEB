let numero1 = prompt('Digite um numero: ');
let numero2 = prompt('Digite outro numero: ');

if (numero1 % numero2 == 0) {
  console.log('o primeiro número digitado é divisível pelo segundo');
} else if (numero1 % numero2 != 0 && /\d/.test(numero1 && numero2)) {
  console.log('o primeiro número digitado NÃO é divisível pelo segundo');
} else {
  console.log('Valor inválido');
}
