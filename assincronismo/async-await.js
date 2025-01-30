/**
 * Uso de async - await (sintaxe moderna do JS para lidar com assincronismo)
 * @author Erica Viana
 */

// Biblioteca nativa do JS para trabalhar com arquivos
const fs = require('fs')

function criarArquivo() {
    let conteudo = "Erica Viana\nExemplo de uso dos novos recursos do assincronismo no JS (async e await)"
    gravarArquivo("Teste.txt", conteudo)
}

async function gravarArquivo(path, conteudo) {
    try {
        await fs.promises.writeFile(path, conteudo)
        console.log("Arquivo gravado com sucesso.")
    } catch (error) {
        console.log(error)
    }
}

console.clear()
criarArquivo()