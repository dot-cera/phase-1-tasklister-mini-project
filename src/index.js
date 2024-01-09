document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('create-task-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const taskDescription = document.getElementById('new-task-description').value;
    createTask(taskDescription);
  });

  function createTask(description) {
    const taskList = document.getElementById('tasks');
    const newTask = document.createElement('li');
    const btn = document.createElement('button');

    btn.textContent = "x";
    btn.style.marginLeft = "3px";
    newTask.textContent = description;

    btn.addEventListener('click', function() {
      taskList.removeChild(newTask);
      updateTaskList(); 
    });

    newTask.appendChild(btn);
    taskList.appendChild(newTask);
    updateTaskList(); 
  }

  function updateTaskList() {

    const taskList = document.getElementById('tasks');
    const tasksArray = Array.from(taskList.children);

    taskList.innerHTML = '';
    tasksArray.forEach(task => taskList.appendChild(task));
  }
});
