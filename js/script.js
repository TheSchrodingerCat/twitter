function agregar(){
	var tareas = document.getElementById("tarea").value;
	document.getElementById("tarea").value = "";

	var cont = document.getElementById("contenedor");

	var nuevasTareas = document.createElement("div");
	var textoNuevaTarea = document.createTextNode(tareas);
	var elementoContenedor = document.createElement("span");

	elementoContenedor.appendChild(textoNuevaTarea);
	nuevasTareas.appendChild(elementoContenedor);
	cont.appendChild(nuevasTareas);



	
}







