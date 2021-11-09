var fecha = v => {
    console.log("Dia " + v.toLocaleDateString("es-ar", { weekday: 'long' }));
    console.log("Hora: " + v.getHours() + ":" + v.getMinutes());
}

var fec = new Date();

fecha(fec);