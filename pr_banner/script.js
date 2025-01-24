/**
 * 
 * @author Erica Viana
 */

const main = document.querySelector('main')
const backgrounds = [
    'url(img/bg1.jpg',
    'url(img/bg2.jpg',
    'url(img/bg3.jpg'
]

let indice = 0

function slider() {
    indice++
    if (indice >= backgrounds.length) {
        indice = 0
    }

    // Troca da imagem de background no CSS
    main.style.backgroundImage = backgrounds[indice]
    main.style.transition = 'background-image 1s ease-in-out'
}

setInterval(slider, 3000) // 3000ms = 3s -> 1s para cada slide