// const paisesLatinoamerica = [
//     {
//       nombre: "Argentina",
//       ubicacion: "Sur de Sudamérica",
//       habitantes: 45000000,
//       capital: "Buenos Aires",
//       imagen: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg',
//       continente: 'America'
//     },
//     {
//       nombre: "Bolivia",
//       ubicacion: "Centro de Sudamérica",
//       habitantes: 11000000,
//       capital: "La Paz",
//       imagen: 'https://flags-world.com/wp-content/uploads/2021/01/flag-of-bolivia_1.png'
//     },
//     {
//       nombre: "Brasil",
//       ubicacion: "Este de Sudamérica",
//       habitantes: 211000000,
//       capital: "Brasilia",
//     },
//     {
//       nombre: "Chile",
//       ubicacion: "Sur de Sudamérica",
//       habitantes: 19000000,
//       capital: "Santiago",
//     },
//     {
//       nombre: "Colombia",
//       ubicacion: "Norte de Sudamérica",
//       habitantes: 50340000,
//       capital: "Bogotá",
//     },
//     {
//       nombre: "Costa Rica",
//       ubicacion: "Centroamérica",
//       habitantes: 5100000,
//       capital: "San José",
//       continente: 'America'
//     },
//     {
//       nombre: "Cuba",
//       ubicacion: "El Caribe",
//       habitantes: 11400000,
//       capital: "La Habana",
//     },
//     {
//       nombre: "Ecuador",
//       ubicacion: "Oeste de Sudamérica",
//       habitantes: 17300000,
//       capital: "Quito",
//     },
//     {
//       nombre: "El Salvador",
//       ubicacion: "Centroamérica",
//       habitantes: 6500000,
//       capital: "San Salvador",
//     },
//     {
//       nombre: "Guatemala",
//       ubicacion: "Centroamérica",
//       habitantes: 18200000,
//       capital: "Ciudad de Guatemala",
//     },
//     {
//       nombre: "Honduras",
//       ubicacion: "Centroamérica",
//       habitantes: 10000000,
//       capital: "Tegucigalpa",
//     },
//     {
//       nombre: "México",
//       ubicacion: "Norte de América Central",
//       habitantes: 128900000,
//       capital: "Ciudad de México",
//     },
//     {
//       nombre: "Nicaragua",
//       ubicacion: "Centroamérica",
//       habitantes: 6400000,
//       capital: "Managua",
//     },
//     {
//       nombre: "Panamá",
//       ubicacion: "Centroamérica",
//       habitantes: 4300000,
//       capital: "Ciudad de Panamá",
//       bandera: 'http://dasdsa'
//     },
//     {
//       nombre: "Paraguay",
//       ubicacion: "Centro de Sudamérica",
//       habitantes: 7200000,
//       capital: "Asunción",
//     },
// ];
const paisesLatinoamerica = JSON.parse(localStorage.getItem("paises")) || [];

const copiaArray = structuredClone(paisesLatinoamerica);
const tableBodyHTML = document.getElementById("tableBody");
const countriesForm = document.getElementById("countries-form");

function renderizarTabla(arrayDePaises) {
  calcularPoblacionTotal(arrayDePaises);
  tableBodyHTML.innerHTML = "";
  arrayDePaises.forEach((pais, index) => {
    const posicion = String(index + 1).padStart(2, "0");
    const paisImagen = pais.imagen
      ? pais.imagen
      : `/assets/images/default.webp`;

    tableBodyHTML.innerHTML += `<tr>
                                    <td>
                                      <img class="pais-imagen" src="${paisImagen}" alt="Bandera del pais ${
      pais.nombre
    }">
                                    </td>
                                    <th scope="row">${posicion}</th>
                                    <td>
                                      ${pais.nombre}
                                      <div>
                                        <small class="fst-italic">${
                                          pais.continente ? pais.continente : ""
                                        }</small>
                                      </div>
                                    </td>
                                    <td>${pais.capital}</td>
                                    <td>${pais.ubicacion}</td>
                                    <td class="text-center">${
                                      pais.habitantes
                                    }</td>
                                    <td>
                                      <button class="btn btn-danger px-1" onclick="borrarPais(${index})">
                                        <i class="fa-solid fa-trash"></i>
                                      </button>
                                    </td>
                                </tr>`;
  });
}

function aplicarFiltroNombre(evtDesdeHTML) {
  const valorFiltro = evtDesdeHTML.target.value.toLowerCase();
  const paisesFiltrados = paisesLatinoamerica.filter(function (pais) {
    const nombrePais = pais.nombre.toLowerCase();

    if (nombrePais.includes(valorFiltro)) {
      return true;
    }
    return false;
  });

  renderizarTabla(paisesFiltrados);
}

function borrarPais(indice) {
  //ya no necesitamos trabajar con la copia
  // copiaArray.splice(indice, 1);
  // console.log(copiaArray);
  // renderizarTabla(copiaArray);
  //trabajamos con el original
  paisesLatinoamerica.splice(indice, 1);
  localStorage.setItem("paises", JSON.stringify(paisesLatinoamerica));
  console.log(paisesLatinoamerica);
  renderizarTabla(paisesLatinoamerica);
}

function calcularPoblacionTotal(listaPaises) {
  const acumuladoTotal = listaPaises.reduce(function (acumulador, item) {
    acumulador += item.habitantes;

    return acumulador;
  }, 0);

  const populationCell = document.getElementById("total");

  populationCell.innerText = acumuladoTotal;
}

function filtrarPaises() {
  const paisesFiltrados = paisesLatinoamerica.filter(function (pais) {
    //Filtrar paises con poblacion mayor a 1.5M
    console.log(pais.habitantes);

    if (pais.habitantes >= 15000000) {
      return true;
    }

    return false;
  });

  renderizarTabla(paisesFiltrados);
}

function pintarPaisesOriginales() {
  renderizarTabla(paisesLatinoamerica);
}

//formulario de carga de pais
countriesForm.addEventListener("submit", function (evt) {
  //Prevenir el comportamiento por defecto del evento onsubmit de recargar la página
  evt.preventDefault();
  const el = evt.target.elements;

  const nuevoPais = {
    nombre: el.nombre.value,
    ubicacion: el.ubicacion.value,
    habitantes: el.habitantes.valueAsNumber,
    capital: el.capital.value,
    imagen: el.imagen.value,
    continente: el.continente.value,
    active: el.active.checked,
  };

  // const formData = new FormData(evt.target);
  // const nuevoPais = Object.fromEntries(formData)
  // nuevoPais.active = nuevoPais.active  ? true : false;
  // nuevoPais.habitantes = nuevoPais.habitantes + 666666

  //guardamos objeto en array paises
  paisesLatinoamerica.push(nuevoPais);

  //actualizamos el array en localstorage
  localStorage.setItem("paises", JSON.stringify(paisesLatinoamerica));

  renderizarTabla(paisesLatinoamerica);

  evt.target.reset();
  el.nombre.focus();
});

// calcularPoblacionTotal(paisesLatinoamerica)
renderizarTabla(paisesLatinoamerica);
