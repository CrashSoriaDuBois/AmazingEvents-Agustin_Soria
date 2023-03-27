const containerMain = document.querySelector('.tarjetasMain')
const ulCheckContainer = document.querySelector('.ulCheckContainer')
const textInput = document.querySelector('.textInput')

textInput.addEventListener('input',filtroFinal)
ulCheckContainer.addEventListener('change',filtroFinal)

let arrayActividades
//fetch('data.json')
fetch("https://mindhub-xj03.onrender.com/api/amazing")
.then((response) => response.json())
.then(actividades => {

    arrayActividades = actividades
    createCards(actividades.events)
    createCheckmarks(actividades.events)

})

function filtroFinal(){
    let filtro1 = textFilter(arrayActividades.events,textInput.value)
    let filtro2 = categoryFilter(filtro1)
    createCards(filtro2)
}

function textFilter(array, texto){
    let arrayFiltrado = array.filter(elemento => elemento.name.toLowerCase().includes(texto.toLowerCase()))
    return arrayFiltrado
}
function categoryFilter(array){
    let checkboxes = document.querySelectorAll("input[type='checkbox']")
    console.log(checkboxes)
    let arrayChecks = Array.from(checkboxes)
    let checksCheckeados = arrayChecks.filter(check => check.checked)
    if(checksCheckeados.length == 0){
        return array
    }
    /* console.log(checksCheckeados); */
    let paises = checksCheckeados.map(check => check.value)
    /* console.log(paises) */
    let arrayFiltrado = array.filter(elemento => paises.includes(elemento.category))
    /* console.log(arrayFiltrado) */
    return arrayFiltrado
}

function createCheckmarks(array){
    let arrayCategory = array.map(elemento => elemento.category)
    let setCategory = new Set(arrayCategory.sort((a,b)=>{
        if(a<b){
            return -1
        }
        if(a>b){
            return 1
        }
        return 0
    }))

    let checkMark = ''
    setCategory.forEach(elemento =>{
        checkMark += 
        `<li> 
        <label class="categoryHead" for="${elemento}">
        <input class="form-check-input" type="checkbox" role="switch" id="${elemento}" value="${elemento}">
        ${elemento}</label>
        </li>`
    })
    ulCheckContainer.innerHTML = checkMark
}
function createCards(array) {
    let iTarjeta = 1

    if (array.length == 0) {
        containerMain.innerHTML =
            `<div class="cardColor"><div><h2>No results found... </h2></div></div>`
        return
    }
    let cardsContent = ``
    array.forEach(element => {
        if (iTarjeta >= 5) { iTarjeta = 1 }
        cardsContent +=
`<div>
    <div class="card cardColor${iTarjeta}">
        <img src="${element.image}" class="card-img-top" alt="...">
        <div>
            <h5>${element.name}</h5>
            <p class="cardText">${element.date}</p>
            <p class="cardText">${element.description}</p>
            <div class="fondoTarjeta">
                <p>Price $${element.price}</p>
                <a href="/details.html?id=${element._id}" class="cardButton">Ver más...</a>
            </div>
        </div>
    </div>
</div>`
        iTarjeta++;
    });
    containerMain.innerHTML = cardsContent
}