function llenarComboProvincias(comboBox){
    var i=1;
    limpiarComboProvincias(comboBox);
    agregarOpcion(comboBox,"Seleccione..", 0);
    provincias.forEach(provincia => {
        agregarOpcion(comboBox, provincia.nombre, i);
        i++;
    });
    var cmbCiudades=document.getElementById("ciudad");
    limpiarComboCiudades(cmbCiudades);
    agregarOpcion(cmbCiudades,"Seleccione..", 0);
}
function agregarOpcion(comboBox,nombre, indice){
    var opcion=document.createElement("OPTION");
    opcion.value=indice;
    opcion.innerHTML=nombre;
    comboBox.appendChild(opcion);
}
function limpiarComboProvincias(comboBox){
    var opciones=document.querySelectorAll("#provincia option");
    opciones.forEach(opcion => {
        comboBox.removeChild(opcion);
    });
}
function limpiarComboCiudades(comboBox){
    var opciones=document.querySelectorAll("#ciudad option");
    opciones.forEach(opcion => {
        comboBox.removeChild(opcion);
    });
}
function llenarComboCiudades(comboBox){
    limpiarComboCiudades(comboBox);
    var combo= document.getElementById("provincia");
    var seleccionado=combo.options[combo.selectedIndex].text;
    agregarOpcion(comboBox,"Seleccione..", 0);
    provincias.forEach(provincia => {
        if(provincia.nombre===seleccionado){
            var i=1;
            provincia.ciudades.forEach(ciudad=>{
                agregarOpcion(comboBox, ciudad.nombre, i);
                i++;
            });

        }
    });
}