var Extension = v => {
    let estension = v.split('.');
    let nombre = extension.length - 1;

    if (nombre === 0)
        return "No tiene extension"
    else
        return '.' + extension[index]
}


let ext = prompt("Ingrese una extension: ");

console.log(Extension(ext));