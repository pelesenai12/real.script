let valortitulo = document.getElementById("tituloprincipal").innerText
console.log(valortitulo)

function alteratitulo(){
    document.getElementById("tituloprincipal").innerHTML = "titulo alterado com sucesso";
    window.alert("titulo alterado com sucesso");
}

function desfazeralteracao(){
document.getElementById("tituloprincipal").innerHTML = valortitulo;
}