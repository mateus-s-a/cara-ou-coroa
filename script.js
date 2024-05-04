const btn_girar = document.getElementById('btn_girar')
const resultado = document.querySelector('#resultado')
const res = document.createElement('h2')
resultado.appendChild(res)

btn_girar.addEventListener('click', () => {
    const moeda = Math.round(Math.random())

    res.classList.add('flash')
    setTimeout(() => res.classList.remove('flash'), 500)

    res.textContent = moeda ? 'Cara' : 'Coroa'
})
