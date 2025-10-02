document.addEventListener('DOMContentLoaded', () => {
  const taskForm = document.getElementById('taskForm');
  const taskInput = document.getElementById('taskInput');
  const taskList  = document.getElementById('taskList');

  // In-memory array of tasks
  let tasks = [];

  // Save tasks to localStorage
  function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Create and append a task element to the DOM
  function createTaskElement(text) {
    const li = document.createElement('li');
    li.className = 'task-item';

    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = text;

    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.textContent = 'Remove';

    // Remove task logic
    removeBtn.addEventListener('click', () => {
      const index = Array.from(taskList.children).indexOf(li);
      if (index > -1) {
        tasks.splice(index, 1); // remove from array
        saveTasks();            // update localStorage
      }
      li.remove(); // remove from UI
    });

    li.appendChild(span);
    li.appendChild(removeBtn);
    taskList.appendChild(li);
  }

  // Add a new task
  function addTask(taskText, save = true) {
    const text = taskText.trim();
    if (!text) return;

    if (save) {
      tasks.push(text);
      saveTasks();
    }

    createTaskElement(text);
  }

  // Load tasks from localStorage on page load
  function loadTasks() {
    tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    tasks.forEach(task => addTask(task, false)); // render without re-saving
  }

  // Event listener for adding a task
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addTask(taskInput.value);
    taskInput.value = '';
    taskInput.focus();
  });

  // Initial load
  loadTasks();
});
