$("#btn0").click(function(){
    alert("Mensaje con Alert");    
});

//ejemplo básico con opción de TYPE  //tipos de popups: error, success, warning, info, question
$("#btn1").click(function(){
  Swal.fire({        
    type: 'success',
    title: 'Éxito',
    text: '¡El formulario ha sido reestablecido!',        
});
});	



//Con imagenes
$("#btn3").click(function(){
    Swal.fire({
        imageUrl: 'img/canje.jpg',
        imageHeight: 412,
        imageAlt: 'A tall image'
    });
});	

$("#btn4").click(function(){
  Swal.fire({
      imageUrl: 'img/descargaVW.png',
      imageHeight: 412,
      imageAlt: 'A tall image'
  });
});	

function obtenerDatos()
{
var nombre=document.getElementById('inputNombre').value;
var apellido=document.getElementById('inputApellido').value;
var email=document.getElementById('inputEmail').value;
var provincia=document.getElementById('inputProvincia').value;
var consulta=document.getElementById('Textarea1').value;

var formInfo = {"nombre": nombre,"apellido": apellido,"email":email,"provincia":provincia,"consulta":consulta};


console.log(formInfo);

/*
Se continuara generando la persistencia de datos en el archivo information.json

setTimeout(function(){ ; }, 3000);

*/

}

function tirarMensaje()
{
  
  event.preventDefault();

  Swal.fire({
  title: '¿Seguro de enviar el formulario?',
  type: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Si',
  cancelButtonText: "No",
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
}).then((result) => {
  if (result.value) {
  document.formulario_registro.submit();
  }
  return false;
})
}
