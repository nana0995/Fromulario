function agregarElementos(){

	elemento = document.getElementById("cuerpotabla");
	var genero;
	var condicionActual; /* condicion actual*/

	if(document.getElementById("genero1")checked){
		genero = document.getElementById("genero1").title;
	}else{
		genero  document.getElementById("genero2").title;
	}


	if (document.getElementById("condicion1").checked){
		condicionActual = document.getElementById("condicion1").title;
	} else if(document.getElementById("condicion2").checked){
		condicionActual = domecnt.getElementById("condicion2").title;
	} else{
		condicionActual = "ninguno";
	}
	 
	

	if(validarVacio("cedula")==false
		|| validarVacio("nombre")=false || validarVacio("telefono")==false
		|| validarVacio("nombre")==false || validarVacio("telefono")==false
		|| validarVacio("direccion")==false || validarVacio("observaciones")==false
		|| validarVacio("email")==0  || validarVacio("edad")==false){
		alert("Todos los campos son requeridos");
	}else if(validarEmail(document.getElementById("email").value)==false){
		alert("Email incorrecto");
	}else{
		elemento.innerHTML += 
		"<tr><td>"+document.getElementById("cedula").value+"</td><td>"+document.getElementById("nombre").value+
		"</td><td>"+document.getElementById("telefono").value+"</td><td>"+document.getElementById("direccion").value+"</td><td>"+
		document.getElementById("email").value+"</td><td>"+document.getElementById("estadocivil").value+"</td><td>"+
		document.getElementById("edad").value+"</td><td>"+genero+"</td><td>"+condicionActual+"</td><td>"
		+document.getElementById("observaciones").value+"</td></tr>";
	}
}

function validarVacio(elemento_id){ //Validamos para que no permita campos vacíos
	
	valor = document.getElementById(elemento_id).value;
	
	if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
		return false;
	}
}

function validarMaxLength(me,count,e){ //Validamos para que solo se permita un máximo de caracteres
	 tecla = (document.all) ? e.keyCode : e.which;
	 if (tecla==8)
	 return true;
	 if(me.value.length>=count)
	 return false;
}

function validarOnlyLet(e) { //Validamos para que solo se permita letras
	tecla = (document.all) ? e.keyCode : e.which;
	if ((tecla==8)
	|| (tecla==241)
	|| (tecla==209)
	|| (tecla==193)
	|| (tecla==201)
	|| (tecla==205)
	|| (tecla==211)
	|| (tecla==218)
	|| (tecla==225)
	|| (tecla==233)
	|| (tecla==237)
	|| (tecla==243)
	|| (tecla==250))
		return true;
	patron =/[A-Za-z\s]/;
	te = String.fromCharCode(tecla);
	return patron.test(te);
}

function validarOnlyNum(e) { //Validamos para que solo se permita números
	tecla = (document.all) ? e.keyCode : e.which;
	if ((tecla==8) || (tecla==45)) return true;
	patron =/\d/;
	te = String.fromCharCode(tecla);
	return patron.test(te);
}

function validarEmail(email) { //Validamos para que solo se permita formato email
	var at = email.lastIndexOf("@");
	
	// asegurarse que el símbolo @ existe
	if (at < 1 || (at + 1) === email.length)
		return false;
	
	
	if (/(\.{2,})/.test(email))
		return false;
	
	// Dividir las porciones local y de dominio
	var local = email.substring(0, at);
	var domain = email.substring(at + 1);
	
	// Consultar longitudes
	if (local.length < 1 || local.length > 64 || domain.length < 4 || domain.length > 255)
		return false;
	
	// Asegúrese de que el dominio local y el dominio no comience con un punto ni termine con un punto
	if (/(^\.|\.$)/.test(local) || /(^\.|\.$)/.test(domain))
		return false;
	

	// Verifique las direcciones de cadenas entre comillas
	// Dado que casi todo está permitido en una dirección de cadena entre comillas,
	// solo vamos a dejarlos pasar
	if (!/^"(.+)"$/.test(local)) {
		//Si es una dirección de cadena de puntos ... compruebe si hay caracteres válidos
		if (!/^[-a-zA-Z0-9!#$%*\/?|^{}`~&'+=_\.]*$/.test(local))
			return false;
	}

	// Asegúrese de que el dominio contenga solo caracteres válidos y al menos un punto
	if (!/^[-a-zA-Z0-9\.]*$/.test(domain) || domain.indexOf(".") === -1)
		return false;

	return true;
}

function validarEdad(event){

	var key = event.which || event.keyCode;
	var num = parseInt(edad.value + String.fromCharCode(key));
	
	if (num < 0 || num > 130){
		return false;
	} 
}

