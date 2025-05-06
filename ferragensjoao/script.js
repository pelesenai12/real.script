// Simulação de dados de produtos
const produtos = {
  martelo: { preco: 25.90, estoque: 15 },
  pregos: { preco: 10.00, estoque: 1000 },
  parafusos: { preco:20.00, estoque: 500 }
};

// Função para exibir preço e estoque
function mostrarPreco() {
  const produtoSelecionado = document.getElementById("produto").value;
  const precoDiv = document.getElementById("precoProduto");
  const estoqueDiv = document.getElementById("estoqueProduto");

  // Verifica se o produto selecionado existe
  if (produtoSelecionado && produtos[produtoSelecionado]) {
    const { preco, estoque } = produtos[produtoSelecionado];
    precoDiv.textContent = `Preço unitário: R$ ${preco.toFixed(2)}`;
    estoqueDiv.textContent = `Estoque disponível: ${estoque} unidades`;
  } else {
    // Limpa os dados de preço e estoque caso nenhum produto seja selecionado
    precoDiv.textContent = "";
    estoqueDiv.textContent = "";
  }
}

// Função para validar a quantidade
function validarQuantidade(quantidade, estoque) {
  if (isNaN(quantidade) || quantidade <= 0) {
    return "Por favor, insira uma quantidade válida.";
  }

  if (quantidade > estoque) {
    return "Quantidade solicitada excede o estoque disponível.";
  }

  return null; // Retorna null se a quantidade for válida
}

// Função para calcular o total
function calcular() {
  const produtoSelecionado = document.getElementById("produto").value;
  const quantidade = parseInt(document.getElementById("quantidade").value, 10);
  const resultadoDiv = document.getElementById("resultado");

  // Valida se o produto foi selecionado
  if (!produtoSelecionado || !produtos[produtoSelecionado]) {
    resultadoDiv.textContent = "Por favor, selecione um produto válido.";
    return;
  }

  const { preco, estoque } = produtos[produtoSelecionado];

  // Valida a quantidade inserida
  const erroQuantidade = validarQuantidade(quantidade, estoque);
  if (erroQuantidade) {
    resultadoDiv.innerHTML = `<span style="color: red;">${erroQuantidade}</span>`;
    return;
  }

  // Calcula o total
  const total = preco * quantidade;
  resultadoDiv.innerHTML = `<strong>Total a pagar:</strong> R$ ${total.toFixed(2)}`;
}



