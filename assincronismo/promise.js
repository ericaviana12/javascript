/**
 * Assincronismo
 * Promise
 * @author Erica Viana
 */

const input = require('readline-sync')

let login, senha

// Estrutura de dados (simular um banco de dados)
const database = {

    admin: {
        usuario: "Administrador",
        senha: "password"
    },

    erica: {
        usuario: "Erica Viana",
        senha: "123@senac"
    },

    prof: {
        usuario: "Leandro Ramos",
        senha: "123456"
    }

}

// Autenticação de usuário
console.clear()
console.log("--------------------")
console.log("       USUÁRIO      ")
console.log("--------------------")
login = input.question("login:")
senha = input.question("senha:")
console.log("--------------------")

function logar(login, senha) {
    // Uso de promise (acesso ao "banco de dados")
    return new Promise((resolv, reject) => {
        // Simulação de delay no acesso ao banco de dados
        setTimeout(() => {
            if (database.hasOwnProperty(login)) {
                // Verifique se a senha está correta
                if (database[login].senha === senha) {
                    resolv("Autenticação bem sucedida. Olá, " + database[login].usuario)
                } else {
                    reject("Senha incorreta. Por favor tente novamente.")
                }
            } else {
                reject("Usuário não encontrado. Por favor verifique o login")
            }
        }, 2000) // 2000ms = 2s
    })
}

// Executar a função logar
// No uso de Promise é necessário usar o .then
logar(login, senha)
    .then((message) => {
        console.log(message)
    })
    .catch((error) => {
        console.log("Erro de autenticação." + error)
    })
