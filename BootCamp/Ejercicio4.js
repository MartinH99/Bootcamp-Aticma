/**
 * 4 - Realizar un script llamado Ejercicio4.js, que dado un array, ordene sus valores de menor
a mayor y los muestre por pantalla.
 */

const miArreglo = [1,4,2,18,13,9]

miArreglo.sort(function(a, b){return a - b});

for(var i=0;i<miArreglo.length;i++){
    console.log(miArreglo[i]);
}
