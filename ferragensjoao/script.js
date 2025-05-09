// Simulação de dados de produtos
const produtos = {
  martelo: 25.90,
  pregos: 10.00,
  parafusos:  20.00, 
}

const estoque ={
  martelo :100,
  prego :100,
  parafuso:100,
}

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
  if(estoque[escolha] - quantidade >= 0){
  document. getElementById("resultado").innerHTML = valortotal.toFixed(2);
  estoque[escolha] -= qtd; 
  window.alert("compra realizada com sucesso" +"valor total:"+ valortotal.toFixed(2))
  }else{
    window.alert("estoque indisponivel")
  }
  console.log(estoque[escolha])

}




