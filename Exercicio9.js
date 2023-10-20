let ano = prompt('Digite um ano: ');

if (/\d/.test(ano)) {
  if (ano % 4 == 0) {
    console.log('O ano digitado é bissexto');
  } else {
    console.log('O ano digitado NÃO é bissexto');
  }
  if (ano % 4 == 0 && ano % 100 != 0) {
    console.log('O ano digitado é divisível po 4 e não por 100');
  }
  if (ano % 400 == 0) {
    console.log('O ano digitado é divisível po 400');
  }
} else {
  console.log('Valor inválido');
}
