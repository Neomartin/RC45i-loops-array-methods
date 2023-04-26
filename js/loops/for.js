// let i = 0;
// while(i < 10) {
//     //sintaxis 
//     //sintaxis 
//     //sintaxis 
//     //sintaxis 
//     //sintaxis 
//     //sintaxis 
//     i++
// }
 
//inicializar una var //condicion   //incr o decr de la var
console.time('pow')
for(let i = 1;  i <= 10000; i++) {

    const res = Math.pow(i, 2)
    document.write(`${i} ^ 2 =  ${res} <br>`);
    if(res === 1681) {
        break;
    }

}
console.timeEnd('pow')

// cálculo de descuento