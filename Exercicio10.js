console.log('Só paga imposto salário anual acima de R$ 25344,00');
let salario = prompt('Digite seu salário anual: ');

if (/\d/.test(salario)) {
  if (salario >= 25344) {
    console.log('Você deve pagar impostos');
  } else if (salario < 25344) {
    console.log('o salario é isento de imposto');
  }
} else {
  console.log('Valor inválido');
}
