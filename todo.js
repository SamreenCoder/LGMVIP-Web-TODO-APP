var todoInput = document.getElementById("input_box");
var todoList = document.getElementById("list_con");

function addtask() {
    if (todoInput.value === '') {
        alert("Add something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = todoInput.value;

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        span.className = "close"; // Add a class to the span for easier selection

        li.appendChild(span);
        todoList.appendChild(li);

        span.addEventListener("click", function () {
            li.remove(); // Remove the clicked list item
        });
    }

    todoInput.value = "";
}






