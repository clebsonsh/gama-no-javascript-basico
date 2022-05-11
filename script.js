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
  if (cpf !== "") {
    return true;
  }

  return false;
}
