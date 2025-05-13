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


        
    }
)
