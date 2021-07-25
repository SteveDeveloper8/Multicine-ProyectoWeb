function cambiarSeccion(encabezado)
{
    limpiarMenu();
    encabezado.style.backgroundColor="rgb(207, 27, 111)";
    limpiarMostrador();
    mostrarSeccion(encabezado.id);
}
function mostrarSeccion(clase)
{
    var seccion=document.getElementsByClassName(clase)[0]; 
    seccion.style.display="flex";
    seccion.style.visibility="visible";
}
function limpiarMostrador()
{
    var secciones=document.querySelectorAll(".mostrador")
    secciones.forEach(element => {
        element.style.display="none";
        element.style.visibility="hidden";
    });
}
function limpiarMenu()
{
    var encabezados=document.querySelectorAll(".bar-menu div");
    encabezados.forEach(element => {
        element.style.backgroundColor="gray";
    });
}