/**
 * Ano automático
 * @author Erica Viana
 */

let ano = document.getElementById('copyrightYear')

// Inserindo o ano na tag <span>
let anoAtual = new Date().getFullYear()
ano.innerHTML = anoAtual