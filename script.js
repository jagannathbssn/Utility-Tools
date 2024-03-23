const task = document.getElementById("task");
const addbtn = document.getElementById("addbtn");
const todolist = document.getElementById("todolist");

addbtn.addEventListener("click", function () {
  document.getElementById("er").innerHTML = "";
  const taskText = task.value.trim();
  if (taskText === "") {
    document.getElementById("er").innerHTML = "* please fill the task box";
  } else {
    let li = document.createElement("li");
    li.textContent = taskText;

    const del = document.createElement("button");
    del.textContent = "Delete";
    del.addEventListener("click", function () {
      todolist.removeChild(li);
    });

    li.appendChild(del);
    todolist.appendChild(li);
    task.value = "";
  }
});
