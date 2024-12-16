// Captura de elementos do DOM
const calcular = document.getElementById("calcular");
const nome = document.getElementById("nome");
const altura = document.getElementById("altura");
const peso = document.getElementById("peso");
const resultado = document.getElementById("resultado");

// Função principal para calcular o IMC
function calcularIMC() {
  const nomeValor = nome.value.trim();
  const alturaValor = parseFloat(altura.value);
  const pesoValor = parseFloat(peso.value);

  if (nomeValor && alturaValor > 0 && pesoValor > 0) {
    // Cálculo do IMC
    const imc = (pesoValor / (alturaValor * alturaValor)).toFixed(2);

    let classificacao = "";

    if (imc < 18.5) {
      classificacao = "abaixo do peso.";
    } else if (imc < 24.9) {
      classificacao = "com peso normal.";
    } else if (imc < 29.9) {
      classificacao = "com sobrepeso.";
    } else if (imc < 34.9) {
      classificacao = "com obesidade grau I.";
    } else if (imc < 39.9) {
      classificacao = "com obesidade grau II.";
    } else {
      classificacao = "com obesidade grau III (mórbida).";
    }

    // Exibe o resultado formatado
    resultado.innerHTML = `${nomeValor}, seu IMC é ${imc} e você está ${classificacao}`;
    resultado.style.color = "#333"; // Cor do texto
  } else {
    // Mensagem de erro caso os campos não sejam preenchidos corretamente
    resultado.innerHTML = "Preencha todos os campos corretamente!";
    resultado.style.color = "red";
  }
}

// Adiciona o evento de clique ao botão
calcular.addEventListener("click", calcularIMC);
