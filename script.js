const btn_girar = document.getElementById('btn_girar')
let resultado = document.querySelector('#resultado')
let res = document.createElement('h2')
resultado.appendChild(res)

btn_girar.addEventListener('click', () => {
    let moeda = Math.round(Math.random())

    res.classList.add('flash')
    setTimeout(() => {
        res.classList.remove('flash')
    }, 500)
    
    if(moeda == true) {
        res.innerHTML = 'Cara'
    } else {
        res.innerHTML = 'Coroa'
    }
})