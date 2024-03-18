function calcular() {
    alcool = document.getElementById("alcool").value
    gasolina = document.getElementById("gasolina").value
    resultado = alcool / gasolina
    if (resultado >= 0.70) {
        document.getElementById("resultado").innerText = `O percentual de diferença é  maior que ${resultado.toFixed(4)*100}% melhor usar gasolina`
        document.getElementById("resultado").style.color = 'Orange'
    }
    if (resultado <= 0.70) {
        document.getElementById("resultado").innerText = `O percentual de diferença é menos de ${resultado.toFixed(4)*100}%  melhor usar alcool`
        document.getElementById("resultado").style.color = 'green'
    }

}