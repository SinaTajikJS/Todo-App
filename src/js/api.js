export default class api {
  static getTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  }
  static saveTask(task) {
    const tasks = api.getTasks();
    const exist = tasks.find((item) => item.id == task.id);
    if (exist) {
      exist.body = task.body;
    } else {
      tasks.push({
        id: new Date().getTime(),
        body: task.body,
        isChecked: false,
      });
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  static checkTask(id, bool) {
    const tasks = api.getTasks();
    const targetTask = tasks.find((task) => task.id == id);
    if (targetTask.isChecked) {
      targetTask.isChecked = false;
    } else {
      targetTask.isChecked = true;
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  static deleteTask(id) {
    const tasks = api.getTasks();
    const newTasks = tasks.filter((task) => task.id != id);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  }
}
