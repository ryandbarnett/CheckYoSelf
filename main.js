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
    makeListEnabled();
    removeTitleError();
  } if (event.target.id === 'item-input') {
      plusEnabled();
      clearEnabled();
      removeTaskError();
  }
});

function newItem() {
  var itemText = document.getElementById('item-input');
  var tempItems = document.querySelector('.temp-items');
  var addTask = document.querySelector('#add-task-button');
  if (itemText.value === '') {
      addTask.disabled = true;
      noTaskError();
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
  var taskDisplay = document.querySelector('.task-display');
  var itemTitle = document.querySelector('#task-input');
  var newTaskButton = document.getElementById('make-task-button');
  if (itemTitle.value === '') {
    newTaskButton.disabled = true;
    noTitleError();
  } else {
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
    removeTempCard();
}}

function addTaskToCard(tasks) {
  tasks.forEach(function(task) {
    var ul = document.querySelector('.card-item-list')
    ul.insertAdjacentHTML('afterbegin',
    `<div class="task-buttonli-div">
      <button class="checkbox-button" type="button" name="button"></button>
      <li>${task.item}</li>
    </div>`)
  })
}

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
  var makeListButton = document.getElementById('make-task-button');
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

function noTitleError() {
  var itemTitle = document.querySelector('#task-input');
  var titleError = document.getElementById('title-error');
  itemTitle.style.borderColor = '#FFC30C';
  titleError.style.display = 'block';
}

function removeTitleError() {
  var itemTitle = document.querySelector('#task-input');
  var titleError = document.getElementById('title-error');
  itemTitle.style.borderColor = '#1F1F3D';
  titleError.style.display = 'none';
}

function noTaskError() {
  var itemText = document.getElementById('item-input');
  var taskError = document.getElementById('item-error');
  var addButton = document.getElementById('add-task-button');
  itemText.style.borderColor = '#FFC30C';
  itemText.style.borderWidth = '4px 0px 4px 4px';
  addButton.style.height = '60px'
  taskError.style.display = 'inline';
}

function removeTaskError() {
  var itemText = document.getElementById('item-input');
  var taskError = document.getElementById('item-error');
  var addButton = document.getElementById('add-task-button');
  itemText.style.borderColor = '#1F1F3D';
  itemText.style.borderWidth = '2px'
  addButton.style.height = '56px'
  taskError.style.display = 'none';
}

function removeTempCard() {
  var tempTaskCard = document.querySelector('#temp-task-card');
  tempTaskCard.style.display = 'none';
}
