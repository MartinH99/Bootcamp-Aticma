/*Ej-1  cadena = "javascript"; dada la anterior cadena colocar la primera letra en mayúscula
      output => Javascript*/

/*function MaysPrimera(string) {
    let palabra = string.split(' ');

    return palabra.map(p => p[0].toUpperCase() + p.slice(1));
}

console.log(MaysPrimera("javascript"));*/

/*Ej-2 cadena = "javascript";  dada la anterior cadena colocar la ultima letra en mayúscula
    output => javascripT*/

/*function MaysUltima(string) {
    let palabra = string.split(' ');

    return palabra.map(p => p.slice(0, string.length - 1) + p[string.length - 1].toUpperCase());
}

console.log(MaysUltima("javascript"));*/




/*Ej-3 arr = ["foo", "bar", "baz", "qux", "origin"]
     buscar en ele array el elemento baz y mostrarlo console
     output =>  baz*/

/*
let arr = ["foo", "bar", "baz", "qux", "origin"];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "baz")
        console.log(arr[i]);
    else
        console.log("Todavia no lo encontre")

}
*/

/*Ej-4 arr = ["foo", "bar", "baz", "qux", "origin"]
     vaciar el arr
     output => [ ]*/

/*let arr = ["foo", "bar", "baz", "qux", "origin"];

console.log(arr);


for (let i = 0; i < arr.length; i++) {
    arr.splice(arr[i]);
}

console.log(arr);*/


/*Ej-5  1 str = "origin"
  eliminar las vocales del string
  output => rgn*/

/*let str = "origin";

console.log(str);

function eliminarVocales(str) {
    let resultado = str.replace(/[aeiou]/g, '')
    return resultado
}

const a = eliminarVocales(str);
console.log(a);*/