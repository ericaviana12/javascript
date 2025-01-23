/**
 * Slide show
 * @author Erica Viana
 */

// Array (vetor) de imagens
let slides = ["banner1.jpg","banner2.jpg","banner3.jpg"]
let intervalo = 3000 // 3000ms = 3s (1s por imagem)
let indice = 0 // Apoio a lógica (índice do Array)

// Função para troca das imagens
function show() {
    // Capturar o id do banner
    const slide = document.getElementById('slide')
    
    // Efeito de entrada
    // A estrutura abaixo verifica se foi atribuída a classe .slideOut ao identificador #slide
    if (slide.classList.contains('slideOut')) {
        slide.classList.remove('slideOut')
    }
    slide.classList.add('slideIn')

    // Troca de imagem
    // Temporizador (nativo do JS)
    setTimeout(() => {
        // Soma 1 ao indice do Array(vetor)
        indice++
        // Se o último slide do vetor for atingido, voltar para o 0
        if (indice >= slides.length) {
            indice = 0
        }
        // Substituir a imagem no documento HTML pela imagem do vetor (img/slides[0]   img/slides[1]   img/slides[2])
        slide.src= `img/${slides[indice]}`
    }, 1000) // 1000ms = 1s -> ajuste (sincronizar o CSS)

        // Efeito de saída
    // A estrutura abaixo verifica se foi atribuída a classe .slideOut ao identificador #slide
    if (slide.classList.contains('slideIn')) {
        slide.classList.remove('slideIn')
    }
    slide.classList.add('slideOut')

    // Intervalo para a próxima execução (loop infinito)
    setTimeout(show, intervalo)

}

// Executar a função ao iniciar o documento JS
show()