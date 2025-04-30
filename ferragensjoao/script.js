// Estoque de produtos
const estoque = {
    martelo: 100,   // Quantidade em estoque
    pregos: 100,
    parafusos: 100
  };
  
  function mostrarPreco() {
    const produto = document.getElementById("produto").value;
    const precoDiv = document.getElementById("precoProduto");
    const estoqueDiv = document.getElementById("estoqueProduto");
  
    let preco = 0;
  
    switch (produto) {
      case "martelo":
        preco = 49.00;
        break;
      case "pregos":
        preco = 8.00;
        break;
      case "parafusos":
        preco = 6.00;
        break;
      default:
        precoDiv.innerHTML = "";
        estoqueDiv.innerHTML = "";
        return;
    }
  
    precoDiv.innerHTML = `Preço unitário: R$ ${preco.toFixed(2)}`;
    estoqueDiv.innerHTML = `Estoque disponível: ${estoque[produto]} unidades`;
  }
  
  function calcular() {
    const produto = document.getElementById("produto").value;
    const quantidade = parseInt(document.getElementById("quantidade").value);
    const resultado = document.getElementById("resultado");
  
    resultado.classList.remove("error"); // Remove erro anterior, se houver
  
    // Verifica se a quantidade e o produto estão corretos
    if (!produto || isNaN(quantidade) || quantidade <= 0) {
      resultado.classList.add("error"); // Adiciona destaque de erro
      resultado.innerHTML = "Por favor, selecione um produto e insira uma quantidade válida.";
      return;
    }
  
    // Verifica se há estoque suficiente
    if (quantidade > estoque[produto]) {
      resultado.classList.add("error");
      resultado.innerHTML = `Não há estoque suficiente de ${produto}. Estoque disponível: ${estoque[produto]} unidades.`;
      return;
      
    }
  
    let precoUnitario = 0;
  
    // Definindo os preços
    switch (produto) {
      case "martelo":
        precoUnitario = 49.00;
        break;
      case "pregos":
        precoUnitario = 8.00;
        break;
      case "parafusos":
        precoUnitario = 6.00;
        break;

    }
  
    const total = precoUnitario * quantidade;
    resultado.classList.remove("error"); // Garante que a classe error não fique ativa
    resultado.innerHTML = `Total: R$ ${total.toFixed(2)}`;
  
    // Atualiza o estoque após a venda
    estoque[produto] -= quantidade;
    mostrarPreco(); // Atualiza o estoque disponível na tela
  }