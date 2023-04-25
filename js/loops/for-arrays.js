const paisesLatam = [
    "Argentina",
    "Bolivia",
    "Brasil",
    "Chile",
    "Colombia",
    "Ecuador",
    "Guyana",
    "Guyana Francesa",
    "Paraguay",
    "Perú",
    "Suriname",
    "Uruguay",
    "Venezuela",
    "Guyana",
    "Guyana Francesa",
    "Paraguay",
    "Perú",
    "Suriname",
    "Uruguay",
    "Venezuela",
];

for(let i = 0; i < paisesLatam.length; i++ ) {
    let numero = (paisesLatam.length - i); //resultado numérico
    const numeroToString = String(numero);
    const numeroTwoDigits = numeroToString.padStart(2, '0');
    // if(numero < 10) numero = '00' + numero; 
    // if(numero < 100) numero = '0' + numero; 


    document.write(`<p>${numeroTwoDigits} - ${paisesLatam[i]}</p>`);
    // dasdasdasdas
}