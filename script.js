function calcular(){
    var dias = document.getElementById("dias").value
    var grupocafe = document.getElementById("grupocafe").value

    var precodia = dias * 280
    var grupocafe = grupocafe * 15
    var total = precodia + grupocafe 
    var resultado = 0

    resultado = "O PREÇO A PAGAR SERÁ DE: " + total
    document.getElementById("resultado").innerHTML = resultado
}

