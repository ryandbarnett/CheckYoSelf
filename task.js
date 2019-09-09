class taskItem {
  constructor(task) {
    // better naming?
    this.item = task;
    this.complete = false;
    this.id = Date.now();
  }
}
