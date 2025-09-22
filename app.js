// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Creación de un array para almacenar los nombres de amigos ingresados
let amigos = [];

// Implementación de la función para agregar amigos
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Validación de una entrada vacía en el campo "Escribe un nombre"
    if (nombre === "") {
        alert("Por favor, inserta el nombre de un amigo(a).");
        return;
    }

    // Agregando un nombre digitado en el campo "Escribe un nombre" al array
    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

// Implementación de la función para actualizar de la lista de amigos
function actualizarLista() {
    const listaDOM = document.getElementById('listaAmigos');
    // Limpieza de la lista existente
    listaDOM.innerHTML = "";
    // Iteración sobre el arreglo y agregación de elementos a la lista
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaDOM.appendChild(li);
    }
}

// Implementación de la función para sortear al amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega al menos el nombre de un(a) amigo(a) antes de sortear.");
        return;
    }
        // Generar un número entero aleatorio entre 0 y amigos.length - 1, lo que representará el índice de un amigo dentro del array
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        // Tomar el nombre en la posición aleatoria del array amigos, siendo este el "amigo secreto" seleccionado
        const nombreSorteado = amigos[indiceAleatorio];
        // Accede al elemento <ul id="resultado"> en el HTML y limpia cualquier mensaje de sorteo anterior para no duplicar resultados
        const resultadoDOM = document.getElementById('resultado');
        resultadoDOM.innerHTML = "";