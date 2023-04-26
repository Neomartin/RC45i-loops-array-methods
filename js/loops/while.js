//! WHILE Y FOR NO SON MÉTODOS ESPECÍFICOS DE LOS ARRAY
// const repeteciones = parseInt(prompt(`Ingresar número de veces que se va a ejecutar mi bucle`))
// let i = 1;
// while(i <= repeteciones) {
//     console.log(`${i}- Con Bucle while`)
//     i++;
// }

//Pedir que nos ingresen un número
// Mostrar por consola la tabla de multiplicar (1-10) de dicho número
const numero = parseInt(prompt(`Ingresar númerodel cual quiere obtener la tabla de multiplicación`));

let i = 11;

while(i <= 10) {

    const multiplicacion = i * numero;

    console.log(`Resultado de ${i} x ${numero} = ${i*numero}`);

    i++;

}

/* 
    Suma de números naturales:
    Pedir a los estudiantes que escriban un programa que calcule la suma de los primeros n números naturales utilizando un bucle while. Por ejemplo, si n es 5, la suma sería 1 + 2 + 3 + 4 + 5 = 15.
*/



console.log(`Termino el script`);