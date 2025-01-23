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
    return `${data.toLocaleDateString('pt-br', options)} - ${data.toLocaleTimeString('pt-br')}`
}

function atualizarData() {
    // A linha abaixo insere na tag <p> identificadaa como dataAtual o retorno da função
    document.getElementById('dataAtual').innerHTML = obterData()
}

// Atualizar a data/hora a cada segundo
setInterval(atualizarData, 1000) // 1000ms = 1s