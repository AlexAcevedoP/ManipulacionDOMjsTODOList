//capturar el formulario por su id
const taskForm = document.getElementById("task-form");
//captutar la lista de tareas
const taskList =document.getElementById("task-list");

//evento para tomar el valor del formulario
taskForm.addEventListener("submit",
    (event)=> {
        event.preventDefault();
        //tomar el input
        const taskInput = document.getElementById("task-input");
        //tomar el valor del imput
        const task = taskInput.value;
        console.log(task)  
        //si el campo no esta vacio crear un nuevo elemento de tarea
        if(task) {
            taskList.append(createTaskElement(task))
            taskInput.value = ''//limpiar el campo despues de agregar la tarea
          }      
    }    
)
// Función para crear un elemento de tarea
function createTaskElement(task) {
    const li = document.createElement('li'); // Crea un elemento <li> para la tarea
    li.textContent = task; // Asigna el texto de la tarea al elemento <li>
    li.append(createButton('❌', 'delete-btn'), createButton('✏️', 'edit-btn')); // Agrega botones de eliminar y editar a la tarea
    return li; // Devuelve el elemento <li> creado
}

// Función para crear un botón con texto y clase
function createButton(text, className) {
    const btn = document.createElement('span'); // Crea un elemento <span> para el botón
    btn.textContent = text; // Asigna el texto al botón
    btn.className = className; // Asigna la clase al botón
    return btn; // Devuelve el botón creado
}