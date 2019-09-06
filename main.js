var inputForm = document.querySelector('.user-input-form');

inputForm.addEventListener('click', function(event) {
    if (event.target.id === 'add-task-button') {
      newItem();
  } if (event.target.id === 'make-task-button') {
      newCard();
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

function plusEnabled() {
  var addTask = document.getElementById('add-task-button');
  addTask.disabled = false;
}

function clearEnabled() {
  var clearButton = document.getElementById('clear-button');
  clearButton.disabled = false;
}

// WIP >>>>>>>>>>>>>>>>>>>>

// var toDoTaskArr = [];
//
// function toDoTaskObj() {
//   var itemList = document.querySelector('.temp-items');
//   for (var i = 0; i <= toDoTaskArr.length; i++) {
//     var toDoTaskArr[i] = new taskItem(itemList.innerHTML);
//   }
//   toDoTaskArr.push(toDoTaskArr[i]);
// }

// =====================

// function newCard() {
//   var makeCard= document.querySelector('#make-task-button');
//   createToDoObject();
//   console.log(toDoObject);
// }

// var toDoObject = [];
//
// function createToDoObject() {
//   var itemTitle = document.querySelector('#task-input');
//   for (var i = 0; i <= toDoObject.length; i++) {
//     var toDoObject[i] = new toDoItem(itemTitle.value)
//   }
//   toDoObject.push(toDoObject[i]);
// }
// <<<<<<<<<<<<<<<<<<<<<<<<<<<
