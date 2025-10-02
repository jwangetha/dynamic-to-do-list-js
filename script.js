// script.js
return;
}


// Create a new li and set its text content
const li = document.createElement('li');
li.textContent = taskText; // task text


// Create a remove button for this task
const removeButton = document.createElement('button');
removeButton.textContent = 'Remove';
removeButton.className = 'remove-btn';


// When clicked, remove this li from the task list
removeButton.onclick = function () {
// Remove the specific list item from the parent
if (taskList.contains(li)) {
taskList.removeChild(li);
}
};


// Append remove button to the list item, then append li to the list
li.appendChild(removeButton);
taskList.appendChild(li);


// Clear the input field and bring focus back to it
taskInput.value = '';
taskInput.focus();
}


// Attach event listeners for adding tasks
addButton.addEventListener('click', addTask);


// Allow adding by pressing the Enter key inside the input
taskInput.addEventListener('keypress', function (event) {
if (event.key === 'Enter') {
addTask();
}
});


// Optional: if the input already has text on load (e.g., pre-filled), add it.
// This satisfies the requirement to invoke addTask on DOMContentLoaded _only_ when
// there is pre-existing input — avoids an empty-alert on page load.
if (taskInput.value.trim() !== '') {
addTask();
}
});