//fetch('data.json')
fetch("https://mindhub-xj03.onrender.com/api/amazing")
.then((response) => response.json())
.then(actividades => {

function randomNum() { return (Math.floor(Math.random() * 4) + 1) };

const imagenTarjeta = document.querySelector('.imgTarjeta')
imagenTarjeta.src = actividades.events[index].image

const colorTarjeta = document.querySelector(".card")
colorTarjeta.className = `card cardColor${randomNum()} d-flex flex-xl-row`

const titulo = document.querySelector("h5")
titulo.textContent = actividades.events[index].name

const contenedorTexto = document.querySelector(".card-body")

let texto1 = document.createElement('p')
texto1.textContent = `Date: ${actividades.events[index].date}`
let texto2 = document.createElement('p')
texto2.textContent = `Description: ${actividades.events[index].description}`
let texto3 = document.createElement('p')
texto3.textContent = `Category: ${actividades.events[index].category}`
let texto4 = document.createElement('p')
texto4.textContent = `Place: ${actividades.events[index].place}`
let texto5 = document.createElement('p')
texto5.textContent = `Capacity: ${actividades.events[index].capacity}`
let texto6 = document.createElement('p')
texto6.textContent = `Assistance: ${actividades.events[index].assistance}`
let texto7 = document.createElement('p')
texto7.textContent = `Price: $${actividades.events[index].price}`

contenedorTexto.appendChild(texto1)
contenedorTexto.appendChild(texto2)
contenedorTexto.appendChild(texto3)
contenedorTexto.appendChild(texto4)
contenedorTexto.appendChild(texto5)
contenedorTexto.appendChild(texto6)
contenedorTexto.appendChild(texto7)

})

const queryString = location.search
const params = new URLSearchParams(queryString)
const id = params.get("id")
const index = (parseInt(id) - 1)
