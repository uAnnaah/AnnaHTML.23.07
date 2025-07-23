function getEndereco() {
  let cep = document.getElementById("cep").value;
  let logradouro = document.getElementById("logradouro");
  let bairro = document.getElementById("bairro");
  let cidade = document.getElementById("cidade");
  let estado = document.getElementById("estado");
  let regiao = document.getElementById("regiao");

  logradouro.innerText = "Logradouro: ";
  bairro.innerText = "Bairro: ";
  cidade.innerText = "Cidade: ";
  estado.innerText = "Estado: ";
  regiao.innerText = "Região: Não disponível pela API";

  fetch(`https://viacep.com.br/ws/${cep}/json`)
    .then(response => response.json())
    .then(data => {
      if (data.erro) {
        logradouro.innerText = 'Cep não encontrado!';
        bairro.innerText = '';
        cidade.innerText = '';
        estado.innerText = '';
        regiao.innerText = '';
        return;
      }
      logradouro.innerText += ' ' + data.logradouro;
      bairro.innerText += ' ' + data.bairro;
      cidade.innerText += ' ' + data.localidade;
      estado.innerText += ' ' + data.uf;
      regiao.innerText = "Região: Não disponível pela API";
    });
}
