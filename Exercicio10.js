console.log('Só paga imposto salário anual acima de R$ 24000,00');
let salario = prompt('Digite seu salário anual: ');

if (/\d/.test(salario)) {
  if (salario >= 24000) {
    console.log('Você deve pagar impostos');
  } else if (salario < 24000) {
    console.log('o salario é isento de imposto');
  }
} else {
  console.log('Valor inválido');
}
