var inputForm = document.querySelector('.user-input-form');

inputForm.addEventListener('click', function(event) {
  if (event.target.id ==='add-task-button') {
      newItem();
  } if (event.target.id ==='make-task-button') {
      newCard();
  } if (event.target.id ==='clear-button') {
      clearAll();
  }
})

  function newItem() {
    var itemText= document.querySelector('#item-input');
    var tempItems= document.querySelector('.temp-items');
    tempItems.insertAdjacentHTML('beforeend', "<li>" + itemText.value + "</li>");
  }

  function newCard() {
    var makeCard= document.querySelector('#make-task-button');

  }

  function clearAll() {
    var makeCard= document.querySelector('#clear-button');

  }
