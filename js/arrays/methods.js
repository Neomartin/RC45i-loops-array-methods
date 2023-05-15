const paisesLatinoamerica = [
    {
      nombre: "Argentina",
      ubicacion: "Sur de Sudamérica",
      habitantes: 45000000,
      capital: "Buenos Aires",
    },
    {
      nombre: "Bolivia",
      ubicacion: "Centro de Sudamérica",
      habitantes: 11000000,
      capital: "La Paz",
    },
    {
      nombre: "Brasil",
      ubicacion: "Este de Sudamérica",
      habitantes: 211000000,
      capital: "Brasilia",
    },
    {
      nombre: "Chile",
      ubicacion: "Sur de Sudamérica",
      habitantes: 19000000,
      capital: "Santiago",
    },
    {
      nombre: "Colombia",
      ubicacion: "Norte de Sudamérica",
      habitantes: 50340000,
      capital: "Bogotá",
    },
    {
      nombre: "Costa Rica",
      ubicacion: "Centroamérica",
      habitantes: 5100000,
      capital: "San José",
    },
    {
      nombre: "Cuba",
      ubicacion: "El Caribe",
      habitantes: 11400000,
      capital: "La Habana",
    },
    {
      nombre: "Ecuador",
      ubicacion: "Oeste de Sudamérica",
      habitantes: 17300000,
      capital: "Quito",
    },
    {
      nombre: "El Salvador",
      ubicacion: "Centroamérica",
      habitantes: 6500000,
      capital: "San Salvador",
    },
    {
      nombre: "Guatemala",
      ubicacion: "Centroamérica",
      habitantes: 18200000,
      capital: "Ciudad de Guatemala",
    },
    {
      nombre: "Honduras",
      ubicacion: "Centroamérica",
      habitantes: 10000000,
      capital: "Tegucigalpa",
    },
    {
      nombre: "México",
      ubicacion: "Norte de América Central",
      habitantes: 128900000,
      capital: "Ciudad de México",
    },
    {
      nombre: "Nicaragua",
      ubicacion: "Centroamérica",
      habitantes: 6400000,
      capital: "Managua",
    },
    {
      nombre: "Panamá",
      ubicacion: "Centroamérica",
      habitantes: 4300000,
      capital: "Ciudad de Panamá",
      bandera: 'http://dasdsa'
    },
    {
      nombre: "Paraguay",
      ubicacion: "Centro de Sudamérica",
      habitantes: 7200000,
      capital: "Asunción",
    },
];

const copiaArray = structuredClone(paisesLatinoamerica);

const tableBodyHTML = document.getElementById("tableBody");



function aplicarFiltroNombre(evtDesdeHTML) {

  const valorFiltro = evtDesdeHTML.target.value.toLowerCase();
  const paisesFiltrados = paisesLatinoamerica.filter(function(pais) {

      const nombrePais = pais.nombre.toLowerCase();

      if(nombrePais.includes(valorFiltro)) {
        return true;
      }
      return false;
  })

  renderizarTabla(paisesFiltrados)

}

function borrarPais(indice) {
  copiaArray.splice(indice, 1);
  console.log(copiaArray)
  renderizarTabla(copiaArray)
}


function calcularPoblacionTotal(listaPaises) {

  const acumuladoTotal = listaPaises.reduce( function(acumulador, item) {

      acumulador += item.habitantes;

      return acumulador
  }, 0);

  const populationCell = document.getElementById('total');

  populationCell.innerText = acumuladoTotal


}

calcularPoblacionTotal(paisesLatinoamerica)

function renderizarTabla(arrayDePaises) {

  calcularPoblacionTotal(arrayDePaises);
  
  tableBodyHTML.innerHTML = '';

  arrayDePaises.forEach((algo, index) =>  {

    const posicion = String(index + 1).padStart(2, '0');

    tableBodyHTML.innerHTML += `<tr>
                                    <th scope="row">${posicion}</th>
                                    <td>${algo.nombre}</td>
                                    <td>${algo.capital}</td>
                                    <td>${algo.ubicacion}</td>
                                    <td class="text-center">${algo.habitantes}</td>
                                    <td>
                                      <button class="btn btn-danger px-1" onclick="borrarPais(${index})">
                                        <i class="fa-solid fa-trash"></i>
                                      </button>
                                    </td>
                                </tr>`;
    })
}

renderizarTabla(paisesLatinoamerica);

function filtrarPaises() {

  const paisesFiltrados = paisesLatinoamerica.filter(function(pais) {
    //Filtrar paises con poblacion mayor a 1.5M
    console.log(pais.habitantes);
  
    if(pais.habitantes >= 15000000) {
      return true
    }
    
    return false
    
  })

  renderizarTabla(paisesFiltrados)

}

function pintarPaisesOriginales() {
  renderizarTabla(paisesLatinoamerica)
}