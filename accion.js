
//CAMBIO DE ENCABEZADO 
function tituloOver(obj) {
  obj.innerHTML = "Developer"
}

function tituloOut(obj) {
  obj.innerHTML = "Front-end"
}

// FUNCION DE LOS BOTONES DE CONTACTOS
document.getElementById('mostrar').onclick = function () {
  document.getElementById('inf-contacto').style.display = "block";
}
document.getElementById('ocultar').onclick = function () {
  document.getElementById('inf-contacto').style.display = "none";
}

function descargarPDF() {
  const url = 'descarga/CV-RiosDavid.pdf';
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', '');
  link.click();
}

