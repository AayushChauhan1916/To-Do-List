function addTask() {
  let taskInput = document.getElementById('new-task');
  let taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task.');
    return;
  }

  let taskList = document.getElementById('task-list');
  let newTask = document.createElement('li');
  newTask.innerHTML = `
    <span>${taskText}</span>
    <button onclick="completeTask(this)">Complete</button>
    <button onclick="deleteTask(this)">Delete</button>
  `;

  taskList.appendChild(newTask);
  taskInput.value = '';
  taskInput.focus();
  updateTaskCount();
}

function completeTask(button) {
  let taskItem = button.parentNode;
  taskItem.classList.toggle('completed');
  updateTaskCount();
}
  
function deleteTask(button) {
  let taskItem = button.parentNode;
  taskItem.parentNode.removeChild(taskItem);
  updateTaskCount();
}
  
function clearCompleted() {
  let completedTasks = document.querySelectorAll('.completed');
  completedTasks.forEach(function (task) {
    task.parentNode.removeChild(task);
  });
  updateTaskCount();
}
  
function updateTaskCount() {
  var taskCount = document.querySelectorAll('#task-list li:not(.completed)').length;
  document.getElementById('task-counter').textContent = taskCount;
}