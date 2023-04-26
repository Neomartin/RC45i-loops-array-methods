let edad;

do {

    edad  = parseInt(prompt('Ingrese la edad de la persona'));
    
} while(edad < 5 || edad > 130)

// while(edad < 5 || edad > 130) {
//     console.log(`La edad ingresada no es correcta`)
//     edad = parseInt(prompt('Ingrese la edad de la persona'));
// }

console.log(`Salio del bucle`)