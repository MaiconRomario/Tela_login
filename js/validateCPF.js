const cpfError = document.getElementById("cpf-error");
const invalidCPFMessage = "CPF inválido.";
const invalidLengthCPFMessage = "O CPF deve ter 11 dígitos.";

function validarCPF() {
  const cpf = document.getElementById("cpf").value.replace(/[^\d]+/g,'');

  if (cpf.length !== 11) {
    cpfError.style.display = "block";
    cpfError.innerHTML = invalidLengthCPFMessage;
    return false; // CPF deve ter 11 dígitos
  }

  // Verifica o primeiro dígito
  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let resto = 11 - soma % 11;
  if (resto === 10 || resto === 11) {
    resto = 0;
  }
  if (resto !== parseInt(cpf.charAt(9))) {
    cpfError.style.display = "block";
    cpfError.innerHTML = invalidCPFMessage;
    return false;
  }

  // Verifica o segundo dígito
  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }
  resto = 11 - soma % 11;
  if (resto === 10 || resto === 11) {
    resto = 0;
  }
  if (resto !== parseInt(cpf.charAt(10))) {
    cpfError.style.display = "block";
    cpfError.innerHTML = invalidCPFMessage;
    return false;
  }

  cpfError.style.display = "none";
  return true;
}

// Adiciona o evento input no input de CPF
const inputCPF = document.getElementById("cpf");
inputCPF.addEventListener("input", validarCPF);

function mascara_cpf() {
    var cpf = document.getElementById('cpf')
    if (cpf.value.length == 3 || cpf.value.length == 7) {
        cpf.value += "."
    }
    else if (cpf.value.length == 11) {
        cpf.value += "-"
    }

}