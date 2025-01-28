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
    };

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
