function randomNum() { return (Math.floor(Math.random() * 4) + 1) };

const imagenTarjeta = document.querySelector('.imgTarjeta')
imagenTarjeta.src = data.events[0].image

const colorTarjeta = document.querySelector(".card")
colorTarjeta.className = `card cardColor${randomNum()} d-flex flex-md-row`

const titulo = document.querySelector("h5")
titulo.textContent = data.events[0].name

const contenedorTexto = document.querySelector(".card-body")

let texto1 = document.createElement('p')
texto1.textContent = `Date: ${data.events[0].date}`
let texto2 = document.createElement('p')
texto2.textContent = `Description: ${data.events[0].description}`
let texto3 = document.createElement('p')
texto3.textContent = `Category: ${data.events[0].category}`
let texto4 = document.createElement('p')
texto4.textContent = `Place: ${data.events[0].place}`
let texto5 = document.createElement('p')
texto5.textContent = `Capacity: ${data.events[0].capacity}`
let texto6 = document.createElement('p')
texto6.textContent = `Assistance: ${data.events[0].assistance}`
let texto7 = document.createElement('p')
texto7.textContent = `Price: $${data.events[0].price}`

contenedorTexto.appendChild(texto1)
contenedorTexto.appendChild(texto2)
contenedorTexto.appendChild(texto3)
contenedorTexto.appendChild(texto4)
contenedorTexto.appendChild(texto5)
contenedorTexto.appendChild(texto6)
contenedorTexto.appendChild(texto7)