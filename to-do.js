class ToDoItem {
  constructor(title) {
    this.title = title;
    this.id = this.title; // time/date from browser?
    this.urgent = false;
    this.tasks = [];
  }
}
