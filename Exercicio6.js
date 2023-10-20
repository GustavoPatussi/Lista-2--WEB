let idade = prompt('Digite a sua idade: ');

if (idade >= 16) {
  console.log('pode votar');
} else if (idade < 16) {
  console.log('não pode votar');
} else {
  console.log('Valor inválido');
}
