document.querySelector('button.btn_maior').style.color = 'red'

function calcular(tipo, valor) {
  if (tipo === "acao") {
    if (valor === "c") {
      document.getElementById("resultado").value = "";
    } else if (
      valor === "+" ||
      valor === "-" ||
      valor === "*" ||
      valor === "/" ||
      valor === "."
    ) {
      document.getElementById("resultado").value += valor;
    } else {
      var total = eval(document.getElementById("resultado").value);
      document.getElementById("resultado").value = total;
    }
  } else {
    //tipo valor
    document.getElementById("resultado").value += valor;
  }
}

