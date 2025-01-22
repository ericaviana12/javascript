/**
 * Data automática
 * @author Erica Viana
 */

function obterData() {
    const data = new Date()
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }
    return data.toLocaleDateString('pt-br', options)
}

// A linha abaixo insere na tag <p> identificadaa como dataAtual o retorno da função
document.getElementById('dataAtual').innerHTML = obterData()