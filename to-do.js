class toDoCard {
  constructor(title, array) {
    this.title = title;
    this.id = Date.now();
    this.urgent = false;
    this.tasks = array;
  }
}
