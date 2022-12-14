// Calculo de IMC

/* 
    Captura de elementos
    Validação de dados dos inputs (terá que retornar true ou false)
    função para cálculo de IMC
    função para printar o resultado na tela
*/

function scope(){
    let div = document.querySelector("#resultado")
    let formulario = document.querySelector("#formulario")
    let p = document.querySelector("#p")
    let a = document.querySelector("#a")

    // Validando dados dos inputs
    function validatingData(pv, av){
        if(pv != "" && av != ""){
            c = pv / (av ** 2)
            return Number.isNaN(c)
        } else{
            return true
        }
    }

    // Calculando o IMC
    function calcImc(pv, av){
        imc = pv / (av ** 2)
        let resultado

        if(imc < 18.5){
            resultado = "Abaixo do peso"
        } else if(imc >= 18.5 && imc <=24.99){
            resultado = "Peso normal"
        } else if(imc >= 25 && imc <= 29.99){
            resultado = "Sobrepeso"
        }  else if(imc >= 30 && imc <= 34.99){
            resultado = "Obesidade grau 1"
        } else if(imc >= 35 && imc <= 39.99){
            resultado = "Obesidade grau 2"
        } else{
            resultado = "Obesidade grau 3"
        }

        return resultado
    }

    // Criando resultado no DOM
    function addResult(bl){
        imc = p.value / (a.value ** 2)

        if(bl == true){
            div.classList = "resultado-n"
            div.textContent = `Dados inválidos!`
        } else{
            div.classList = "resultado-s"
            div.textContent = `Seu IMC é ${imc.toFixed(2)} (${calcImc(p.value, a.value)})`
        }
    }

    // Atribuindo ação ao submit
    formulario.addEventListener("submit", (e) => {
        e.preventDefault()
        addResult(validatingData(p.value, a.value))
    })
}
scope()
