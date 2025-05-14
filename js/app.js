// Capturar el formulario por su ID
const taskForm = document.getElementById("task-form");

// Capturar el contenedor donde se mostrarán las tareas
const taskList = document.getElementById("task-list");

// Al cargar la página, inyectar las tareas almacenadas en localStorage
loadTask();

// Evento que se activa al enviar el formulario (agregar una nueva tarea)
taskForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Evitar el comportamiento por defecto del formulario (recargar)

    const taskInput = document.getElementById("task-input"); // Capturar el input de texto
    const task = taskInput.value; // Obtener el valor escrito por el usuario
    console.log(task); // Mostrar en consola (útil para depuración)

    // Si el campo no está vacío, agregar la tarea
    if (task) {
        taskList.appendChild(createTaskElement(task)); // Crear y mostrar el elemento en pantalla
        storeInLocalStorage(task); // Guardar la tarea en localStorage
        taskInput.value = ''; // Limpiar el campo después de agregar
    }
});

// Función para crear un elemento <li> con botones de eliminar y editar
function createTaskElement(task) {
    const li = document.createElement('li'); // Crear un <li> para representar la tarea
    li.textContent = task; // Asignar el texto de la tarea

    // Agregar los botones de eliminar y editar como hijos del <li>
    li.append(
        createButton('❌', 'delete-btn'),  // Botón eliminar
        createButton('✏️', 'edit-btn')     // Botón editar
    );

    return li; // Devolver el elemento completo
}

// Función para crear un botón con texto y clase personalizada
function createButton(text, className) {
    const btn = document.createElement('span'); // Crear un <span> como botón
    btn.textContent = text; // Asignar el símbolo/texto (❌ o ✏️)
    btn.className = className; // Asignar clase CSS (delete-btn o edit-btn)
    return btn; // Devolver el botón creado
}

// Delegación de eventos: escuchar clics en la lista (elemento padre)
taskList.addEventListener("click", (event) => {
    // Si se hizo clic en un botón de eliminar
    if (event.target.classList.contains("delete-btn")) {
        deleteTask(event.target.parentElement); // Eliminar el elemento padre (<li>)
    }
    // Si se hizo clic en un botón de editar
    else if (event.target.classList.contains("edit-btn")) {
        editTask(event.target.parentElement); // Editar el contenido del <li>
    }
});

// Función para eliminar una tarea
function deleteTask(taskItem) {
    if (confirm("¿Seguro que deseas eliminar la tarea?")) {
        taskItem.remove(); // Eliminar el <li> del DOM
        updateLocalStorage(); // Actualizar el estado del localStorage
    }
}

// Función para editar una tarea
function editTask(taskItem) {
    const newTask = prompt("Editar la tarea:", taskItem.firstChild.textContent); // Mostrar input con valor actual

    if (newTask !== null) {
        taskItem.firstChild.textContent = newTask; // Reemplazar el texto con el nuevo valor
        updateLocalStorage(); // Guardar el nuevo estado en localStorage
    }
}

// Guardar una nueva tarea en localStorage
function storeInLocalStorage(task) {
    // Obtener el arreglo de tareas actual desde localStorage
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

    tasks.push(task); // Agregar la nueva tarea al arreglo

    // Guardar el arreglo actualizado en localStorage (como string JSON)
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Cargar e insertar las tareas almacenadas en el DOM
function loadTask() {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]"); // Obtener las tareas almacenadas

    tasks.forEach((task) => {
        taskList.appendChild(createTaskElement(task)); // Agregar cada tarea al HTML
    });
}

// Actualizar localStorage con el contenido actual de la lista
function updateLocalStorage() {
    // Obtener todos los <li> actuales, convertirlos a arreglo y extraer su texto
    const tasks = Array.from(taskList.querySelectorAll("li"))
        .map((li) => li.firstChild.textContent);

    // Guardar el nuevo arreglo en localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

//tema oscuro
const themeToggleButton = document.getElementById("toggle-theme-btn");
const currentTheme = localStorage.getItem("theme");
console.log(currentTheme)

themeToggleButton.addEventListener("click", ()=>{
    document.body.classList.toggle("dark-theme");
    //si body tiene el tema dark-theme va a ser iguala  dark, si no va a ser light
    const theme = document.body.classList.contains("dark-theme") ? "dark" : "light";
    //guardar en local storage el tema para su persistencia 
    localStorage.setItem("theme", theme);
})

//darle persistencia a la clase dark asignandola en el body
if(currentTheme === "dark"){
    document.body.classList.add("dark-theme")
}