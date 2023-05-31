const paisesLatinoamerica = JSON.parse(localStorage.getItem("paises")) || [];

const copiaArray = structuredClone(paisesLatinoamerica);
const tableBodyHTML = document.getElementById("tableBody");
const countriesForm = document.getElementById("countries-form");
let editIndex;


function editarPais(index) {
  

  //buscar el pais con el index proveniente del click en el botón editar
  let pais = paisesLatinoamerica.find((pais, idx) => {
      if(pais.id === index) {
        editIndex = idx;
        return true
      }
  });

  renderSubmitBtn()

  if(!pais) {
    swal('Error', 'Error', 'error');
    return;
  }
  console.log(pais)

  //rellenar el formulario con los datos del pais
  const el = countriesForm.elements;

  countriesForm.elements.nombre.value = pais.nombre;
  countriesForm.elements.capital.value = pais.capital;
  countriesForm.elements.ubicacion.value = pais.ubicacion;
  countriesForm.elements.habitantes.valueAsNumber = pais.habitantes;
  countriesForm.elements.imagen.value = pais.imagen;
  countriesForm.elements.continente.value = pais.continente;
  countriesForm.elements.active.checked = pais.active;

  //En vez de agregar un elemento al array debería reemplazar el elemento en el index expecífico
}

function agregarEditarPais(evt) {
    //Prevenir el comportamiento por defecto del evento onsubmit de recargar la página
    evt.preventDefault();
    const el = evt.target.elements;

    const pais = {
      nombre: el.nombre.value,
      ubicacion: el.ubicacion.value,
      habitantes: el.habitantes.valueAsNumber,
      capital: el.capital.value,
      imagen: el.imagen.value,
      continente: el.continente.value,
      active: el.active.checked,
      id: Date.now()
    };

    //guardamos objeto en array paises
    // ?Estoy agregando un nuevo pais o estoy editando un país
    if(editIndex) {
      //Reemplazar
      paisesLatinoamerica[editIndex] = pais;
      editIndex = undefined
    } else {
      //Agregar
      paisesLatinoamerica.push(pais);
    }
    renderSubmitBtn();

    //actualizamos el array en localstorage
    localStorage.setItem("paises", JSON.stringify(paisesLatinoamerica));

    renderizarTabla(paisesLatinoamerica);

    evt.target.reset();
    el.nombre.focus();
}

function renderSubmitBtn() {
  const submitBtnHTML =  document.getElementById('submit-btn');
  if(editIndex) {
    submitBtnHTML.innerText = 'Editar Producto'
    submitBtnHTML.classList.add('btn-success')
    submitBtnHTML.classList.remove('btn-primary')
  } else {
    submitBtnHTML.innerText = 'Cargar Producto'
    submitBtnHTML.classList.remove('btn-success')
    submitBtnHTML.classList.add('btn-primary')
  }
}


//formulario de carga de pais
countriesForm.addEventListener("submit", (evento) => agregarEditarPais(evento));

function ordenarPaises(order) {
  const valorOrdenamiento = order ? 1 : -1;

  paisesLatinoamerica.sort((a, b) => {
    if(a.nombre.toLowerCase() < b.nombre.toLowerCase()) {
      return valorOrdenamiento
    } else if(a.nombre.toLowerCase() > b.nombre.toLowerCase()) {
      return -valorOrdenamiento
    } else {
      return 0
    }
    
  });

  // ?SOLUCION 2
  // const collator = new Intl.Collator('es-AR', { sensitivity: 'base' });

  // paisesLatinoamerica.sort((a, b) => {
  //   if(order) return collator.compare(b.nombre, a.nombre)
  //   return collator.compare(a.nombre, b.nombre)
  // })

  renderizarTabla(paisesLatinoamerica);
}






















function renderizarTabla(arrayDePaises) {
  calcularPoblacionTotal(arrayDePaises);
  tableBodyHTML.innerHTML = "";
  arrayDePaises.forEach((pais, index) => {
    const posicion = String(index + 1).padStart(2, "0");
    const paisImagen = pais.imagen ? pais.imagen : `/assets/images/default.webp`;

    tableBodyHTML.innerHTML +=
      `<tr>
        <td>
          <img class="pais-imagen" src="${paisImagen}" alt="Bandera del pais ${pais.nombre}">
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
          <button class="btn btn-danger px-1" onclick="borrarPais(${pais.id})">
            <i class="fa-solid fa-trash"></i>
          </button>
          <button class="btn btn-success px-1" onclick="editarPais(${pais.id})">
            <i class="fa-solid fa-edit"></i>
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

function borrarPais(idBorrar) {
  console.log(idBorrar)
  //ya no necesitamos trabajar con la copia
  // copiaArray.splice(indice, 1);
  // console.log(copiaArray);
  // renderizarTabla(copiaArray);
  //trabajamos con el original                        false
  const idx = paisesLatinoamerica.findIndex(pais => pais.id === idBorrar);

  // No encontró coincidencia
  console.log(idx)
  if (idx === -1) {
    return swal('Error', 'El pais no se pudo borrar', 'error')
  }
  console.log(`sigu`)
  paisesLatinoamerica.splice(idx, 1);
  localStorage.setItem("paises", JSON.stringify(paisesLatinoamerica));
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



// calcularPoblacionTotal(paisesLatinoamerica)
renderizarTabla(paisesLatinoamerica);