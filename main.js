var inputForm = document.querySelector('.user-input-form');
var toDoTaskArr = [];
var toDoCardArr = [];

inputForm.addEventListener('click', function(event) {
    if (event.target.id === 'add-task-button') {
      newItem();
  } if (event.target.id === 'make-task-button') {
      newCardObj();
      console.log(toDoCardArr[0]);
  } if (event.target.id === 'clear-button') {
      clearAll();
  } if (event.target.id === 'delete-button') {
      deleteTask();
  }
})

inputForm.addEventListener('keyup', function(event) {
  if (event.target.id === 'task-input') {
    clearEnabled();
  }
  if (event.target.id === 'item-input') {
    plusEnabled();
  }
})

function newItem() {
  var itemText = document.getElementById('item-input');
  var tempItems = document.querySelector('.temp-items');
  var addTask = document.querySelector('#add-task-button');
  newTask();
  if (itemText.value !== '') {
      tempItems.insertAdjacentHTML('beforeend',
      '<li class= temp-task>' +
        '<button class="delete" id="delete-button" type="button" name="button"></button>' +
        itemText.value +
      '</li>');
} if (itemText.value === '') {
      addTask.disabled = true;
    }}

function clearAll() {
  var clearButton = document.getElementById('clear-button');
  var itemTitle = document.querySelector('#task-input');
  var itemList = document.querySelector('.temp-items');
  if (itemTitle.value !== '') {
    itemTitle.value = '';
    itemList.innerHTML = '';
  } if (itemTitle.value === '') {
    clearButton.disabled = true;
  }
}

function deleteTask() {
  if (event.target.className === 'delete') {
    console.log(event.target.parentNode);
    event.target.parentNode.remove();
  }
}

function plusEnabled() {
  var addTask = document.getElementById('add-task-button');
  addTask.disabled = false;
}

function clearEnabled() {
  var clearButton = document.getElementById('clear-button');
  clearButton.disabled = false;
}

function newTask() {
  var itemText = document.getElementById('item-input');
  var newTaskItem = new taskItem(itemText.value);
  toDoTaskArr.push(newTaskItem);
}

function newCardObj() {
  var title = document.getElementById('task-input');
  var cardObject = new toDoCard(title.value, toDoTaskArr);
  toDoCardArr.push(cardObject);
}
