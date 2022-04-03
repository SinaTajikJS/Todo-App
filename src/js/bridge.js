import api from "./api.js";
import dom from "./dom.js";
export default class bridge {
  constructor() {
    this.dom = new dom(this.handlers());
  }
  handlers() {
    return {
      checkTask: (event) => {
        api.checkTask(event.target.dataset.id);
        this.dom.loadTasks();
      },
      saveTask: (event) => {
        event.preventDefault();
        if (this.dom.domInput.value !== "") {
          api.saveTask({
            id: this.dom.selected,
            body: this.dom.domInput.value,
          });
          this.dom.loadTasks();
        }
        this.dom.domInput.value = "";
        this.dom.selected = null;
      },
      deleteTask: (event) => {
        api.deleteTask(event.target.dataset.id);
        this.dom.loadTasks();
      },
    };
  }
}
