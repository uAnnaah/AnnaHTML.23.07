function fazerLogin() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;
  const mensagem = document.getElementById("mensagem");

  if (!usuario || !senha) {
    mensagem.textContent = "Por favor, preencha todos os campos.";
    mensagem.className = "erro";
    return;
  }

  const emailCadastro = localStorage.getItem("emailCadastro");
  const senhaCadastro = localStorage.getItem("senhaCadastro");

  if (usuario === emailCadastro && senha === senhaCadastro) {
    mensagem.textContent = "Login realizado com sucesso!";
    mensagem.className = "sucesso";
    setTimeout(() => {
      window.location.href = "menu.html";
    }, 1000);
  } else {
    mensagem.textContent = "Usuário ou senha inválidos.";
    mensagem.className = "erro";
  }
}
