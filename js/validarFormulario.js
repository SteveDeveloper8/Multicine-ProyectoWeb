function validar() {
    var resultado=true;
    var txtNombres = document.getElementById("nombres");
    var txtApellidos = document.getElementById("apellidos");
    var txtCedula = document.getElementById("cedula");
    var txtEmail = document.getElementById("email");
    var contrasena=document.getElementById("contrasena");
    var confirmarcion=document.getElementById("confirmacion");
    var txtTelefono = document.getElementById("telefono");
    var txtFechaNac = document.getElementById("fechaNac");
    var selectCiudad = document.getElementById("ciudad");
    var txtDireccion = document.getElementById("domicilio");


    var letraVal = /^[a-z ,.'-]+$/i;// letrasyespacio   ///^[A-Z]+$/i;// solo letras
    var correoVal = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var telefonoVal = /^[0-9]{10}$/g; // para validar datos que deban tener 10 numeros
    var cedulaVal = /^[0-9]{10}$/g;
    var direccionVal = /^[A-Za-z0-9]+/g;
    var contrasenaVal=/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;



    limpiarMensajes();
    //validacion para nombre
    if(txtNombres.value=== ""){
        resultado = false;
        mensaje("Ingrese un nombre*", txtNombres);       
    }else if(!letraVal.test(txtNombres.value)){
        resultado = false;
        mensaje("El nombre que ingresó no es valido*", txtNombres);
    }else if(txtNombres.value.length > 22){
        resultado = false;
        mensaje("Los nombres que ingresó son muy largo*", txtNombres);
    }

    //validacion para apellido
    if(txtApellidos.value=== ""){
        resultado = false;
        mensaje("Ingrese un apellido*", txtApellidos);       
    }else if(!letraVal.test(txtApellidos.value)){
        resultado = false;
        mensaje("El apellido que ingresó no es valido*", txtApellidos);
    }else if(txtApellidos.value.length > 22){
        resultado = false;
        mensaje("Los apellidos ingresados son muy largos*");
    }

    //validacion cedula
    if(txtCedula.value===""){
        resultado = false;
        mensaje("Ingrese un número de cedula*", txtCedula);
    }else if(!cedulaVal.test(txtCedula.value)){
        resultado=false;
        mensaje("Ingrese una cedula valida*",txtCedula);
    }

    //validacion mail
    if(txtEmail.value===""){
        resultado = false;
        mensaje("Ingrese un email*", txtEmail)
    }else if(!correoVal.test(txtEmail.value)){
        resultado=false;
        mensaje("Ingrese una dirección de correo valida*", txtEmail);
    }

     //validacion telefono
    if(txtTelefono.value===""){
        resultado = false;
        mensaje("Ingrese un número de telefono*", txtTelefono);
    }else if(!telefonoVal.test(txtTelefono.value)){
        resultado = false;
        mensaje("Ingrese un telefono valido*", txtTelefono);
    }


     //validacion direccion
     if(txtDireccion.value===""){
        resultado = false;
        mensaje("Ingrese una direccion*", txtDireccion);
    }else if(!direccionVal.test(txtDireccion.value)){
        resultado = false;
        mensaje("Ingrese una direccion valida*",txtDireccion);
    }


    var dato= txtFechaNac.value;
    var fechaN = new Date(dato);
    var anioN=fechaN.getFullYear();
    var fechaActual = new Date();// fecha actual
    var anioA =fechaActual.getFullYear();    
    
    if(txtFechaNac.value===""){
        resultado=false;
        mensaje("Ingrese una fecha*",txtFechaNac);
    }
    if(fechaN > fechaActual){
        resultado = false;
        mensaje("Fecha no válida",txtFechaNac);
   }else if(anioN < 1950){
        resultado = false;
        mensaje("Año de nacimiento tiene que ser mayor a 1950",txtFechaNac);
   }else if((anioA - anioN) <18){
       resultado = false;
        mensaje("Debe ser mayor de edad",txtFechaNac);
   }


    if (selectCiudad.value === null || selectCiudad.value === '0') {
        resultado = false;
        mensaje("Debe seleccionar una ciudad*", selectCiudad);
    }
    
    if(contrasena.value===""){
        resultado=false;
        mensaje("Ingrese una contraseña*", contrasena);
    }else if(!contrasenaVal.test(contrasena.value)){
        resultado=false;
        mensaje("La contraseña debe tener entre 8 y 16 caracteres, </br>un dígito, una minúscula y una mayúscula.",contrasena);
    }

    if(confirmarcion.value===""){
        resultado=false;
        mensaje("Ingrese la confirmacion de contraseña*",confirmarcion);
    }else if(confirmarcion.value!=contrasena.value){
        resultado=false;
        mensaje("La contrasena no coincide*",confirmarcion);
    }


    return resultado;

}

function mensaje(cadenaMensaje, elemento){
    elemento.focus();
    var nodoPadre = elemento.parentNode;
    var nodoMensaje = document.createElement("div");
    nodoMensaje.innerHTML = cadenaMensaje;
    nodoMensaje.style.color = "#e80c4d";
    nodoMensaje.style.fontWeight = "bold";
    nodoMensaje.style.paddingTop = "2px";
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