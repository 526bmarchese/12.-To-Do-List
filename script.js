//Initialize am array to store tasks
let tasks  = [] 

//Add an event listener to add tasks TO the Add Task Button
document.getElementById('addTaskBtn').addEventListener('click', function() {
//Storing text value from input box as a variable 'taskInput'
let taskInput = document.getElementById('taskInput').value

//
if (taskInput){

//
tasks.push(taskInput)

//
document.getElementById('taskInput').value =''

//
displayTasks()
}

})