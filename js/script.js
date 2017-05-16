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

	var chck = document.createElement("input");
	chck.type = "checkbox";
	chck.setAttribute("class","check");
	var basura = document.createElement("span");
	basura.classList.add("fa","fa-trash-o");
	var cora = document.createElement("span");
	cora.classList.add("fa","fa-heart");

	nuevasTareas.appendChild(chck);
	nuevasTareas.appendChild(basura);
	nuevasTareas.appendChild(cora);

	
}







