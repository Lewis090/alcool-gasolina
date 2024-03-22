function calcular() {
    alcool = document.getElementById("alcool").value
    gasolina = document.getElementById("gasolina").value
    resultado = alcool / gasolina

    if (resultado > 0.7) {
        document.getElementById("resultado").innerText = `GASOLINA`
        document.getElementById("resultado").style.color = 'orange'
        document.getElementById("resultado").style.background = "black"
    }
    if (resultado < 0.7) {
        document.getElementById("resultado").innerText = `ALCOOL`
        document.getElementById("resultado").style.color = 'green'
        document.getElementById("resultado").style.background = "black"
    }
}