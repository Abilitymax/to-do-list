// 获取 DOM 元素
const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");

// 添加任务函数
function addTodo() {
    const taskText = todoInput.value.trim();
    if (taskText === "") {
        alert("请输入任务内容！");
        return;
    }

    // 创建任务项
    const listItem = document.createElement("li");
    listItem.className = "todo-item";

    // 任务文本
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    // 删除按钮
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "删除";
    deleteButton.className = "delete-button";
    deleteButton.onclick = function () {
        todoList.removeChild(listItem);
    };

    // 组合任务项
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);

    // 清空输入框
    todoInput.value = "";
}

// 绑定添加按钮点击事件
addButton.addEventListener("click", addTodo);

// 绑定回车键事件
todoInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTodo();
    }
});