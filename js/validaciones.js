function validar(){
    var resultado = true;
    var txtNombres = document.getElementById("nombres");
    var txtApellidos = document.getElementById("apellidos");
    var txtCedula = document.getElementById("cedula");
    var txtTarjeta = document.getElementById("tarjeta");
    var txtEmail = document.getElementById("mail");
    var txtTelefono = document.getElementById("telefono");
    var selectComplejo = document.getElementById("cboComplejo");
    var selectConsulta = document.getElementById("cboConsulta");
    var txtPelicula = document.getElementById("pelicula");
    var txtFecha = document.getElementById("fecha");
    var txtComentario = document.getElementById("texto");


    var letra = /^[a-z ,.'-]+$/i;// letrasyespacio   ///^[A-Z]+$/i;// solo letras
    var correo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var telefonoreg = /^[0-9]{10}$/g; // para validar datos que deban tener 10 numeros
    var cedulareg = /^[0-9]{10}$/g;
    var tarjetareg = /^[0-9]{14}$/g;
    var correoreg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var peliculareg = /^[A-Za-z0-9]+/g;
    var comentarioreg = /^[A-Za-z0-9]+/g;
    

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
        mensaje("Los nombres que ingresó son muy largo", txtNombres);
    }

    //validacion para apellido
    if(txtApellidos.value=== ''){
        resultado = false;
        mensaje("Ingrese un apellido", txtApellidos);       
    }else if(!letra.test(txtApellidos.value)){
        resultado = false;
        mensaje("El apellido que ingresó no es valido", txtApellidos);
    }else if(txtApellidos.value.length > 25){
        resultado = false;
        mensaje("Los apellidos que ingresó son muy largos");
    }

    //validacion numero de cedula
    if(txtCedula.value===""){
        resultado = false;
        mensaje("Ingrese un número de cedula", txtCedula);
    }else if(!cedulareg.test(txtCedula.value)){
        resultado=false;
        mensaje("La cedula debe tener 10 digitos",txtCedula);
    }

    //validacion tarjeta multi cines
    if(txtTarjeta.value===""){
        resultado = false;
        mensaje("Ingrese el número de su Tarjeta Multicine", txtTarjeta);
    }else if(!tarjetareg.test(txtTarjeta.value)){
        resultado =false;
        mensaje("La tarjeta debe tener 14 digitos", txtTarjeta);
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

    //validacion para complejo
    if(selectComplejo.value===null || selectComplejo.value==='0'){
        resultado = false;
        mensaje("Debe seleccionar un complejo", selectComplejo);
    }

    //validacion para consulta
    if(selectConsulta.value===null || selectConsulta.value==='0'){
        resultado = false;
        mensaje("Debe seleccionar un tipo de consulta", selectConsulta);

    }

    //validacion pelicula
    if(txtPelicula.value===""){
        resultado = false;
        mensaje("Ingrese el nombre de una pelicula", txtPelicula);
    }else if(!peliculareg.test(txtPelicula.value)){
        resultado = false;
        mensaje("Ingrese una pelicula valida",txtPelicula);
    }

    //validacion fecha
    var dato = txtFecha.value;
    var fechaV = new Date(dato);
    var mesV = fechaV.getMonth(dato)+1;
    var fechaActual = new Date();
    
    if(txtFecha.value===""){
        resultado = false;
        mensaje("Ingrese una fecha", txtFecha);
    }else if(fechaV > fechaActual){
        resultado = false;
        mensaje("Ingrese una fecha valida",txtFecha);
    }else if(mesV != fechaActual.getMonth()+1){
        resultado = false;
        mensaje("El mes da error",txtFecha);
    }
    else if(fechaV.getFullYear() != fechaActual.getFullYear()){
        resultado =false;
        mensaje("Ingrese una fecha actual",txtFecha);

    }

    //validacion comentario
    if(txtComentario.value===""){
        resultado = false;
        mensaje("Ingrese un comentario", txtComentario);
    }else if(!comentarioreg.test(txtComentario.value)){
        resultado = false;
        mensaje("Ingrese un comentario sin simbolos",txtComentario);
    }

    return resultado;
}

function mensaje(cadenaMensaje, elemento){
    elemento.focus();
    var nodoPadre = elemento.parentNode;
    var nodoMensaje = document.createElement("span");
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