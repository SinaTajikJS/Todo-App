import api from "./api.js";
export default class dom {
  constructor(handers) {
    const { deleteTask, saveTask, checkTask } = handers;
    this.deleteTask = deleteTask;
    this.saveTask = saveTask;
    this.checkTask = checkTask;

    this.doc = document.getElementById("app");
    this.doc.innerHTML = `
    <h1 class="title">Todo App</h1>
    <div class="input-select">
          <form class="input">
            <input type="text" placeholder="Add New Todo" />
            <button type="submit" class="submit">
              <img class="input__add" src="./assets/add.svg" />
            </button>
          </form>
          <div class="select">
            <select>
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
            </select>
            <img class="sort" src="./assets/sort.svg" />
        </div>
      </div>
      <ul class="tasks"></ul>
    `;
    this.domInput = this.doc.querySelector("input");
    this.loadTasks();
    this.selected = null;

    // add eventListener on add icon
    this.doc.querySelector("button.submit").addEventListener("click", (e) => {
      this.saveTask(e);
    });

    // add eventLisetener on select
    this.doc
      .querySelector("div.select")
      .addEventListener("click", this.filterTasks);
  }
  _createTasksHtml(task) {
    return `
    <li class="task ${task.isChecked ? "check" : ""}">
      <p class="task__text ${task.isChecked ? "line-through" : ""}">${
      task.body
    }</p>
      <div class="task__icons">
        <img src="./assets/check.svg" class="task__check" data-id="${
          task.id
        }" />
        <img src="./assets/edit.svg" class="task__edit" data-id="${task.id}" />
        <img src="./assets/trash.svg" class="task__trash" data-id="${
          task.id
        }" />
      </div>
    </li>
    `;
  }
  loadTasks(_tasks) {
    const tasks = _tasks || api.getTasks();
    let domTasks = "";
    const tasksContainer = this.doc.querySelector("ul.tasks");
    for (const task of tasks) {
      domTasks += this._createTasksHtml(task);
    }
    tasksContainer.innerHTML = domTasks;

    // add eventListeners on edit icons
    this.doc.querySelectorAll("img.task__edit").forEach((item) => {
      item.addEventListener("click", this.editTask);
    });

    // add eventListeners on delete icons
    this.doc.querySelectorAll("img.task__trash").forEach((item) => {
      item.addEventListener("click", this.deleteTask);
    });

    // add eventListeners on check icons
    this.doc.querySelectorAll("img.task__check").forEach((item) => {
      item.addEventListener("click", this.checkTask);
    });
  }
  editTask = (event) => {
    const tasks = api.getTasks();
    const targetTask = tasks.find((task) => task.id == event.target.dataset.id);
    this.domInput.value = targetTask.body;
    this.selected = targetTask.id;
  };
  filterTasks = (e) => {
    const tasks = api.getTasks();
    const value = e.target.value;
    const trueCheck = tasks.filter((item) => item.isChecked === true);
    const falseCheck = tasks.filter((item) => item.isChecked === false);
    if (value === "all") this.loadTasks(tasks);
    else if (value === "completed") this.loadTasks(trueCheck);
    else if (value === "uncompleted") this.loadTasks(falseCheck);
  };
}
