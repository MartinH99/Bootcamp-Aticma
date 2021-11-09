var relaciones = (v) => {
    switch (v) {
        case "Ricardo":
            console.log(v + " es tu tio");
            break;
        case "Roberto":
            console.log(v + " es tu hermano");
            break;
        case "Dinamita":
            console.log(v + " es tu tio");
            break;
        case "Argentina":
            console.log(v + " es tu pais");
            break;
        default:
            console.log("No hay relacion");
            break;
    }
};


let str = prompt("Ingrese una cadena: ")
relaciones(str);