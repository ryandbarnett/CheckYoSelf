var inputForm = document.querySelector('.user-input-form');

inputForm.addEventListener('click', function(event) {
  if (event.target.id ==='add-task-button') {
      newItem();
  } if (event.target.id ==='make-task-button') {
      newCard();
  } if (event.target.id ==='clear-button') {
      clearAll();
  } if (event.target.id ==='delete-button') {
      deleteTask();
  }
})

  function newItem() {
    var itemText = document.getElementById('item-input');
    var tempItems = document.querySelector('.temp-items');
    var addTask = document.querySelector('#add-task-button')
    if (itemText.value !== '') {
        tempItems.insertAdjacentHTML('beforeend', "<li class= temp-task>" + '<button class="delete" id="delete-button" type="button" name="button"></button>' + itemText.value + "</li>");
        addTask.style.outlineWidth = '4px';
  } else {
        addTask.style.outlineWidth = '0px';
      }}

  function newCard() {
    var makeCard= document.querySelector('#make-task-button');

  }

  function clearAll() {
    var clearButton = document.getElementById('clear-button');
    var itemTitle = document.querySelector('#task-input');
    var itemList = document.querySelector('.temp-items');
    if (itemTitle.value !== '') {
      clearButton.disabled = false;
      itemTitle.value = '';
      itemList.innerHTML = '';
    } if (itemTitle.value !== '') {
      clearButton.disabled = true;
    }
  }

  // function dontAdd() {
  //   var makeTaskButton = document.getElementById('make-task-button');
  //   var itemInput = document.getElementById('item-input');
  //   if (itemInput.value !== '') {
  //     makeTaskButton.disabled = false;
  //   } if (itemInput.value === '') {
  //     makeTaskButton.disabled = true;
  //   }
  // }

  // function deleteTask() {
  //   var deleteButton = document.getElementById('delete-button');
  //   var tempItems = document.querySelector('temp-items');
