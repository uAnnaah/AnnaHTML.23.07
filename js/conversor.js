function converterMoeda() {
  const amount = document.getElementById("amount").value;
  const fromCurrency = document.getElementById("from-currency").value;
  const toCurrency = document.getElementById("to-currency").value;
  const mensagem = document.getElementById("mensagem-moeda");

  mensagem.innerText = "";

  fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`)
    .then(response => response.json())
    .then(data => {
      if (data.rates[toCurrency]) {
        mensagem.innerText = `Conversão: ${amount} ${fromCurrency} = ${data.rates[toCurrency]} ${toCurrency}`;
        mensagem.className = "sucesso";
      } else {
        mensagem.innerText = "Erro ao converter moeda.";
        mensagem.className = "erro";
      }
    })
    .catch(() => {
      mensagem.innerText = "Erro na requisição da API.";
      mensagem.className = "erro";
    });
}
