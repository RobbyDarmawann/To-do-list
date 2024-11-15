function addTask(day) {
  const input = document.getElementById(`${day}-input`);
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const listItem = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.onclick = () => toggleTaskCompletion(listItem);

  const taskTextNode = document.createTextNode(taskText);

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.classList.add("delete-btn");
  deleteButton.onclick = () => deleteTask(listItem);

  listItem.appendChild(checkbox);
  listItem.appendChild(taskTextNode);
  listItem.appendChild(deleteButton);

  const list = document.getElementById(`${day}-list`);
  list.appendChild(listItem);

  input.value = "";
}

function toggleTaskCompletion(listItem) {
  listItem.classList.toggle("completed");
}

function deleteTask(listItem) {
  listItem.remove();
}
