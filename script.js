 // Get the necessary elements
 const todoForm = document.getElementById('todo-form');
 const todoInput = document.getElementById('todo-input');
 const addButton = document.getElementById('add-button');
 const todoList = document.getElementById('todo-list');

 // Function to create a task element
 function createTaskElement(taskText) {
   const taskItem = document.createElement('li');
   const taskLabel = document.createElement('label');
   taskLabel.innerText = taskText;

   const deleteButton = document.createElement('button');
   deleteButton.innerText = 'Delete';
   deleteButton.addEventListener('click', deleteTask);

   const editButton = document.createElement('button');
   editButton.innerText = 'Edit';
   editButton.classList.add('edit-button');
   editButton.addEventListener('click', editTask);

   const snoozeButton = document.createElement('button');
   snoozeButton.innerText = 'Snooze';
   snoozeButton.addEventListener('click', snoozeTask);

   const importantButton = document.createElement('button');
   importantButton.innerText = 'Important';
   importantButton.addEventListener('click', markImportant);

   taskItem.appendChild(taskLabel);
   taskItem.appendChild(deleteButton);
   taskItem.appendChild(editButton);
   taskItem.appendChild(snoozeButton);
   taskItem.appendChild(importantButton);

   return taskItem;
 }

 // Function to add a new task
 function addTask() {
   const taskText = todoInput.value;
   if (taskText) {
     const taskItem = createTaskElement(taskText);

     todoList.appendChild(taskItem);
     todoInput.value = '';
   }
 }

 // Function to delete a task
 function deleteTask(event) {
   const taskItem = event.target.parentNode;
   todoList.removeChild(taskItem);
 }

 // Function to edit a task
 function editTask(event) {
   const taskItem = event.target.parentNode;
   const taskLabel = taskItem.querySelector('label');
   const newTaskText = prompt('Enter new task text:');
   if (newTaskText) {
     taskLabel.innerText = newTaskText;
   }
 }

 // Function to snooze a task
 function snoozeTask(event) {
   const taskItem = event.target.parentNode;
   taskItem.classList.add('snoozed');
 }

 // Function to mark a task as important
 function markImportant(event) {
   const taskItem = event.target.parentNode;
   taskItem.classList.toggle('important');
 }

 // Event listener for the add button
 addButton.addEventListener('click', addTask);

 // Event listener for the Enter key
 todoInput.addEventListener('keydown', function (event) {
   if (event.key === 'Enter') {
     event.preventDefault();
     addTask();
   }
 });