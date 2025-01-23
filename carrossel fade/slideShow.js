/**
 * Slide show
 * @author Erica Viana
 */

let slides = ["slide1.jpg", "slide2.jpg", "slide3.jpg"];
let intervalo = 3000; // Intervalo total entre trocas (número de slides)
let indice = 0

function show() {
    const slide = document.getElementById('slide')

    // Efeito de entrada
    if (slide.classList.contains('slideOut')) {
        slide.classList.remove('slideOut')
    }
    slide.classList.add('slideIn')

    // Troca de imagem
    setTimeout(() => {
        indice++
        if (indice >= slides.length) {
            indice = 0
        }     
        slide.src = `img/${slides[indice]}`        

        // Efeito de saída
        if (slide.classList.contains('slideIn')) {
            slide.classList.remove('slideIn')
        }
        slide.classList.add('slideOut')
    }, 1000); // Sincronizar com o tempo de transição CSS

    // Intervalo para a próxima execução
    setTimeout(show, intervalo)
}

show()



