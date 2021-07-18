function cambiarSeccion(encabezado)
{
    limpiarMenu();
    encabezado.style.backgroundColor="rgb(207, 27, 111)";
    limpiarMostrador();
    mostrarSeccion(encabezado.id);
}
function mostrarSeccion(id)
{
    var seccion=document.getElementsByName(id)[0];
    seccion.style.display="flex";
}
function limpiarMostrador()
{
    var secciones=document.querySelectorAll(".mostrador")
    secciones.forEach(element => {
        element.style.display="none";
    });
}
function limpiarMenu()
{
    var encabezados=document.querySelectorAll(".bar-menu div");
    encabezados.forEach(element => {
        element.style.backgroundColor="gray";
    });
}