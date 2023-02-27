const cpfError = document.getElementById("cpf-error");
const invalidCPFMessage = "CPF inválido.";
const invalidLengthCPFMessage = "O CPF deve ter 11 dígitos.";

function validateCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g,'');

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

function validatePassword(password, confirmPassword) {
  // Verifica se as senhas são iguais
  if (password !== confirmPassword) {
    alert('As senhas não coincidem!');
    return false;
  }
  return true;
}

// Adiciona os eventos "input" e "keypress" no input de CPF
const inputCPF = document.getElementById("cpf");
inputCPF.addEventListener("input", mascara_cpf);
inputCPF.addEventListener("keypress", function(e) {
  const charCode = e.which ? e.which : e.keyCode;
  if (charCode < 48 || charCode > 57) {
    e.preventDefault();
  }
});

const form = document.getElementById('my-form');

form.addEventListener('submit', (event) => {
  // Impede o envio padrão do formulário
  event.preventDefault();

  const password = document.getElementById('pass').value;
  const confirmPassword = document.getElementById('confirm_password').value;
  const cpf = document.getElementById("cpf").value;

  // Verifica se o CPF é válido
  if (!validateCPF(cpf)) {
    alert('CPF inválido!');
    return;
  }

  // Verifica se as senhas são iguais
  if (!validatePassword(password, confirmPassword)) {
    return;
  }

  alert('Formulário enviado!');
  form.submit();
});



function mascara_cpf() {
  var cpf = document.getElementById('cpf')
  if (cpf.value.length == 3 || cpf.value.length == 7) {
      cpf.value += "."
  }
  else if (cpf.value.length == 11) {
      cpf.value += "-"
  }
}
