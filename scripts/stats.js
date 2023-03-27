let jsonURL = "https://mindhub-xj03.onrender.com/api/amazing";
let eventsPast = [];
let eventsUpcoming = [];
let revenuesCat = [];
let table_1 = document.getElementById("tabla1");
let table_2 = document.getElementById("tabla2");
let table_3 = document.getElementById("tabla3");
let pastEvents_Table = [];
let upcomingEvents_Table = [];

traerDatos();

async function traerDatos() {
  try {
    const response = await fetch(jsonURL);
    const datos = await response.json();
    pastEvents(datos.events, datos);
    porcentajeAsistencia(eventsPast);
    pastEvents_Table.forEach((cat) => {
      ganancias(eventsPast, cat, "past");
    });
    upcomingEvents_Table.forEach((cat) => {
      ganancias(eventsUpcoming, cat, "upcoming");
    });
    console.log(upcomingEvents_Table);
  } catch (error) {
    console.error("ERROR" + error);
  }
}

function currentDate(objeto) {
  let currentDateString = objeto.currentDate;
  let currentDate = new Date(currentDateString);
  return currentDate;
}

function pastEvents(objeto, miJson) {
  for (evento of objeto) {
    let eventDateString = evento.date;
    let eventDate = new Date(eventDateString);
    if (eventDate < currentDate(miJson)) {
      eventsPast.push(evento);
    } else {
      eventsUpcoming.push(evento);
    }
  }
  categoriesFilt(eventsPast, "past");
  categoriesFilt(eventsUpcoming, "upcoming");
}
function categoriesFilt(objeto, tiempo) {
  let categories = [];
  objeto.map((event) => {
    if (!categories.includes(event.category)) {
      categories.push(event.category);
    }
  });
  console.log(objeto);
  if (tiempo == "past") {
    pastEvents_Table = categories;
  } else {
    upcomingEvents_Table = categories;
    console.log("eventos futuros");
    console.log(upcomingEvents_Table);
  }
}
function ganancias(unArray, categoria, tiempo) {
  let revenues = 0;
  let sumaAss = 0;
  let contCat = 0;
  for (evento of unArray) {
    if (evento.category == categoria) {
      contCat++;
      revenues +=
        (evento.assistance ? evento.assistance : evento.estimate) *
        evento.price;
      sumaAss += parseFloat(
        (
          ((evento.assistance ? evento.assistance : evento.estimate) * 100) /
          evento.capacity
        ).toFixed(2)
      );
    }
  }
  sumaAss = parseFloat(sumaAss / contCat).toFixed(2);
  if (tiempo == "past") {
    tableTwoandThree(table_3, categoria, revenues, sumaAss);
  } else {
    tableTwoandThree(table_2, categoria, revenues, sumaAss);
  }
}
function tableTwoandThree(tabla, col1, col2, col3) {
  let fila = document.createElement("tr");
  fila.innerHTML = `
<td>${col1}</td>
<td>$ ${col2}.- </td>
<td>${col3} %</td>
`;
  tabla.appendChild(fila);
}

function tableOne(objeto) {
  table_1.innerHTML = `
<tr>
<td> ${objeto.eventMayPorAsist} </td>
<td> ${objeto.eventMenPorAsist}</td>
<td> ${objeto.eventMayCapacity} </td>
</tr>
`;
}
function porcentajeAsistencia(unArray) {
  let content_Tabla_1 = {};
  let eventMayPorAsist = "";
  let eventMenPorAsist = "";
  let eventMayCapacity = "";
  let porcentajeMay = 0;
  let porcentajeMen = 100;
  let capacity = 0;
  for (evento of unArray) {
    let auxPorcentaje = ((evento.assistance * 100) / evento.capacity).toFixed(
      2
    );
    if (auxPorcentaje > porcentajeMay) {
      porcentajeMay = auxPorcentaje;
      eventMayPorAsist = evento.name;
    } else if (auxPorcentaje < porcentajeMen) {
      porcentajeMen = auxPorcentaje;
      eventMenPorAsist = evento.name;
    }
    let auxCapacity = evento.capacity;
    if (auxCapacity > capacity) {
      capacity = auxCapacity;
      eventMayCapacity = evento.name;
    }
  }
  content_Tabla_1.eventMayPorAsist = `${eventMayPorAsist} : ${porcentajeMay}%`;
  content_Tabla_1.eventMenPorAsist = `${eventMenPorAsist} : ${porcentajeMen}%`;
  content_Tabla_1.eventMayCapacity = `${eventMayCapacity} : ${capacity}`;
  tableOne(content_Tabla_1);
}
