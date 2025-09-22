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