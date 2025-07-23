function cadastrarUsuario() {
  const nome = document.getElementById("nome").value;
  const cidade = document.getElementById("cidade").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const mensagem = document.getElementById("mensagem");

  if (!nome || !cidade || !email || !senha) {
    mensagem.textContent = "Por favor, preencha todos os campos.";
    mensagem.className = "erro";
    return;
  }

  localStorage.setItem("emailCadastro", email);
  localStorage.setItem("senhaCadastro", senha);
  mensagem.textContent = "Conta criada com sucesso!";
  mensagem.className = "sucesso";

  setTimeout(() => {
    window.location.href = "index.html";
  }, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
  fetch("./data/cidades-brasileiras.json")
    .then(response => response.json())
    .then(data => {
      const datalist = document.getElementById("lista-cidades");
      data.forEach(cidade => {
        const option = document.createElement("option");
        option.value = cidade.nome;
        datalist.appendChild(option);
      });
    });
});

