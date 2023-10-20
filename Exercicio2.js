let numero = prompt('Digite um numero: ');

if (numero == 0) {
  console.log('o numero digitado é 0');
}
else if ((numero %2) == 0) {
  console.log('o numero digitado é Par');
} 
else if ((numero % 2) == 1) {
  console.log('o numero digitado é Impar');
}else {
  console.log('Valor inválido');
}
