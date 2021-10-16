/**
 * 5 - Dado los siguientes vectores:
int var1={1,2,4,6,7,8}
int var2={1,2,4,5,6,7,8}
a - Mostrar de manera ordenada la unión de los elementos de ambos vectores.
 */

var var1 = [1, 2, 4, 6, 7, 8];
var var2 = [1, 2, 4, 5, 6, 7, 8];
var var3 = [...new Set( [...var1, ...var2] )];

var3.sort(function(a, b){return a - b});

console.log(var3);