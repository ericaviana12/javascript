/**
 * Estrutura de dados array
 * @author Erica Viana
 */

//                 [0]      [1]      [2]      [3]      [4]
let alunosEM1 = ["Tania", "Pedro", "Maria", "Joao", "Viviane"]

console.clear()

console.log(typeof(alunosEM1))

// O comando abaixo exibe os elementos do vetor
console.log(alunosEM1)

// O comando abaixo identifica o número de elementos de um vetor
console.log(alunosEM1.length)

// O comando abaixo exibe o índice do array associado ao elemento
console.table(alunosEM1)

// O comando abaixo exibe o elemento do índice selecionado
console.log(alunosEM1[2])

// O comando abaixo adiciona um elemento ao vetor
alunosEM1.push("Jorge")

// O comando abaixo exibe os elementos do vetor
console.table(alunosEM1)

// Para alterar um elemento do vetor, é necessário usar o índice
alunosEM1[3] = "Joaozinho"

// O comando abaixo exibe os elementos do vetor
console.table(alunosEM1)

// O comando abaixo remove o último elemento do vetor
alunosEM1.pop()

// O comando abaixo exibe os elementos do vetor
console.table(alunosEM1)

// Removendo um elemento específico sem alterar o índice, neste caso é necessário fornecer o índice a ser excluído
delete alunosEM1[1]

// O comando abaixo exibe os elementos do vetor
console.table(alunosEM1)

// ==================================================
console.clear()

// Percorrendo um vetor
let notas = [4, 5, 6, 7, 8]
console.log(notas)
console.table(notas)

// Laço for
for (let i = 0; i < notas.length; i++) {
    console.log(notas[i])
}

// Laço forEach (simplificação do for exclusiva para percorrer o vetor)
notas.forEach((n) => {
    console.log(n)
})

// Mapeamento map() -> forEach + Alteração do vetor

// Exemplo 1: Adicionar 1 ponto a mais para cada nota
let notasAtualizadas = notas.map((na) => {
    return (na + 1)
})

console.log(notas)
console.log(notasAtualizadas)

// Exemplo 2: Conversão de sistema de pontos para letras

/*
SENAC:
NA -> Não atendeu (nota menor que 5)
PA -> Parcialmente atendido (nota entre 5 e 7)
A -> Atendido (nota maior que 7)
*/

let notasConvertidas = notas.map((nc) => {
    if (nc < 5) { // Nota menor que 5
        return("NA")
    } else if (nc > 7) {
        return("A") // Nota maior que 7
    } else {
        return("PA")
    }
})

console.log(notas)
console.log(notasConvertidas)