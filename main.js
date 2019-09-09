var inputForm = document.querySelector('.user-input-form');
var toDoTaskArr = [];
var toDoCardArr = [];

inputForm.addEventListener('click', function(event) {
    if (event.target.id === 'add-task-button') {
      newItem();
      clearEnabled();
  } if (event.target.id === 'make-task-button') {
      newCardObj();
  } if (event.target.id === 'clear-button') {
      clearAll();
  } if (event.target.id === 'delete-button') {
      deleteTask();
  }
});

inputForm.addEventListener('keyup', function(event) {
  if (event.target.id === 'task-input') {
    clearEnabled();
  }
  if (event.target.id === 'item-input') {
    plusEnabled();
    clearEnabled();
  }
});

function newItem() {
  var itemText = document.getElementById('item-input');
  var tempItems = document.querySelector('.temp-items');
  var addTask = document.querySelector('#add-task-button');
  if (itemText.value === '') {
      addTask.disabled = true;
  } else {
      newTaskObj();
      tempItems.insertAdjacentHTML('beforeend',
        '<li class= temp-task>' +
          '<button class="delete" id="delete-button" type="button" name="button"></button>' +
          itemText.value +
        '</li>');
      return itemText.value = '';
  }
};

function addNewCard(cardObject) {
  var taskDisplay = document.querySelector('.task-display')
  taskDisplay.insertAdjacentHTML('afterbegin',
    `<section class="task-card">
      <div class="task-title-div">
        <h3 class="task-title-h3">${cardObject.title}</h3>
      </div>
      <hr>
      <ul class="card-item-list">
      <hr>
      </ul>
      <div class="card-controls">
        <button class="urgent-button" type="button" name="button">URGENT</button>
        <button class="delete-button" type="button" name="button">DELETE</button>
      </div>
    </section>`);
};

function addTaskToCard(tasks) {
  tasks.forEach(function(task) {
    var ul = document.querySelector('.card-item-list')
    ul.insertAdjacentHTML('afterbegin',
    `<div class="task-buttonli-div">
      <button class="checkbox-button" type="button" name="button"></button>
      <li>${task.item}</li>
    </div>`)
  })
};

function clearAll() {
  var clearButton = document.getElementById('clear-button');
  var itemTitle = document.querySelector('#task-input');
  var itemList = document.querySelector('.temp-items');
  var itemInput = document.querySelector('#item-input');
  if (itemTitle.value !== '' ||
      itemList.innerHTML !== '' ||
      itemInput.value !== '') {
    itemTitle.value = '';
    itemList.innerHTML = '';
    itemInput.value = '';
  } if (itemTitle.value === '' ||
        itemList.innerHTML === '' ||
        itemInput.value === '') {
    clearButton.disabled = true;
  }
}

function deleteTask() {
  if (event.target.className === 'delete') {
    event.target.parentNode.remove();
  }
}

function plusEnabled() {
  var addTask = document.getElementById('add-task-button');
  addTask.disabled = false;
}

function makeListEnabled() {
  var makeListButton = document.querySelector('.make-task-button');
  makeListButton.disabled = false;
}

function clearEnabled() {
  var clearButton = document.getElementById('clear-button');
  clearButton.disabled = false;
}

function newTaskObj() {
  var itemText = document.getElementById('item-input');
  var taskObj = new taskItem(itemText.value);
  toDoTaskArr.push(taskObj);
}

function newCardObj() {
  var title = document.getElementById('task-input');
  var cardObject = new toDoCard(title.value, toDoTaskArr);
  toDoCardArr.push(cardObject);
  console.log(cardObject);
  addNewCard(cardObject);
  addTaskToCard(cardObject.tasks);
  clearAll();
  toDoTaskArr = [];
}
