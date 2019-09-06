class toDoItem {
  constructor(title) {
    this.title = title;
    this.id = Date.now();
    this.urgent = false;
    this.tasks = [];
  }
}
