// Ambil elemen DOM
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

function addTodo() {
  const task = todoInput.value.trim();

  if (task === "") {
    alert("Tugas tidak boleh kosong!");
    return;
  }

  const listItem = document.createElement("li");
  listItem.textContent = task;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Hapus";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", () => {
    todoList.removeChild(listItem);
  });

  listItem.appendChild(deleteBtn);

  todoList.appendChild(listItem);

  todoInput.value = "";
}

addBtn.addEventListener("click", addTodo);

todoInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});
