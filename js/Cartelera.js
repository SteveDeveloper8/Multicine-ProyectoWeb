function seleccionarDia(encabezado)
{
    limpiarMenu();
    encabezado.style.backgroundColor="rgb(35, 153, 207)";
    limpiarSeleccion();
    diaSeleccionado(encabezado.id);
}
function diaSeleccionado(id)
{
    var seccion=document.getElementsByClassName(id)[0]; 
    seccion.style.display="flex";
    seccion.style.visibility="visible";
}
function limpiarSeleccion()
{
    var secciones=document.querySelectorAll(".seleccionDia")
    secciones.forEach(element => {
        element.style.display="none";
        element.style.visibility="hidden";
    });
}
function limpiarMenu()
{
    var encabezados=document.querySelectorAll(".semana div");
    encabezados.forEach(element => {
        element.style.backgroundColor="gray";
    });
}