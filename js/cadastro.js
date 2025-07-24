function cadastrarUsuario() {
  const nome = document.getElementById("nome").value;
  const cidade = document.getElementById("cidades").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const mensagem = document.getElementById("mensagem");

  console.log(email, senha);

  if (!nome || !cidade || !email || !senha) {
    mensagem.textContent = "Por favor, preencha todos os campos.";
    mensagem.className = "erro";
    return;
  }
else{
  mensagem.textContent = "Conta criada com sucesso!";
  mensagem.className = "sucesso";
}
  localStorage.setItem("emailCadastro", email);
  localStorage.setItem("senhaCadastro", senha);

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

