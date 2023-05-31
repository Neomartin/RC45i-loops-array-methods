const paisesExport = [
    {
      nombre: "Argentina",
      ubicacion: "Sur de Sudamérica",
      habitantes: 45000000,
      capital: "Buenos Aires",
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg',
      continente: 'America'
    },
    {
      nombre: "Bolivia",
      ubicacion: "Centro de Sudamérica",
      habitantes: 11000001,
      capital: "La Paz",
      imagen: 'https://flags-world.com/wp-content/uploads/2021/01/flag-of-bolivia_1.png'
    },
    {
      nombre: "Brasil",
      ubicacion: "Este de Sudamérica",
      habitantes: 211000002,
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
      continente: 'America'
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

const otro = 'Otro valor exportado';

function successAlert(texto) {
  swal({
    title: 'Acción realizado con éxito',
    text: texto,
    icon: 'success'
  })
}

function capitalizeText(texto) {
  const primeraLetra = texto.charAt(0).toUpperCase();
  const resto = texto.slice(1).toLowerCase();
  return primeraLetra+resto;
}