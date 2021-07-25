function validar(){
    var resultado = true;
    var txtNombres = document.getElementById("nombres");
    var txtApellidos = document.getElementById("apellidos");
    var txtTelefono = document.getElementById("telefono");
    var txtEmail=document.getElementById("correo");
    var cmbProvincia=document.getElementById("provincia");
    var cmbCiudad=document.getElementById("ciudad");
    var fechaNac=document.getElementById("fecha");
    var txtContrasegna=document.getElementById("contrasegna");
    var txtConfContrasegna=document.getElementById("confContrasegna");



    var letra = /^[a-z ,.'-]+$/i;// letrasyespacio   ///^[A-Z]+$/i;// solo letras
    var telefonoreg = /^[0-9]{10}$/g; // para validar datos que deban tener 10 numeros
    var correoreg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var contrasegnaReg=/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/g
    limpiarMensajes();

    //validacion para nombre
    if(txtNombres.value=== ''){
        resultado = false;
        mensaje("Ingrese un nombre", txtNombres);       
    }else if(!letra.test(txtNombres.value)){
        resultado = false;
        mensaje("El nombre que ingresó no es valido", txtNombres);
    }else if(txtNombres.value.length > 25){
        resultado = false;
        mensaje("Los nombres que ingresó son muy largos", txtNombres);
    }

    //validacion para apellido
    if(txtApellidos.value=== ''){
        resultado = false;
        mensaje("Ingrese un apellido", txtApellidos);       
    }else if(!letra.test(txtApellidos.value)){
        resultado = false;
        mensaje("El apellido que ingresó no es valido", txtApellidos);
    }else if(txtApellidos.value.length > 35){
        resultado = false;
        mensaje("Los apellidos que ingresó son muy largos");
    }
     //validacion mail
     if(txtEmail.value===""){
        resultado = false;
        mensaje("Ingrese un email", txtEmail)
    }else if(!correoreg.test(txtEmail.value)){
        resultado=false;
        mensaje("Ingrese una dirección de correo valida", txtEmail);
    }
       //validacion telefono
    if(txtTelefono.value===""){
        resultado = false;
        mensaje("Ingrese un número de telefono", txtTelefono);
    }else if(!telefonoreg.test(txtTelefono.value)){
        resultado = false;
        mensaje("El telefono debe tener 10 digitos", txtTelefono);
    }
    var radiosGenero=document.formulario.genero;
    var sel = false;
    for (let i = 0; i < radiosGenero.length; i++) {
        if (radiosGenero[i].checked) {
            sel = true;
            break;
        }
    }
    if (!sel) {
        resultado = false;
        mensaje("Debe seleccionar un género", radiosGenero[0]);
    }
    var seleccionadoP=cmbProvincia.options[cmbProvincia.selectedIndex].text;
    if(seleccionadoP==="Seleccione.."){
        resultado = false;
        mensaje("Debe seleccionar una provincia", cmbProvincia);
    }
    var seleccionadoC=cmbCiudad.options[cmbCiudad.selectedIndex].text;
    if(seleccionadoC==="Seleccione.."){
        resultado = false;
        mensaje("Debe seleccionar una ciudad", cmbCiudad);
    }
    var dato=  fechaNac.value;
    var fechaN = new Date(dato);
    var anioN=fechaN.getFullYear();
    
    var fechaActual = new Date();// fecha actual
    var anioA =fechaActual.getFullYear();    
    if(fechaNac.value===''){
        resultado = false;
        mensaje("Debe ingresar la fecha",fechaNac);
    }
    else if(fechaN > fechaActual){
        resultado = false;
        mensaje("Fecha no puede ser superior a la actual",fechaNac);
   }else if(anioN < 1950){
        resultado = false;
        mensaje("Anio de nacimiento no puede ser menor a 1950",fechaNac);
   }else if((anioA - anioN) <18){
        resultado = false;
        mensaje("debe ser mayor de 18 años",fechaNac);
   }
   if(txtContrasegna.value===''){
        resultado = false;
        mensaje("Debe crear una contraseña",txtContrasegna);
   }
   else if(!contrasegnaReg.test(txtContrasegna.value)){
        resultado = false;
        mensaje("La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula",txtContrasegna);
   }
   if(txtContrasegna.value!==''){
    if(txtConfContrasegna.value===''){
        resultado = false;
        mensaje("Debe escribir la misma contraseña para confirmar",txtConfContrasegna);
    }
    else if(txtConfContrasegna.value!==txtContrasegna.value){
        resultado = false;
        mensaje("Debe escribir la misma contraseña para confirmar",txtConfContrasegna);
    }
   }
    return resultado;
}
function falso(){
return false;
}
function mensaje(cadenaMensaje, elemento){
    elemento.focus();
    var nodoPadre = elemento.parentNode;
    var nodoMensaje = document.createElement("p");
    nodoMensaje.innerHTML = cadenaMensaje;
    nodoMensaje.style.color = "red";
    nodoMensaje.style.fontSize = "13px";
    nodoMensaje.display = "block";
    nodoMensaje.setAttribute("class", "mensaje");
    nodoPadre.appendChild(nodoMensaje);

}

function limpiarMensajes(){
    var mensajes = document.querySelectorAll(".mensaje");
    for(let i=0; i< mensajes.length; i++){
        mensajes[i].remove();

    }
}