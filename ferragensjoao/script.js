// Simulação de dados de produtos
const produtos = {
  martelo: { preco: 25.90, estoque: 15 },
  pregos: { preco: 0.10, estoque: 1000 },
  parafusos: { preco: 0.20, estoque: 500 }
};

function mostrarPreco() {
  const produtoSelecionado = document.getElementById("produto").value;
  const precoDiv = document.getElementById("precoProduto");
  const estoqueDiv = document.getElementById("estoqueProduto");

  if (produtoSelecionado && produtos[produtoSelecionado]) {
    const { preco, estoque } = produtos[produtoSelecionado];

    precoDiv.textContent = `Preço unitário: R$ ${preco.toFixed(2)}`;
    estoqueDiv.textContent = `Estoque disponível: ${estoque} unidades`;
  } else {
    precoDiv.textContent = "";
    estoqueDiv.textContent = "";
  }
}

function calcular() {
  const produtoSelecionado = document.getElementById("produto").value;
  const quantidade = parseInt(document.getElementById("quantidade").value, 10);
  const resultadoDiv = document.getElementById("resultado");

  if (!produtoSelecionado || !produtos[produtoSelecionado]) {
    resultadoDiv.textContent = "Por favor, selecione um produto válido.";
    return;
  }

  const { preco, estoque } = produtos[produtoSelecionado];

  if (quantidade > estoque) {
    resultadoDiv.innerHTML = `<span style="color: red;">Quantidade solicitada excede o estoque disponível.</span>`;
    return;
  }

  const total = preco * quantidade;
  resultadoDiv.innerHTML = `<strong>Total a pagar:</strong> R$ ${total.toFixed(2)}`;
}


