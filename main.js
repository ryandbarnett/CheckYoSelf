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
})

inputForm.addEventListener('keyup', function(event) {
  if (event.target.id === 'task-input') {
    clearEnabled();
  }
  if (event.target.id === 'item-input') {
    plusEnabled();
    clearEnabled();
  }
})

function newItem() {
  var itemText = document.getElementById('item-input');
  var tempItems = document.querySelector('.temp-items');
  var addTask = document.querySelector('#add-task-button');
  if (itemText.value === '') {
      addTask.disabled = true;
  } else {
      newTask();
      tempItems.insertAdjacentHTML('beforeend',
        '<li class= temp-task>' +
          '<button class="delete" id="delete-button" type="button" name="button"></button>' +
          itemText.value +
        '</li>');
      return itemText.value = '';
    }
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

function clearEnabled() {
  var clearButton = document.getElementById('clear-button');
  clearButton.disabled = false;
}

// change function name to newTask to newTaskObj to better reflect what is happening?
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
