function validacao() {
  const cpf = document.getElementById("cpf_digitado").value;

  const resultadoValidacao = validaCPF(cpf);

  mostrarMensagem(resultadoValidacao);
}

function mostrarMensagem(resultadoValidacao) {
  const successMensagem = document.getElementById("success");
  const errorMensagem = document.getElementById("error");

  successMensagem.style.display = "none";
  errorMensagem.style.display = "none";

  if (resultadoValidacao) {
    successMensagem.style.display = "block";
  } else {
    errorMensagem.style.display = "block";
  }
}

function validaCPF(cpf) {
  if (cpf.length !== 11) return false;

  let numeros = cpf.substring(0, 9);
  const digito = cpf.substring(9);

  let soma = 0;

  for (let i = 10; i > 0; i--) {
    soma += numeros.charAt(10 - i) * i;
  }

  let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

  if (resultado != digito.charAt(0)) return false;

  soma = 0;
  numeros = cpf.substring(0, 10);

  for (let i = 11; i > 0; i--) {
    soma += numeros.charAt(11 - i) * i;
  }

  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

  if (resultado != digito.charAt(1)) return false;

  return true;
}
