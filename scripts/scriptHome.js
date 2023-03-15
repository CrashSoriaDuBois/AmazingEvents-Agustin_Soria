let iTarjeta = 1

for (const iterator of data.events) {
    if (iTarjeta >= 5) { iTarjeta = 1 }

    /* Tarjeta, Constructor sin innerHTML */
    const containerMain = document.querySelector('.tarjetasMain')

    let div0 = document.createElement('div')
    let div1 = document.createElement('div')
    div1.className = `card cardColor${iTarjeta}`

    let img_Tarjeta = document.createElement("img")
    img_Tarjeta.src = iterator.image
    img_Tarjeta.className = "card-img-top"
    img_Tarjeta.alt = "..."
    let div2 = document.createElement('div')

    let h5_Tarjeta = document.createElement("h5")
    h5_Tarjeta.textContent = iterator.name

    let p_TarjetaFecha = document.createElement("p")
    p_TarjetaFecha.className = "cardText"
    p_TarjetaFecha.textContent = iterator.date
    let p_Tarjeta = document.createElement("p")
    p_Tarjeta.className = "cardText"
    p_Tarjeta.textContent = iterator.description
    let div3 = document.createElement("div")
    div3.className = "fondoTarjeta"

    let p_Tarjeta2 = document.createElement("p")
    p_Tarjeta2.textContent = `Price $${iterator.price}`
    let a_Tarjeta = document.createElement("a")
    a_Tarjeta.href = "/details.html"
    a_Tarjeta.textContent = "Ver más..."
    a_Tarjeta.className = "cardButton"

    let botonFuncion = document.getElementsByClassName(".cardButton")
    botonFuncion.onClick = function () { }

    div3.appendChild(p_Tarjeta2)
    div3.appendChild(a_Tarjeta)

    div2.appendChild(h5_Tarjeta)
    div2.appendChild(p_TarjetaFecha)
    div2.appendChild(p_Tarjeta)
    div2.appendChild(div3)

    div1.appendChild(img_Tarjeta)
    div1.appendChild(div2)

    div0.appendChild(div1)

    containerMain.appendChild(div0)


    iTarjeta++;
}