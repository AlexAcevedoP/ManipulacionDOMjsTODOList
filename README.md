# Documentación del archivo `app.js`

Este archivo contiene la lógica principal de la aplicación de gestión de tareas (To-Do List) desarrollada en JavaScript puro. Permite agregar, editar, eliminar y persistir tareas usando el almacenamiento local del navegador (`localStorage`). Además, incluye la funcionalidad de modo oscuro con persistencia.

---

## Índice

- [Inicialización y captura de elementos](#inicialización-y-captura-de-elementos)
- [Agregar tareas](#agregar-tareas)
- [Crear elementos de tarea y botones](#crear-elementos-de-tarea-y-botones)
- [Delegación de eventos para editar y eliminar](#delegación-de-eventos-para-editar-y-eliminar)
- [Eliminar tareas](#eliminar-tareas)
- [Editar tareas](#editar-tareas)
- [Persistencia con localStorage](#persistencia-con-localstorage)
- [Modo oscuro](#modo-oscuro)
- [Notas adicionales](#notas-adicionales)

---

## Inicialización y captura de elementos

- Se capturan los elementos principales del DOM: el formulario de tareas (`task-form`) y la lista donde se mostrarán las tareas (`task-list`).
- Al cargar la página, se ejecuta `loadTask()` para mostrar las tareas almacenadas previamente en `localStorage`.

## Agregar tareas

- Se escucha el evento `submit` del formulario.
- Al enviar, se previene el comportamiento por defecto y se obtiene el valor del input.
- Si el campo no está vacío:
  - Se crea un nuevo elemento de tarea y se agrega a la lista.
  - Se almacena la tarea en `localStorage`.
  - Se limpia el campo de entrada.

## Crear elementos de tarea y botones

- `createTaskElement(task)`: Crea un elemento `<li>` con el texto de la tarea y dos botones: eliminar (❌) y editar (✏️).
- `createButton(text, className)`: Crea un botón personalizado usando un `<span>` con el texto y la clase CSS correspondiente.

## Delegación de eventos para editar y eliminar

- Se utiliza la delegación de eventos en `taskList` para detectar clics en los botones de eliminar y editar.
- Si se hace clic en el botón de eliminar, se llama a `deleteTask`.
- Si se hace clic en el botón de editar, se llama a `editTask`.

## Eliminar tareas

- `deleteTask(taskItem)`: Solicita confirmación al usuario. Si acepta, elimina el elemento `<li>` del DOM y actualiza el estado de `localStorage`.

## Editar tareas

- `editTask(taskItem)`: Muestra un `prompt` con el texto actual de la tarea. Si el usuario ingresa un nuevo valor, se actualiza el texto y se guarda el cambio en `localStorage`.

## Persistencia con localStorage

- `storeInLocalStorage(task)`: Agrega una nueva tarea al arreglo de tareas en `localStorage`.
- `loadTask()`: Carga todas las tareas almacenadas y las inserta en el DOM.
- `updateLocalStorage()`: Actualiza el arreglo de tareas en `localStorage` según el contenido actual de la lista en el DOM.

## Modo oscuro

- Se captura el botón de alternar tema (`toggle-theme-btn`) y el tema actual almacenado.
- Al hacer clic en el botón, se alterna la clase `dark-theme` en el `<body>` y se guarda la preferencia en `localStorage`.
- Si el tema almacenado es "dark", se aplica automáticamente al cargar la página.

## Notas adicionales

- El código está comentado para facilitar su comprensión.
- Se recomienda complementar este archivo con los archivos de estilos (`styles.css`) y la estructura HTML correspondiente.
- El almacenamiento de tareas y el tema es persistente entre recargas de página gracias a `localStorage`.

---
